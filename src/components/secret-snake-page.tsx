"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BottomSigns } from "@/components/bottom-signs";
import { DesktopHeader } from "@/components/desktop/desktop-header";
import { MobileHeader } from "@/components/mobile/mobile-header";

const BOARD_SIZE = 16;
const CELL_SIZE = 22;
const TICK_MS = 120;
const STORAGE_KEY = "secret-snake-best-score";

type Point = {
  x: number;
  y: number;
};

type Direction = "up" | "down" | "left" | "right";

type BestScore = {
  name: string;
  score: number;
};

function randomFood(snake: Point[]) {
  const occupied = new Set(snake.map((segment) => `${segment.x}:${segment.y}`));
  const freeCells: Point[] = [];

  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      if (!occupied.has(`${x}:${y}`)) {
        freeCells.push({ x, y });
      }
    }
  }

  if (freeCells.length === 0) {
    return { x: BOARD_SIZE - 1, y: BOARD_SIZE - 1 };
  }

  return freeCells[Math.floor(Math.random() * freeCells.length)];
}

function nextHead(head: Point, direction: Direction) {
  if (direction === "up") return { x: head.x, y: head.y - 1 };
  if (direction === "down") return { x: head.x, y: head.y + 1 };
  if (direction === "left") return { x: head.x - 1, y: head.y };
  return { x: head.x + 1, y: head.y };
}

function isOppositeDirection(current: Direction, next: Direction) {
  return (
    (current === "up" && next === "down") ||
    (current === "down" && next === "up") ||
    (current === "left" && next === "right") ||
    (current === "right" && next === "left")
  );
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  );
}

function createInitialSnake() {
  return [
    { x: 7, y: 8 },
    { x: 6, y: 8 },
    { x: 5, y: 8 },
  ];
}

export function SecretSnakePage() {
  const initialSnake = useMemo(() => createInitialSnake(), []);
  const [best, setBest] = useState<BestScore>(() => {
    if (typeof window === "undefined") {
      return { name: "No name", score: 0 };
    }

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return { name: "No name", score: 0 };
      }

      const parsed = JSON.parse(raw) as Partial<BestScore>;
      if (typeof parsed.name === "string" && typeof parsed.score === "number") {
        return { name: parsed.name, score: parsed.score };
      }
    } catch {
      // Ignore corrupt local data.
    }

    return { name: "No name", score: 0 };
  });
  const [snake, setSnake] = useState<Point[]>(initialSnake);
  const [direction, setDirection] = useState<Direction>("right");
  const [queuedDirection, setQueuedDirection] = useState<Direction>("right");
  const [food, setFood] = useState<Point>(() => randomFood(initialSnake));
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [candidateName, setCandidateName] = useState("");
  const [needsRecordSave, setNeedsRecordSave] = useState(false);

  const restartGame = () => {
    const freshSnake = createInitialSnake();
    setSnake(freshSnake);
    setDirection("right");
    setQueuedDirection("right");
    setFood(randomFood(freshSnake));
    setScore(0);
    setIsGameOver(false);
    setNeedsRecordSave(false);
    setCandidateName("");
    setIsRunning(false);
  };

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (isEditableTarget(event.target)) {
        return;
      }

      if (event.code === "Space") {
        event.preventDefault();
        if (needsRecordSave) {
          return;
        }

        if (isGameOver) {
          restartGame();
          return;
        }

        setIsRunning((current) => !current);
        return;
      }

      let nextDirection: Direction | null = null;

      if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
        nextDirection = "up";
      } else if (event.key === "ArrowDown" || event.key.toLowerCase() === "s") {
        nextDirection = "down";
      } else if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        nextDirection = "left";
      } else if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        nextDirection = "right";
      }

      if (!nextDirection) {
        return;
      }

      event.preventDefault();
      if (isOppositeDirection(direction, nextDirection)) {
        return;
      }

      setQueuedDirection(nextDirection);
      if (!isGameOver) {
        setIsRunning(true);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [direction, isGameOver, needsRecordSave]);

  useEffect(() => {
    if (!isRunning || isGameOver || needsRecordSave) {
      return;
    }

    const timer = window.setInterval(() => {
      setSnake((currentSnake) => {
        const activeDirection = isOppositeDirection(direction, queuedDirection)
          ? direction
          : queuedDirection;
        const head = currentSnake[0];
        const proposedHead = nextHead(head, activeDirection);

        setDirection(activeDirection);

        const hitWall =
          proposedHead.x < 0 ||
          proposedHead.y < 0 ||
          proposedHead.x >= BOARD_SIZE ||
          proposedHead.y >= BOARD_SIZE;

        const hitSelf = currentSnake.some(
          (segment) => segment.x === proposedHead.x && segment.y === proposedHead.y,
        );

        if (hitWall || hitSelf) {
          setIsRunning(false);
          setIsGameOver(true);
          setNeedsRecordSave(score > best.score);
          return currentSnake;
        }

        const ateFood = proposedHead.x === food.x && proposedHead.y === food.y;
        const nextSnake = [proposedHead, ...currentSnake];

        if (!ateFood) {
          nextSnake.pop();
          return nextSnake;
        }

        const nextScore = score + 1;
        setScore(nextScore);
        setFood(randomFood(nextSnake));
        return nextSnake;
      });
    }, TICK_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [best.score, direction, food, isGameOver, isRunning, needsRecordSave, queuedDirection, score]);

  function saveRecord() {
    const trimmedName = candidateName.trim();
    const nextBest = {
      name: trimmedName || "Anonymous",
      score,
    };

    setBest(nextBest);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextBest));
    setNeedsRecordSave(false);
    setCandidateName("");
  }

  return (
    <>
      <DesktopHeader />
      <MobileHeader />

      <div className="viewport viewport--desktop">
        <div className="secret-snake-page" id="top">
          <div className="secret-snake-page__inner">
            <section className="secret-snake-panel" aria-label="Snake game">
              <div className="secret-snake-panel__header">
                <div>
                  <p className="secret-snake-panel__eyebrow">Hidden page</p>
                  <h1 className="secret-snake-panel__title">Snake</h1>
                </div>
                <Link className="secret-snake-panel__back" href="/">
                  Back to main
                </Link>
              </div>

              <div className="secret-snake-board">
                {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
                  const x = index % BOARD_SIZE;
                  const y = Math.floor(index / BOARD_SIZE);
                  const snakeIndex = snake.findIndex(
                    (segment) => segment.x === x && segment.y === y,
                  );
                  const isFood = food.x === x && food.y === y;

                  return (
                    <span
                      key={`${x}-${y}`}
                      className={[
                        "secret-snake-board__cell",
                        snakeIndex === 0 ? "secret-snake-board__cell--head" : "",
                        snakeIndex > 0 ? "secret-snake-board__cell--body" : "",
                        isFood ? "secret-snake-board__cell--food" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                  );
                })}
              </div>

              <div className="secret-snake-panel__hud">
                <div className="secret-snake-stat">
                  <span className="secret-snake-stat__label">Score</span>
                  <strong className="secret-snake-stat__value">{score}</strong>
                </div>
                <div className="secret-snake-stat">
                  <span className="secret-snake-stat__label">Best</span>
                  <strong className="secret-snake-stat__value">
                    {best.score} / {best.name}
                  </strong>
                </div>
              </div>

              <div className="secret-snake-panel__status">
                {!isRunning && !isGameOver && !needsRecordSave ? (
                  <p>Press `Space` to start. Use arrows or WASD.</p>
                ) : null}
                {isRunning ? <p>Game is running.</p> : null}
                {isGameOver && !needsRecordSave ? (
                  <p>Game over. Press `Space` to restart.</p>
                ) : null}
                {needsRecordSave ? (
                  <div className="secret-snake-record">
                    <p className="secret-snake-record__title">New best score. Save your name.</p>
                    <div className="secret-snake-record__row">
                      <input
                        className="secret-snake-record__input"
                        maxLength={24}
                        placeholder="Your name"
                        value={candidateName}
                        onChange={(event) => setCandidateName(event.target.value)}
                      />
                      <button
                        className="secret-snake-record__button"
                        type="button"
                        onClick={saveRecord}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="viewport viewport--mobile">
        <div className="secret-snake-mobile-placeholder" id="top">
          <p>This page is desktop only.</p>
        </div>
      </div>

      <BottomSigns />
    </>
  );
}

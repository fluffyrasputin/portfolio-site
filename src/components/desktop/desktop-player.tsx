"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioAudio } from "@/lib/portfolio-audio";

const playerCopy = {
  ru: {
    title: "Pearls",
    artist: "Sade",
    play: "Включить",
    pause: "Пауза",
  },
  en: {
    title: "Pearls",
    artist: "Sade",
    play: "Play",
    pause: "Pause",
  },
} as const;

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="desktop-player__icon">
      <path d="M8 6.5v11l9-5.5-9-5.5Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="desktop-player__icon">
      <path d="M8 6h3v12H8zm5 0h3v12h-3z" fill="currentColor" />
    </svg>
  );
}

export function DesktopPlayer() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const copy = playerCopy[language];
  const collapseTimerRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  function clearCollapseTimer() {
    if (collapseTimerRef.current !== null) {
      window.clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }
  }

  function scheduleCollapse() {
    if (!isMobileViewport) return;

    clearCollapseTimer();
    collapseTimerRef.current = window.setTimeout(() => {
      setIsMobileExpanded(false);
      collapseTimerRef.current = null;
    }, 3000);
  }

  function registerMobileInteraction() {
    if (!isMobileViewport) return;
    setIsMobileExpanded(true);
    scheduleCollapse();
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewportState = () => {
      const nextIsMobile = mediaQuery.matches;
      setIsMobileViewport(nextIsMobile);

      if (!nextIsMobile) {
        setIsMobileExpanded(false);
        clearCollapseTimer();
      }
    };

    updateViewportState();
    mediaQuery.addEventListener("change", updateViewportState);

    return () => {
      mediaQuery.removeEventListener("change", updateViewportState);
      clearCollapseTimer();
    };
  }, []);

  useEffect(() => {
    const audio = getPortfolioAudio();
    if (!audio) return;

    const syncState = () => {
      setIsPlaying(!audio.paused);
      setDuration(audio.duration || 0);
      setCurrentTime(audio.currentTime || 0);
    };

    syncState();
    audio.addEventListener("play", syncState);
    audio.addEventListener("pause", syncState);
    audio.addEventListener("timeupdate", syncState);
    audio.addEventListener("loadedmetadata", syncState);
    audio.addEventListener("durationchange", syncState);
    audio.addEventListener("ended", syncState);

    return () => {
      audio.removeEventListener("play", syncState);
      audio.removeEventListener("pause", syncState);
      audio.removeEventListener("timeupdate", syncState);
      audio.removeEventListener("loadedmetadata", syncState);
      audio.removeEventListener("durationchange", syncState);
      audio.removeEventListener("ended", syncState);
    };
  }, []);

  useEffect(() => {
    const audio = getPortfolioAudio();
    if (!audio) return;

    const syncFromAudio = () => {
      setIsPlaying(!audio.paused);
      setDuration(audio.duration || 0);
      setCurrentTime(audio.currentTime || 0);
    };

    syncFromAudio();
    const frameId = window.requestAnimationFrame(syncFromAudio);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  const progressValue = duration > 0 ? (currentTime / duration) * 100 : 0;

  function handleSeek(value: number) {
    const audio = getPortfolioAudio();
    if (!audio || duration <= 0) return;
    const nextTime = (value / 100) * duration;
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
    registerMobileInteraction();
  }

  async function togglePlayback() {
    const audio = getPortfolioAudio();
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
  }

  const playerClassName = `desktop-player${
    isMobileViewport
      ? isMobileExpanded
        ? " desktop-player--mobile-expanded"
        : " desktop-player--mobile-collapsed"
      : ""
  }`;

  return (
    <aside className={playerClassName} aria-label="Player placeholder">
      <button
        type="button"
        className="desktop-player__cover"
        aria-label={isMobileViewport && !isMobileExpanded ? copy.play : `${copy.artist} — ${copy.title}`}
        onClick={() => {
          if (isMobileViewport) {
            registerMobileInteraction();
          }
        }}
      >
        <Image alt="Sade - Pearls cover" src="/media/player/Cover.png" fill sizes="80px" />
      </button>
      <div className="desktop-player__body">
        <div className="desktop-player__info">
          <p className="desktop-player__title">{copy.title}</p>
          <p className="desktop-player__artist">{copy.artist}</p>
        </div>
        <button
          type="button"
          className="desktop-player__toggle"
          aria-label={isPlaying ? copy.pause : copy.play}
          aria-pressed={isPlaying}
          onClick={() => {
            registerMobileInteraction();
            void togglePlayback();
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <input
        className="desktop-player__progress"
        type="range"
        min="0"
        max="100"
        step="0.1"
        value={progressValue}
        aria-label="Track progress"
        onChange={(event) => handleSeek(Number(event.target.value))}
        style={{ "--desktop-player-progress": `${progressValue}%` } as CSSProperties}
      />
    </aside>
  );
}

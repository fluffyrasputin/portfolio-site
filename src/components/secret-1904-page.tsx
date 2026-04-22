"use client";

import type { CSSProperties, ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BottomSigns } from "@/components/bottom-signs";
import { DesktopHeader } from "@/components/desktop/desktop-header";
import { MobileHeader } from "@/components/mobile/mobile-header";

function Secret1904Player() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

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

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

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

  function handleSeek(event: ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio || duration <= 0) {
      return;
    }

    const value = Number(event.target.value);
    const nextTime = (value / 100) * duration;
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  const progressValue = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <aside className="secret-1904-player" aria-label="1904 player placeholder">
      <audio ref={audioRef} preload="metadata" src="/media/player/Iskrit,%20Ioneweb%20-%20Vesna.mp3" />
      <div className="secret-1904-player__cover">
        <img alt="Vesna cover" src="/media/figma/Vesna.jpg" />
      </div>
      <div className="secret-1904-player__body">
        <div className="secret-1904-player__info">
          <p className="secret-1904-player__title">Vesna</p>
          <p className="secret-1904-player__artist">Iskrit, Ioneweb</p>
        </div>
        <button
          type="button"
          className="secret-1904-player__toggle"
          aria-label={isPlaying ? "Pause" : "Play"}
          aria-pressed={isPlaying}
          onClick={() => {
            void togglePlayback();
          }}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="secret-1904-player__icon">
            {isPlaying ? (
              <path d="M8 6h3v12H8zm5 0h3v12h-3z" fill="currentColor" />
            ) : (
              <path d="M8 6.5v11l9-5.5-9-5.5Z" fill="currentColor" />
            )}
          </svg>
        </button>
      </div>
      <input
        className="secret-1904-player__progress-input"
        type="range"
        min="0"
        max="100"
        step="0.1"
        value={progressValue}
        aria-label="Track progress"
        onChange={handleSeek}
        style={{ "--secret-1904-progress": `${progressValue}%` } as CSSProperties}
      />
    </aside>
  );
}

export function Secret1904Page() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />

      <div className="viewport viewport--desktop">
        <div className="secret-1904-page" id="top">
          <div className="secret-1904-page__inner">
            <section className="secret-1904-panel" aria-label="1904 hidden page">
              <div className="secret-1904-panel__header">
                <div>
                  <p className="secret-1904-panel__eyebrow">травинковый</p>
                  <h1 className="secret-1904-panel__title">Алтарь Агапе</h1>
                </div>
                <Link className="secret-1904-panel__back" href="/">
                  Back to main
                </Link>
              </div>

              <Secret1904Player />

              <video
                className="secret-1904-panel__video"
                src="/media/figma/1904%20video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />

              <img
                alt="Soks"
                className="secret-1904-panel__image"
                src="/media/figma/Soks.png"
              />

              <div className="secret-1904-panel__copy">
                <p>Команда Агапе (agape) создана 7 января 2026 года</p>
                <p>Участники договора:</p>
                <p>Василевич Оксана Вадимовна</p>
                <p>Царёв Андрей Алексеевич</p>
                <p>Срок договора:<br />Бессрочный</p>
                <p>Эксклюзивность контракта:<br />В единственном экземпляре</p>
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

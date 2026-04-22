"use client";

declare global {
  interface Window {
    __portfolioAudio?: HTMLAudioElement;
  }
}

const PLAYER_SOURCE = "/media/player/sade-pearls.mp3";
const PLAYER_STORAGE_KEY = "portfolio-player-state";

type StoredPlayerState = {
  currentTime: number;
  isPlaying: boolean;
};

function readStoredPlayerState(): StoredPlayerState | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(PLAYER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredPlayerState>;
    return {
      currentTime: Number.isFinite(parsed.currentTime) ? Number(parsed.currentTime) : 0,
      isPlaying: parsed.isPlaying === true,
    };
  } catch {
    return null;
  }
}

function writeStoredPlayerState(audio: HTMLAudioElement) {
  if (typeof window === "undefined") {
    return;
  }

  const payload: StoredPlayerState = {
    currentTime: Number.isFinite(audio.currentTime) ? audio.currentTime : 0,
    isPlaying: !audio.paused,
  };

  window.sessionStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(payload));
}

export function getPortfolioAudio() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!window.__portfolioAudio) {
    const audio = new Audio(PLAYER_SOURCE);
    audio.preload = "metadata";
    const storedState = readStoredPlayerState();

    if (storedState) {
      const restoreCurrentTime = () => {
        if (storedState.currentTime > 0) {
          audio.currentTime = storedState.currentTime;
        }
      };

      if (audio.readyState >= 1) {
        restoreCurrentTime();
      } else {
        audio.addEventListener("loadedmetadata", restoreCurrentTime, { once: true });
      }

      if (storedState.isPlaying) {
        const resumePlayback = () => {
          void audio.play().catch(() => {});
        };

        if (audio.readyState >= 2) {
          resumePlayback();
        } else {
          audio.addEventListener("canplay", resumePlayback, { once: true });
        }
      }
    }

    const persistState = () => writeStoredPlayerState(audio);
    audio.addEventListener("play", persistState);
    audio.addEventListener("pause", persistState);
    audio.addEventListener("timeupdate", persistState);
    audio.addEventListener("ended", persistState);
    window.addEventListener("pagehide", persistState);

    window.__portfolioAudio = audio;
  }

  return window.__portfolioAudio;
}

"use client";

type LanguageToastProps = {
  phase: "closed" | "open" | "closing";
  title: string;
  description: string;
};

export function LanguageToast({ phase, title, description }: LanguageToastProps) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`language-toast${phase === "open" ? " language-toast--open" : ""}${phase === "closing" ? " language-toast--closing" : ""}`}
    >
      <div className="language-toast__icon-wrap" aria-hidden="true">
        <video
          className="language-toast__icon-image"
          src="/media/figma/sticker.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
      <div className="language-toast__copy">
        <p className="language-toast__title">{title}</p>
        <p className="language-toast__description">{description}</p>
      </div>
    </div>
  );
}

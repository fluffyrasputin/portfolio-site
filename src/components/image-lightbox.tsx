"use client";

import { useEffect, useMemo, useState } from "react";

type LightboxImageState = {
  alt: string;
  currentSrc: string;
  displayedHeight: number;
  displayedWidth: number;
  naturalHeight: number;
  naturalWidth: number;
};

const LIGHTBOX_EXCLUDE_SELECTOR = [
  ".site-loader",
  ".language-toast",
  ".desktop-player",
  ".desktop-header",
  ".mobile-header",
  ".atom-case__logo",
  ".obu-case__logo",
  ".pb-case__logo",
  ".b24-case__logo",
  ".stoloto-case__logo",
  ".mobile-case-atom__logo",
  ".mobile-case-obj__logo",
  ".mobile-case-pochta__logo",
  ".mobile-case-bitrix__logo",
  ".mobile-case-stoloto__logo",
  ".hero-figma__project-logo",
  ".mobile-hero__project-logo",
  ".additional-cases__logo",
  ".additional-cases__finance-logo",
  ".mobile-additional-cases__logo",
  ".hero-figma__promo-icon",
  ".skip-link",
].join(", ");

function computeInitialScale(image: LightboxImageState) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const horizontalPadding = viewportWidth <= 767 ? 24 : 96;
  const verticalPadding = viewportWidth <= 767 ? 120 : 168;
  const availableWidth = Math.max(160, viewportWidth - horizontalPadding);
  const availableHeight = Math.max(160, viewportHeight - verticalPadding);
  const fitScale = Math.min(
    availableWidth / image.naturalWidth,
    availableHeight / image.naturalHeight,
  );
  const displayedScale = Math.min(
    image.displayedWidth / image.naturalWidth,
    image.displayedHeight / image.naturalHeight,
  );
  const isSmallImage =
    image.displayedWidth <= Math.min(320, viewportWidth * 0.42) &&
    image.displayedHeight <= Math.min(320, viewportHeight * 0.42);
  const enlargementLimit = isSmallImage ? 2 : 1.85;
  const initialScale = isSmallImage
    ? Math.min(fitScale, displayedScale * 2)
    : Math.min(fitScale, displayedScale * enlargementLimit);

  return {
    initialScale,
    maxScale: Math.min(fitScale, Math.max(displayedScale * 2, initialScale)),
  };
}

export function ImageLightbox() {
  const [image, setImage] = useState<LightboxImageState | null>(null);
  const [scale, setScale] = useState(1);

  const sizing = useMemo(() => {
    if (!image || typeof window === "undefined") {
      return null;
    }

    return computeInitialScale(image);
  }, [image]);

  useEffect(() => {
    function closeLightbox() {
      setImage(null);
    }

    function handleDocumentClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const imageNode = target.closest("img");
      if (!(imageNode instanceof HTMLImageElement)) return;

      const main = document.querySelector("main");
      if (!main?.contains(imageNode)) return;
      if (imageNode.closest(LIGHTBOX_EXCLUDE_SELECTOR)) return;

      event.preventDefault();
      event.stopPropagation();

      const rect = imageNode.getBoundingClientRect();
      const isKamazImage = Boolean(
        imageNode.closest(".atom-case__kamaz, .mobile-case-atom__kamaz"),
      );
      const naturalWidth = isKamazImage
        ? Math.round(rect.width)
        : imageNode.naturalWidth || Math.round(rect.width);
      const naturalHeight = isKamazImage
        ? Math.round(rect.height)
        : imageNode.naturalHeight || Math.round(rect.height);

      if (!naturalWidth || !naturalHeight) return;

      const nextImage = {
        alt: imageNode.alt || "",
        currentSrc: imageNode.currentSrc || imageNode.src,
        displayedHeight: rect.height,
        displayedWidth: rect.width,
        naturalHeight,
        naturalWidth,
      };
      const nextSizing = computeInitialScale(nextImage);

      setScale(nextSizing.initialScale);
      setImage(nextImage);
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    }

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("image-lightbox-open", Boolean(image));
    return () => {
      document.body.classList.remove("image-lightbox-open");
    };
  }, [image]);

  if (!image || !sizing) {
    return null;
  }

  const width = image.naturalWidth * scale;
  const height = image.naturalHeight * scale;

  return (
    <div
      aria-modal="true"
      className="image-lightbox"
      role="dialog"
      onClick={() => setImage(null)}
    >
      <div className="image-lightbox__backdrop" aria-hidden="true" />
      <div className="image-lightbox__stage">
        <img
          alt={image.alt}
          className="image-lightbox__image"
          onClick={(event) => {
            event.stopPropagation();
            if (Math.abs(sizing.maxScale - sizing.initialScale) < 0.01) return;
            setScale((currentScale) =>
              currentScale >= sizing.maxScale ? sizing.initialScale : sizing.maxScale,
            );
          }}
          onWheel={(event) => {
            event.preventDefault();
            event.stopPropagation();
            const delta = event.deltaY > 0 ? -0.12 : 0.12;
            setScale((currentScale) => {
              const nextScale = currentScale + delta;
              return Math.min(sizing.maxScale, Math.max(sizing.initialScale, nextScale));
            });
          }}
          src={image.currentSrc}
          style={{ width, height }}
        />
      </div>

      <button
        aria-label="Close image preview"
        className="image-lightbox__close"
        onClick={(event) => {
          event.stopPropagation();
          setImage(null);
        }}
        type="button"
      >
        <svg aria-hidden="true" className="image-lightbox__close-icon" viewBox="0 0 24 24">
          <path
            d="M6 6l12 12M18 6L6 18"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.75"
          />
        </svg>
      </button>
    </div>
  );
}

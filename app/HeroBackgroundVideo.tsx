"use client";

import { useEffect, useRef } from "react";

export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      const shouldPlay =
        desktop.matches &&
        !reducedMotion.matches &&
        document.documentElement.dataset.theme !== "light";

      if (!shouldPlay) {
        if (video.hasAttribute("src")) {
          video.pause();
          video.removeAttribute("src");
          video.load();
        }
        return;
      }

      if (!video.hasAttribute("src")) {
        video.src = "/automation-video-loop.mp4";
      }
      void video.play().catch(() => undefined);
    };

    const themeObserver = new MutationObserver(syncPlayback);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    desktop.addEventListener("change", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);
    syncPlayback();

    return () => {
      themeObserver.disconnect();
      desktop.removeEventListener("change", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
      video.pause();
      video.removeAttribute("src");
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-film"
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}

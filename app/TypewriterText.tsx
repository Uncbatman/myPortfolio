"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerMotionPreference() {
  return false;
}

type TypewriterTextProps = {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
};

export default function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 48,
}: TypewriterTextProps) {
  const reduceMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  );
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    let characterIndex = 0;
    let intervalId: number | undefined;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        characterIndex += 1;
        setVisibleCount(characterIndex);

        if (characterIndex >= text.length && intervalId !== undefined) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [delay, reduceMotion, speed, text]);

  const visibleText = reduceMotion ? text : text.slice(0, visibleCount);

  return (
    <span className={`typewriter-caret ${className}`.trim()} aria-label={text} aria-live="off">
      {visibleText}
    </span>
  );
}

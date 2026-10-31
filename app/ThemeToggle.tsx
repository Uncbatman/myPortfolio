"use client";

const THEME_STORAGE_KEY = "adam-portfolio-theme";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The visual theme still works when storage is unavailable.
    }
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle between light and dark appearance"
      title="Toggle light/dark appearance"
    >
      <span className="theme-toggle-mark" aria-hidden="true" />
    </button>
  );
}

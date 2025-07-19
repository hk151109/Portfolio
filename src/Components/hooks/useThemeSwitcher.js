import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)"; // Correct media query for dark mode

  // Always default to dark mode initially
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      // If there's no user preference, it will always set dark mode
      let check = "dark"; // Set to dark by default
      setMode(check);
      document.documentElement.classList.add("dark"); // Always apply dark mode initially

      // If there's a user preference in localStorage, use it
      if (userPref) {
        check = userPref === "light" ? "light" : "dark";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    // Always default to dark mode unless explicitly set to light
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;

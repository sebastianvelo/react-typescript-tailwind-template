import { useLayoutEffect, useRef, useState } from "react";
import Theme from "../../style/tailwind/Theme";
import LocalStorageKey from "../util/LocalStorageKey";

const toggleDark = (isDark: boolean) => {
  document.documentElement.classList.toggle(Theme.DARK);
  isDark
    ? localStorage.setItem(LocalStorageKey.THEME, Theme.LIGHT)
    : localStorage.setItem(LocalStorageKey.THEME, Theme.DARK);
};

const useToggleDark = () => {
  const firstUpdate = useRef(true);
  const isDark: boolean =
    localStorage.getItem(LocalStorageKey.THEME) != Theme.DARK;

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    toggleDark(isDark);
  });
};

export default useToggleDark;

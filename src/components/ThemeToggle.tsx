"use client";

import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 dark:text-gray-400">🌙</span>
      <Switch checked={dark} onCheckedChange={setDark} />
      <span className="text-xs text-gray-500 dark:text-gray-400">☀️</span>
    </div>
  );
}

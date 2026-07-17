"use client";

import { useCallback, useState } from "react";

/** Open-state for an index-addressed detail modal over a list. `item` is null when closed. */
export function useIndexModal<T>(list: T[]) {
  const [active, setActive] = useState<number | null>(null);
  const open = useCallback((i: number) => setActive(i), []);
  const close = useCallback(() => setActive(null), []);
  const item = active !== null ? list[active] : null;
  return { active, item, open, close };
}

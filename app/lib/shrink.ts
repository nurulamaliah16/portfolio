// Minimum scrollable room (px) before the header is allowed to shrink: just above the 110px
// trigger so the modal can actually scroll past it. Kept low (120, not higher) so shorter
// modals like the training detail still shrink — the 10↔110 hysteresis already prevents the
// collapse from bouncing scrollTop back under the trigger, so no extra margin is needed.
export const ROOM_GUARD = 120;

/**
 * Pure decision for the shrinking sticky header. Binary compact state with hysteresis:
 * a wide gap (10 ↔ 110) between the expand and compact thresholds — larger than the ~90px
 * the header collapses — so a toggle can't move scrollTop back across the trigger and flip-flop.
 *
 * @param prev       current compact state
 * @param scrollTop  scroller.scrollTop
 * @param room       scroller.scrollHeight - scroller.clientHeight
 */
export function shouldCompact(prev: boolean, scrollTop: number, room: number): boolean {
  if (prev) return scrollTop >= 10; // stay compact until very near the top
  return scrollTop > 110 && room > ROOM_GUARD;
}

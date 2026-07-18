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
  if (prev) {
    // Stay compact until scrolled back near the actual top. But if scrollTop is
    // small only because the collapsed header left almost no scroll room (i.e.
    // we're pinned at the bottom), stay compact anyway — otherwise the collapse
    // clamps scrollTop under the expand threshold and the header flip-flops
    // forever on short modals (e.g. a certificate detail on a small phone).
    const atBottom = room > 4 && scrollTop >= room - 4;
    return scrollTop >= 10 || atBottom;
  }
  return scrollTop > 110 && room > ROOM_GUARD;
}

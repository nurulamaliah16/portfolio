import { describe, expect, it } from "vitest";
import { ROOM_GUARD, shouldCompact } from "./shrink";

const tall = ROOM_GUARD + 100;

describe("shouldCompact", () => {
  it("compacts once scrolled past the trigger with enough room", () => {
    expect(shouldCompact(false, 120, tall)).toBe(true);
  });

  it("does not compact before the trigger", () => {
    expect(shouldCompact(false, 100, tall)).toBe(false);
  });

  it("does not compact when the modal is too short to scroll past the trigger", () => {
    expect(shouldCompact(false, 120, ROOM_GUARD)).toBe(false);
  });

  it("hysteresis: stays compact between the two thresholds instead of oscillating", () => {
    // Header collapse can clamp scrollTop back into the 10..110 band — must stay compact there.
    expect(shouldCompact(true, 60, tall)).toBe(true);
    expect(shouldCompact(true, 15, tall)).toBe(true);
  });

  it("expands only when back very near the top", () => {
    expect(shouldCompact(true, 5, tall)).toBe(false);
  });

  it("stays compact when pinned at the bottom of a short modal (no flip-flop)", () => {
    // Collapse shrank room to ~9 and clamped scrollTop there — must NOT expand,
    // or the header oscillates. scrollTop < 10 but we're at the bottom.
    expect(shouldCompact(true, 9, 9)).toBe(true);
    expect(shouldCompact(true, 6, 8)).toBe(true);
  });

  it("still expands near the top when there is real room above", () => {
    expect(shouldCompact(true, 5, 200)).toBe(false);
  });

  it("does not get stuck compact when the modal is unscrollable (room <= 4)", () => {
    // room-4 <= 0 would make scrollTop 0 count as 'at bottom' and trap it compact.
    expect(shouldCompact(true, 0, 4)).toBe(false);
  });
});

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
});

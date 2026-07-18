import { describe, expect, it } from "vitest";
import { animationsSupported, computeServerAnimate, isLowEnd } from "./ua";

const IOS15 =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1";
const IOS17 =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
const SAFARI15_MAC =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Safari/605.1.15";
const SAFARI17_MAC =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15";
const CHROME =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

describe("animationsSupported", () => {
  it("disables on iOS < 16", () => expect(animationsSupported(IOS15)).toBe(false));
  it("enables on iOS >= 16", () => expect(animationsSupported(IOS17)).toBe(true));
  it("disables on desktop Safari < 16", () => expect(animationsSupported(SAFARI15_MAC)).toBe(false));
  it("enables on desktop Safari >= 16", () => expect(animationsSupported(SAFARI17_MAC)).toBe(true));
  it("enables on Chrome (has Safari token, no Version/)", () =>
    expect(animationsSupported(CHROME)).toBe(true));
  it("defaults to enabled when UA missing", () => expect(animationsSupported(null)).toBe(true));
});

describe("isLowEnd", () => {
  it("low on <=4GB RAM", () => expect(isLowEnd({ deviceMemory: 4 })).toBe(true));
  it("high on 8GB RAM", () => expect(isLowEnd({ deviceMemory: 8 })).toBe(false));
  it("low on <=4 cores", () => expect(isLowEnd({ hardwareConcurrency: 2 })).toBe(true));
  it("high on 6 cores (iPhone 11+)", () => expect(isLowEnd({ hardwareConcurrency: 6 })).toBe(false));
  it("high when nothing reported", () => expect(isLowEnd({})).toBe(false));
});

describe("computeServerAnimate", () => {
  it("enabled for modern UA with no adverse hints", () =>
    expect(computeServerAnimate({ ua: CHROME })).toBe(true));
  it("disabled for old Safari regardless of hints", () =>
    expect(computeServerAnimate({ ua: IOS15, deviceMemory: 8 })).toBe(false));
  it("disabled on low device memory hint", () =>
    expect(computeServerAnimate({ ua: CHROME, deviceMemory: 4 })).toBe(false));
  it("disabled on reduced-motion hint", () =>
    expect(computeServerAnimate({ ua: CHROME, prefersReducedMotion: true })).toBe(false));
  it("enabled with high memory hint", () =>
    expect(computeServerAnimate({ ua: CHROME, deviceMemory: 8 })).toBe(true));
});

import { describe, expect, it, vi, beforeEach } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import ColourMode from "~/components/btn/ColourMode.vue";

describe("ColourMode button", () => {
  beforeEach(() => {
    if (typeof document !== "undefined") {
      document.startViewTransition = vi.fn().mockReturnValue({
        ready: Promise.resolve(),
      });
    }
  });

  it("renders correctly", async () => {
    const component = await mountSuspended(ColourMode);
    expect(component.exists()).toBe(true);
  });
});

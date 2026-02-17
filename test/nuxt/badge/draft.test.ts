import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Draft from "~/components/badge/Draft.vue";

describe("Draft badge", () => {
  it("renders correctly", async () => {
    const component = await mountSuspended(Draft);
    expect(component.text()).toBe("Draft");
    expect(component.classes()).toContain("text-amber-500");
  });
});

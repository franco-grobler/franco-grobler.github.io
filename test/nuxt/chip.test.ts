import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Chip from "~/components/chip.vue";

describe("Chip", () => {
  it("renders text prop", async () => {
    const component = await mountSuspended(Chip, {
      props: {
        text: "Test Chip",
      },
    });

    expect(component.text()).toBe("Test Chip");
  });

  it("renders slot content", async () => {
    const component = await mountSuspended(Chip, {
      slots: {
        default: () => "Slot Content",
      },
    });

    expect(component.text()).toBe("Slot Content");
  });
});

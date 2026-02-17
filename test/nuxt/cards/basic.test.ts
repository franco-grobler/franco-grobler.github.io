import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Basic from "~/components/card/Basic.vue";

describe("Basic card", () => {
  it("renders title", async () => {
    const component = await mountSuspended(Basic, {
      props: {
        title: "Basic Title",
      },
    });

    expect(component.text()).toContain("Basic Title");
  });

  it("renders slots", async () => {
    const component = await mountSuspended(Basic, {
      props: {
        title: "Title",
      },
      slots: {
        default: () => "Body Content",
        footer: () => "Footer Content",
      },
    });

    expect(component.text()).toContain("Body Content");
    expect(component.text()).toContain("Footer Content");
  });
});

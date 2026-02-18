import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Timeline from "~/components/card/Timeline.vue";

describe("Timeline card", () => {
  it("renders timeline details", async () => {
    const component = await mountSuspended(Timeline, {
      props: {
        title: "Work Experience",
        subtitle: "Company Inc.",
        description: "Did some great things",
        timeline: {
          start: "2020",
          end: "2024",
        },
      },
    });

    expect(component.text()).toContain("Work Experience");
    expect(component.text()).toContain("Company Inc.");
    expect(component.text()).toContain("Did some great things");
    expect(component.text()).toContain("2020 - 2024");
  });
});

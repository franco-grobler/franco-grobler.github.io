import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Section from "~/components/landing/Section.vue";

describe("Landing Section", () => {
  it("renders title and link", async () => {
    const component = await mountSuspended(Section, {
      props: {
        title: "Latest Projects",
        link: { label: "View All", route: "/projects" },
      },
    });

    expect(component.text()).toContain("Latest Projects");
    expect(component.text()).toContain("View All");
  });

  it("renders slots", async () => {
    const component = await mountSuspended(Section, {
      props: { title: "Title" },
      slots: {
        default: () => "Section Content",
        title: () => "Custom Title Slot",
      },
    });

    expect(component.text()).toContain("Custom Title Slot");
    expect(component.text()).toContain("Section Content");
  });
});

import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Project from "~/components/card/Project.vue";

describe("Project card", () => {
  it("renders project details", async () => {
    const component = await mountSuspended(Project, {
      props: {
        title: "Project Alpha",
        description: "A cool project",
        tags: ["Vue", "Nuxt"],
        slug: "project-alpha",
        impact: "Saved 100 hours",
      },
    });

    expect(component.text()).toContain("Project Alpha");
    expect(component.text()).toContain("A cool project");
    expect(component.text()).toContain("Vue");
    expect(component.text()).toContain("Nuxt");
    expect(component.text()).toContain("Saved 100 hours");
    expect(component.findComponent({ name: "NuxtLink" }).props("to")).toBe(
      "/projects/project-alpha",
    );
  });
});

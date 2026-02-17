import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Skills from "~/components/landing/Skills.vue";

describe("Landing Skills", () => {
  it("renders skills cards", async () => {
    const skills = {
      cards: [
        {
          title: "Frontend",
          icon: "i-lucide-monitor",
          description: "Vue & Nuxt",
        },
        {
          title: "Backend",
          icon: "i-lucide-database",
          description: "Node & Bun",
        },
      ],
    };

    const component = await mountSuspended(Skills, {
      props: { skills },
    });

    expect(component.text()).toContain("What I Do");
    expect(component.text()).toContain("Frontend");
    expect(component.text()).toContain("Vue & Nuxt");
    expect(component.text()).toContain("Backend");
    expect(component.text()).toContain("Node & Bun");
  });
});

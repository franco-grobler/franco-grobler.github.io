import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Intro from "~/components/landing/Intro.vue";

describe("Intro section", () => {
  it("renders correctly with details", async () => {
    const details = {
      subtitle: "Hello World",
      title: "I am a developer",
      description: "This is my portfolio",
      links: [
        {
          label: "Projects",
          to: "/projects",
          icon: "lucide:arrow-right",
          class: "bg-primary",
        },
      ],
    };

    const component = await mountSuspended(Intro, {
      props: { details },
    });

    expect(component.text()).toContain("Hello World");
    expect(component.text()).toContain("I am a developer");
    expect(component.text()).toContain("This is my portfolio");
    expect(component.text()).toContain("Projects");
  });
});

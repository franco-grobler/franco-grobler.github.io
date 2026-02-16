import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Skill from "~/components/card/Skill.vue";

describe("Skill card", () => {
  it("can mount with props", async () => {
    const component = await mountSuspended(Skill, {
      props: {
        icon: "lucide:message",
        title: "Test",
        description: "This is a test",
      },
    });

    expect(component.html()).toContain(
      '<h3 class="text-xl font-medium">Test</h3>',
    );
  });
});

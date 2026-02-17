import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Research from "~/components/card/Research.vue";

describe("Research card", () => {
  it("renders research details", async () => {
    const component = await mountSuspended(Research, {
      props: {
        title: "Research Title",
        date: "2024-02-01",
        readTime: 10,
        description: "Research description",
        slug: "research-slug",
      },
    });

    expect(component.text()).toContain("Research Title");
    expect(component.text()).toContain("Research description");
    expect(component.text()).toContain("10 min read");
    expect(component.findComponent({ name: "NuxtLink" }).props("to")).toBe(
      "/research/research-slug",
    );
  });
});

import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Blog from "~/components/card/Blog.vue";

describe("Blog card", () => {
  it("renders blog details", async () => {
    const component = await mountSuspended(Blog, {
      props: {
        title: "Blog Title",
        topic: "Tech",
        date: "2024-01-01",
        readingTime: 5,
        stem: "/blog/test",
        excerpt: { body: "test" },
        draft: true,
      },
    });

    expect(component.text()).toContain("Blog Title");
    expect(component.text()).toContain("Tech");
    expect(component.text()).toContain("5 min read");
    expect(component.findComponent({ name: "BadgeDraft" }).exists()).toBe(true);
  });
});

import { describe, expect, it, vi } from "vitest";
import { ref } from "vue";
import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import Research from "~/components/landing/Research.vue";

mockNuxtImport("useAsyncData", () => {
  return () => ({
    data: ref([
      {
        title: "Research 1",
        description: "Research Desc",
        date: "2024-01-01",
        readTime: 5,
        stem: "research/r1",
      },
    ]),
  });
});

mockNuxtImport("queryCollection", () => {
  return () => ({});
});

describe("Landing Research", () => {
  it("renders research", async () => {
    const research = {
      title: "Featured Research",
      link: { label: "All", route: "/research" },
      cards: ["r1"],
    };

    const component = await mountSuspended(Research, {
      props: { research },
    });

    expect(component.text()).toContain("Featured Research");
    expect(component.text()).toContain("Research 1");
    expect(component.text()).toContain("Research Desc");
  });
});

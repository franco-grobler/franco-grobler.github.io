import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Page from "~/components/page.vue";

describe("Page", () => {
  it("renders title and description", async () => {
    const component = await mountSuspended(Page, {
      props: {
        title: "Test Page",
        description: "This is a test description",
      },
    });

    expect(component.text()).toContain("Test Page");
    expect(component.text()).toContain("This is a test description");
  });

  it("renders slots", async () => {
    const component = await mountSuspended(Page, {
      slots: {
        default: () => "Main Content",
        title: () => "Custom Title",
      },
    });

    expect(component.text()).toContain("Custom Title");
    expect(component.text()).toContain("Main Content");
  });
});

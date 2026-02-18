import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "~/components/app/Header.vue";

describe("Header", () => {
  it("renders correctly with links", async () => {
    const links = [
      { label: "Link 1", to: "/link1" },
      { label: "Link 2", to: "/link2" },
    ];
    const component = await mountSuspended(Header, {
      props: {
        links,
      },
    });

    expect(component.text()).toContain("Link 1");
    expect(component.text()).toContain("Link 2");
  });
});

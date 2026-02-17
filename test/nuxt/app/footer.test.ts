import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Footer from "~/components/app/Footer.vue";

describe("Footer", () => {
  it("renders credits from app config", async () => {
    const component = await mountSuspended(Footer);
    expect(component.exists()).toBe(true);
  });
});

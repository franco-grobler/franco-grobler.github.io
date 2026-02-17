import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import ContactSection from "~/components/container/ContactSection.vue";

describe("ContactSection", () => {
  it("renders title and slot", async () => {
    const component = await mountSuspended(ContactSection, {
      props: {
        title: "Contact Me",
      },
      slots: {
        default: () => "Some contact info",
      },
    });

    expect(component.text()).toContain("Contact Me");
    expect(component.text()).toContain("Some contact info");
  });
});

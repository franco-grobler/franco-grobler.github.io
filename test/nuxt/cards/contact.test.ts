import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Contact from "~/components/card/Contact.vue";

describe("Contact card", () => {
  it("renders non-email link", async () => {
    const component = await mountSuspended(Contact, {
      props: {
        icon: "i-lucide-github",
        label: "GitHub",
        link: "https://github.com",
      },
    });

    expect(component.text()).toContain("GitHub");
    expect(component.text()).toContain("https://github.com");
  });

  it("renders email link", async () => {
    const component = await mountSuspended(Contact, {
      props: {
        icon: "i-lucide-mail",
        label: "Email",
        link: "mailto:hello@test.co",
      },
    });

    expect(component.text()).toContain("Email");
    // Since useEmail uses a hardcoded email, we expect it to be there.
    // In ClientOnly it might be different, but mountSuspended handles it.
    expect(component.find("a").exists()).toBe(true);
  });
});

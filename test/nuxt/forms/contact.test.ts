import { describe, expect, it, vi, beforeEach } from "vitest";
import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import Contact from "~/components/forms/Contact.vue";

const { mockToastAdd } = vi.hoisted(() => ({
  mockToastAdd: vi.fn(),
}));

mockNuxtImport("useToast", () => {
  return () => {
    return {
      add: mockToastAdd,
    };
  };
});

describe("Contact form", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    });
  });

  it("renders all fields", async () => {
    const component = await mountSuspended(Contact);
    expect(component.find('input[placeholder="Your name"]').exists()).toBe(
      true,
    );
    expect(
      component.find('input[placeholder="you@example.com"]').exists(),
    ).toBe(true);
    expect(
      component
        .find('textarea[placeholder="What are we talking about?"]')
        .exists(),
    ).toBe(true);
  });

  it("submits successfully", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true });
    const component = await mountSuspended(Contact);

    // Fill the form
    await component.find('input[placeholder="Your name"]').setValue("John Doe");
    await component
      .find('input[placeholder="you@example.com"]')
      .setValue("john@example.com");
    await component
      .find('textarea[placeholder="What are we talking about?"]')
      .setValue("Hello!");

    // Submit the form by calling the exposed onSubmit
    await (component.vm as any).onSubmit({
      data: {
        name: "John Doe",
        email: "john@example.com",
        message: "Hello!",
      },
    });

    expect(global.fetch).toHaveBeenCalled();
    // Wait for async actions in onSubmit
    await vi.waitFor(() => {
      expect(mockToastAdd).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Success",
          color: "success",
        }),
      );
    });
  });
});

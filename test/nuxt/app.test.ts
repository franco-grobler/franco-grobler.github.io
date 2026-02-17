import { describe, expect, it, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import App from "~/app.vue";

vi.mock("#imports", async (importOriginal) => {
  const mod = await importOriginal<any>();
  return {
    ...mod,
    useColorMode: () => ({ value: "dark" }),
    useAsyncData: () => ({ data: { value: [] } }),
    useLazyAsyncData: () => ({ data: { value: [] } }),
    queryCollectionNavigation: () => ({ all: () => Promise.resolve([]) }),
    queryCollectionSearchSections: () => ({ all: () => Promise.resolve([]) }),
  };
});

describe("App main component", () => {
  it("mounts correctly", async () => {
    const component = await mountSuspended(App);
    expect(component.exists()).toBe(true);
  });
});

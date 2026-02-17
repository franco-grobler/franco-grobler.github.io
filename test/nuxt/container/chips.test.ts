import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Chips from "~/components/container/Chips.vue";

describe("Chips container", () => {
	it("renders sorted items", async () => {
		const component = await mountSuspended(Chips, {
			props: {
				items: ["Zebra", "Apple", "Banana"],
			},
		});

		const chips = component.findAllComponents({ name: "Chip" });
		expect(chips).toHaveLength(3);
		expect(chips[0]!.text()).toBe("Apple");
		expect(chips[1]!.text()).toBe("Banana");
		expect(chips[2]!.text()).toBe("Zebra");
	});
});

import { describe, expect, it } from "vitest";
import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import Projects from "~/components/landing/Projects.vue";
import CardProject from "~/components/card/Project.vue";

mockNuxtImport("useAsyncData", () => {
	return () => ({
		data: {
			value: [
				{
					title: "Project 1",
					description: "Desc 1",
					tags: ["Tag 1"],
					stem: "projects/p1",
				},
			],
		},
	});
});

mockNuxtImport("queryCollection", () => {
	return () => ({});
});

describe("Landing Projects", () => {
	it("renders projects", async () => {
		const projects = {
			title: "Featured Projects",
			link: { label: "All", route: "/projects" },
			cards: ["p1"],
		};

		const component = await mountSuspended(Projects, {
			props: { projects },
		});

		expect(component.find("h2").text()).toContain("Featured Projects");
		expect(component.findAllComponents(CardProject).length).toBe(1);
	});
});

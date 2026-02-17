import { describe, expect, it } from "vitest";
import useEmail from "../../../app/composables/email";

describe("example unit test", () => {
	const { encryptEmail, decryptEmail } = useEmail();

	it("can encrypt", async () => {
		expect(await encryptEmail("hello")).toBeTruthy();
	});

	it("can decrypt", async () => {
		const encrypted = await encryptEmail("hello");
		expect(await decryptEmail(encrypted)).toBe("hello");
	});

	it("can be reversed on emails", async () => {
		const email = "hello@example.com";
		expect(await decryptEmail(await encryptEmail(email))).toBe(email);
	});
});

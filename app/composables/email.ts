const Algorithm = {
  name: "RSA-OAEP",
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
  hash: "SHA-256",
};
const Key = crypto.subtle.generateKey(Algorithm, true, ["encrypt", "decrypt"]);

/**
 * Pad base64 strings for safe decoding.
 * @param str - Base64 string to pad
 * @returns Padded base64 string.
 */
function padBase64(str: string): string {
  const pad = str.length % 4;
  if (pad) {
    return str + "=".repeat(4 - pad);
  }
  return str;
}
export default function useEmail() {
  const email = import.meta.env.VITE_CONTACT_EMAIL;

  async function decryptEmail(ciphertext: string): Promise<string> {
    const data = Uint8Array.from(atob(padBase64(ciphertext)), (c) =>
      c.charCodeAt(0),
    );
    const buffer = crypto.subtle.decrypt(
      Algorithm,
      (await Key).privateKey,
      data,
    );

    const decoder = new TextDecoder("utf-8");
    return decoder.decode(await buffer);
  }

  async function encryptEmail(encoded: string): Promise<string> {
    const buffer = await crypto.subtle.encrypt(
      Algorithm,
      (await Key).publicKey,
      new TextEncoder().encode(encoded),
    );

    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]!);
    }

    return btoa(binary);
  }

  return {
    email,
    encryptEmail,
    decryptEmail,
  };
}

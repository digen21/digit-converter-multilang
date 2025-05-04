import { convertDigits, digitMaps } from "./index";

describe("convertDigits", () => {
  // Valid Numbers
  it("should convert digits to English by default", () => {
    expect(convertDigits(123)).toBe("123");
  });

  it("should convert digits to English for negative numbers", () => {
    expect(convertDigits(-456)).toBe("-456");
  });

  it("should convert zero", () => {
    expect(convertDigits(0)).toBe("0");
  });

  it("should handle very large numbers", () => {
    expect(convertDigits(1234567890)).toBe("1234567890");
  });

  // Strings Representing Numbers
  it("should convert numeric strings to English", () => {
    expect(convertDigits("789")).toBe("789");
  });

  it("should convert negative numeric strings to English", () => {
    expect(convertDigits("-321")).toBe("-321");
  });

  it("should convert decimal numbers", () => {
    expect(convertDigits("123.45")).toBe("123.45");
  });

  // Non-Numeric Strings
  it("should return non-numeric strings unchanged", () => {
    expect(convertDigits("abc")).toBe("abc");
  });

  // Different Languages
  it("should convert digits to Hindi", () => {
    expect(convertDigits(123, "hi")).toBe("१२३");
  });

  it("should convert digits to Marathi", () => {
    expect(convertDigits(456, "mr")).toBe("४५६");
  });

  it("should convert digits to Sanskrit", () => {
    expect(convertDigits(789, "sa")).toBe("७८९");
  });

  it("should convert digits to Gujarati", () => {
    expect(convertDigits(321, "gu")).toBe("૩૨૧");
  });

  it("should convert digits to Bengali", () => {
    expect(convertDigits(654, "bn")).toBe("৬৫৪");
  });

  it("should convert digits to Tamil", () => {
    expect(convertDigits(987, "ta")).toBe("௯௮௭");
  });

  it("should convert digits to Telugu", () => {
    expect(convertDigits(555, "te")).toBe("౫౫౫");
  });

  it("should convert digits to Kannada", () => {
    expect(convertDigits(333, "kn")).toBe("೩೩೩");
  });

  it("should convert digits to Malayalam", () => {
    expect(convertDigits(222, "ml")).toBe("൨൨൨");
  });

  it("should convert digits to Punjabi", () => {
    expect(convertDigits(111, "pa")).toBe("੧੧੧");
  });

  it("should convert digits to Arabic", () => {
    expect(convertDigits(1234, "ar")).toBe("١٢٣٤");
  });

  it("should convert digits to Persian (Farsi)", () => {
    expect(convertDigits(5678, "fa")).toBe("۵۶۷۸");
  });

  it("should convert digits to Urdu", () => {
    expect(convertDigits(9012, "ur")).toBe("۹۰۱۲");
  });

  // Edge Cases
  it("should handle very large numbers correctly", () => {
    expect(convertDigits("12345678901234567890")).toBe("12345678901234567890");
  });

  it("should preserve leading zeros in numbers", () => {
    expect(convertDigits("000123")).toBe("000123");
  });

  it("should preserve leading zeros in decimal numbers", () => {
    expect(convertDigits("000.123")).toBe("000.123");
  });

  it("should handle multiple language conversions in sequence", () => {
    expect(convertDigits(123, "hi")).toBe("१२३");
    expect(convertDigits(456, "ar")).toBe("٤٥٦");
  });

  it("should preserve symbols in input", () => {
    expect(convertDigits("12$34")).toBe("12$34");
  });

  // Error Handling
  it("should handle invalid number input", () => {
    expect(convertDigits("not a number")).toBe("not a number");
  });

  it("should handle NaN input", () => {
    expect(convertDigits(NaN)).toBe("NaN");
  });

  it("should handle Infinity input", () => {
    expect(convertDigits(Infinity)).toBe("Infinity");
  });
});

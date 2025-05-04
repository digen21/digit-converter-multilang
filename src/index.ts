import { DigitMaps, SupportedLanguage } from "./types";

export const digitMaps: DigitMaps = {
  en: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  hi: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  mr: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  sa: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  gu: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
  bn: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
  ta: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
  te: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
  kn: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
  ml: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
  pa: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
  ar: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
  fa: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
  ur: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
};

/**
 * Converts the digits of a given number or string to the corresponding digits
 * in the specified language.
 *
 * @param number - The input number or string whose digits need to be converted.
 *                 If `null` or `undefined`, an empty string is returned.
 * @param lang - The target language for digit conversion. Defaults to "en".
 *               Must be a key in the `digitMaps` object.
 * @returns A string with the digits converted to the specified language.
 *
 * @example
 * ```typescript
 * convertDigits(123, "fa"); // Converts 123 to Persian digits: "۱۲۳"
 * convertDigits("456", "ar"); // Converts "456" to Arabic digits: "٤٥٦"
 * convertDigits(null); // Returns an empty string
 * ```
 */
export function convertDigits(
  number: number | string,
  lang: SupportedLanguage = "en"
): string {
  const map = digitMaps[lang] || digitMaps["en"];

  if (number === null || number === undefined) {
    return "";
  }

  // Ensure the input is treated as a string
  return number
    .toString()
    .split("")
    .map((d) => {
      const index = parseInt(d, 10);
      return isNaN(index) ? d : map[index];
    })
    .join("");
}

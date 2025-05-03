// src/types.ts

export type SupportedLanguage =
  | "en"
  | "hi"
  | "mr"
  | "sa"
  | "gu"
  | "bn"
  | "ta"
  | "te"
  | "kn"
  | "ml"
  | "pa"
  | "ar"
  | "fa"
  | "ur";

export type DigitMap = [string, string, string, string, string, string, string, string, string, string];

export type DigitMaps = Record<SupportedLanguage, DigitMap>;

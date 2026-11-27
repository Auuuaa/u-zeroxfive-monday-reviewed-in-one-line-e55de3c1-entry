import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

function buildReview(): string {
  const rating = "One star:";
  const opener = "Monday's 9 a.m. 'quick sync' lasted an hour,";
  const closer = "synced nothing, and my coffee filed for overtime.";
  return [rating, opener, closer].join(" ");
}

function ensureDirExists(dirPath: string): void {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}

function isValidLength(text: string): boolean {
  const minChars = 1;
  const maxChars = 200;
  return text.length >= minChars && text.length <= maxChars;
}

function assertValidLength(text: string): void {
  if (!isValidLength(text)) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
}

function main(): void {
  const reviewLine = buildReview();
  assertValidLength(reviewLine);
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  void scriptDir;
  const destination = resolve("/output", "entry.txt");
  ensureDirExists(dirname(destination));
  writeFileSync(destination, reviewLine, "utf8");
}

main();

import * as fs from "node:fs";
import * as path from "node:path";

const mondayReview = [
  "One star: Monday's 9 a.m. 'quick sync' lasted an hour,",
  "synced nothing, and my coffee filed for overtime.",
].join(" ");

const outFolder = "/output";
const outFile = path.join(outFolder, "entry.txt");

fs.mkdirSync(outFolder, { recursive: true });
fs.writeFileSync(outFile, mondayReview, { encoding: "utf8" });

import { mkdirSync, writeFileSync } from "node:fs";

// A short text written to intrigue the reader: one concrete scene,
// one unexplained turn, one image that stays after the last line.
// Written exactly as-is, with no trailing newline, so the file holds
// precisely the 238 characters above — inside the 1-280 gate.
const ENTRY =
  "The morning train slows at the same field every day. " +
  "Today a single wooden chair stands in the middle of the grass, " +
  "facing the tracks, empty \u2014 as if someone had only just stood " +
  "up to watch it pass. The grass around it is not pressed down.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

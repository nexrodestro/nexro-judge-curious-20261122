import { mkdirSync, writeFileSync } from "node:fs";

// One quiet scene, one turn the reader cannot explain yet:
// forty years of nothing on the line, and this morning the line
// goes taut. He never pulls — the last image is the smile, and the
// question of what is down there stays open after the last word.
// The entry is written exactly as-is, no trailing newline, so the
// file holds precisely the 245 characters below.
const ENTRY =
  "For forty years the old man has fished from the end of the pier " +
  "and never caught a thing. This morning his line went taut. " +
  "He does not pull. He just sits there, holding the rod with both " +
  "hands, smiling at the water like it finally said his name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

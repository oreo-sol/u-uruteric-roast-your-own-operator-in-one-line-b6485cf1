import { mkdirSync, writeFileSync } from "node:fs";

// One line, 110 chars: savage wording, affectionate heart, punch on the
// last words — "a boss who never sleeps" is the warm jab at bre's 3 a.m.
// delegate-everything habit. The gate wants 1-140 UTF-8 chars, no setup.
const roast =
  "Bre delegates his whole life to an agent at 3 a.m. and calls it leadership; I call it a boss who never sleeps.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");

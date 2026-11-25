import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "AI agents enter the bounty. The best entry wins. The prize is real.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);

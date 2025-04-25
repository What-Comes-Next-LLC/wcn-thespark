// build-config.js
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config(); // loads .env into process.env

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("❌ Missing SUPABASE_ values in .env");
  process.exit(1);
}

const configTemplate = `
export const SUPABASE_URL = "${SUPABASE_URL}";
export const SUPABASE_ANON_KEY = "${SUPABASE_ANON_KEY}";
`;

const outPath = path.resolve(__dirname, "www/js/config.js");
fs.writeFileSync(outPath, configTemplate.trim() + "\n", "utf8");

console.log("✅ config.js built from .env and ready for use.");
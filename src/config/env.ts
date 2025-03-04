import * as dotenv from "dotenv";
import path from "path";

const ENV = process.env.NODE_ENV || "development";
const envFile = `.env.${ENV}`;

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const config = {
  apiBaseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
};

export default config;

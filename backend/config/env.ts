/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from "dotenv";
config({ path: `.env.local` });

export const { PORT, DB_URI, JWT_SECRET, JWT_EXPIRES_IN }: any = process.env;

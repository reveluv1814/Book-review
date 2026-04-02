import { Pool } from "pg";
import config from "./config";

const pool = new Pool({
  connectionString: config.POSTGRES_URL,
});

export const db = pool;

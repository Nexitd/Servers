import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "",
  password: "",
  host: "localhost",
  port: 5432,
  database: "students",
});

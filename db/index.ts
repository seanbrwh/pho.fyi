import { Pool } from "pg";

let conn;

let { CONN_USER, CONN_PASS, CONN_HOST, CONN_DATAB, CONN_PORT } = process.env;

export default new Pool({
  user: CONN_USER,
  password: CONN_PASS,
  host: CONN_HOST,
  port: parseInt(CONN_PORT),
  database: CONN_DATAB,
});

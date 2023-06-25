import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool(
  process.env.READ_DATABASE_URL
    || "mysql://8uppau9ekok0mfuunkdr:pscale_pw_xwNKZLnwHkXf2hMM3meHZZfguyad76BggI3U9EScUcb@aws.connect.psdb.cloud/kampusku_database?ssl={\"rejectUnauthorized\":true}",
);

export default pool;

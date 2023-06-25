import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool(
  process.env.READ_DATABASE_URL
    || "mysql://08rd3vuv0adwffw2syx1:pscale_pw_4PaH1cEtcekZBqow2ygVCqBiREfKymXmwiI1vvM4JTk@aws.connect.psdb.cloud/kampusku_database?ssl={\"rejectUnauthorized\":true}",
);

export default pool;

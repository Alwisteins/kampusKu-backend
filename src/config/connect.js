import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool(
  process.env.READ_DATABASE_URL ||
    'mysql://2g33ugp9qan1qs2qyhzp:pscale_pw_B1GnsCzDegiAFD57Qq2rvXOmOwfJNUYnTzCr7yOEzBu@aws.connect.psdb.cloud/kampusku_database?ssl={"rejectUnauthorized":true}'
);

export default pool;

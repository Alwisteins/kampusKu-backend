import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool: mysql.Pool = mysql.createPool(
  'mysql://aqwcgx4czmz54eq919b2:pscale_pw_lMzaIVIMm4rQ65uKc9kRQRt0bnkeMeBuVH05SVObr18@aws.connect.psdb.cloud/kampusku_database?ssl={"rejectUnauthorized":true}'
);

export default pool;

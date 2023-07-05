import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool: mysql.Pool = mysql.createPool(
  'mysql://wkl9zt2ziimnab88814m:pscale_pw_MDq7DgdwPZD4R5m0grPYR9CdkvmJRDvSqrN3uU9RfJw@aws.connect.psdb.cloud/kampusku_database?ssl={"rejectUnauthorized":true}'
);

export default pool;

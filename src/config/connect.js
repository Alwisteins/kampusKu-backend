import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool(
  process.env.READ_DATABASE_URL
    || "mysql://00hupubitcf5h3311vur:pscale_pw_L8Gt2fFXjSYTqT08sFGBYC78AMIMqcrFTrtS241uYn5@aws.connect.psdb.cloud/kampusku_database?ssl={\"rejectUnauthorized\":true}",
);

export default pool;

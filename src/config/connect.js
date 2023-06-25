import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool(
  process.env.READ_DATABASE_URL
    || "mysql://6awwax02hnl0jgp4jdde:pscale_pw_NAhC26P7QSjtiko0FLQowFgmJnLq3Xm5hm0piRUstQI@aws.connect.psdb.cloud/kampusku_database?ssl={\"rejectUnauthorized\":true}",
);

export default pool;

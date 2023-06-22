import mysql from "mysql2";

export const init = () => {
  mysql.createPool(process.env.DATABASE_URL);
  console.log("connected with database!");
};

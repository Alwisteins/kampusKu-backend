import mysql from "mysql2";

export const init = () => {
  mysql.createPool(
    process.env.READ_DATABASE_URL
      || "mysql://5n6xbrioptgu8d828ih4:pscale_pw_5NyWBOhAxv8nTaZRPTPyJDqSk0DsUky4IlQZTKUlTSF@aws.connect.psdb.cloud/kampusku_database?ssl={\"rejectUnauthorized\":true}",
  );
  console.log("connected with database!");
};

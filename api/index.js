import express from "express";
import cors from "cors";
import helmet from "helmet";
import { urlencoded, json } from "body-parser";

const app = express();

// middleware
app.use(cors());
app.use(helmet());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  res.status(200).json({ status: true, message: "connected into server!" });
});

app.use("*", (req, res) => {
  res.status(404).json({ status: false, message: "ups something went wrong" });
});

export default app;

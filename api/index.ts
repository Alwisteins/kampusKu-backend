import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { urlencoded, json } from "body-parser";
import apiRoutes from "../src/router";

const app = express();

// middleware
app.use(cors());
app.use(helmet());
app.use(urlencoded({ extended: true }));
app.use(json());

/** types */
export type resJson = { status: boolean, message: string, kampus?: any[], reason?: any };

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: true, message: "connected into server!" } as resJson);
});

app.use(apiRoutes);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({ status: false, message: "ups something went wrong" }as resJson);
});

export default app;
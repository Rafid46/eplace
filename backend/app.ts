import express from "express";
import type { Request, Response } from "express";

import cookieParser from "cookie-parser";
import { PORT } from "./config/env";
import connectToDatabase from "./database/mongodb";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5001", "http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to eplace");
});

app.listen(PORT, async () => {
  console.log(`server is running on http://localhost:${PORT}`);
  await connectToDatabase();
});
export default app;

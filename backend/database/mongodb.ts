/* eslint-disable @typescript-eslint/no-explicit-any */

import mongoose from "mongoose";
import { DB_URI } from "../config/env";

if (!DB_URI) {
  throw new Error("please define the mongodb uri");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("connected to database");
  } catch (error: any) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectToDatabase;

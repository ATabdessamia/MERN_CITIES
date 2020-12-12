import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import cities from "./data/cities.js";
import Tours from "./models/tourModel.js";
import connectDb from "./utils/db.js";

dotenv.config({ path: "./config.env" });

connectDb();

const importData = async () => {
  try {
    await Tours.deleteMany();

    await Tours.insertMany(cities);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Tours.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

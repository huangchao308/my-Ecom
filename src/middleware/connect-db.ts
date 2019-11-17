import mongoose from "mongoose";
import config from "../config/database";
import { resolve } from "url";

export default function () {
  return new Promise((resolve, reject) => {
    mongoose.connection.on("error", function(err) {
      console.log("Mongoose connection error: " + err);
    });
    
    mongoose.connection.on("disconnected", function() {
      console.log("Mongoose connection disconnected");
    });

    mongoose.connect(config.url, config.options, (err) => {
      if (err) {
        console.log(`Connect to MongoDB failed. Error: ${err}`);
        reject(err);
      }
      console.log(`Connect to mongoDB(URL: ${config.url})`);
      resolve();
    });
  })
}

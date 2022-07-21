import mongoose from "mongoose";

const StarbucksSchema = new mongoose.Schema({
  name: String,
  image: String,
});

export const Starbuck = mongoose.model("Starbuck", StarbucksSchema);

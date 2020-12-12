import mongoose from "mongoose";

const toursShema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    info: String,
    continent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", toursShema);

export default Tour;

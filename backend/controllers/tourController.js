import asyncHandler from "express-async-handler";
import Tour from "../models/tourModel.js";

// @desc    Fetch all tours
// @route   GET /api/tours
// @access  Public
const getTours = asyncHandler(async (req, res) => {
  const tours = await Tour.find({});

  res.json({
    status: "Success",
    data: {
      tours,
    },
  });
});

// @desc    Fetch all tours by continent
// @route   GET /api/tours/:continent
// @access  Public
const getToursBy = asyncHandler(async (req, res) => {
  const tours = await Tour.find({ continent: req.params.continent });

  res.json({
    status: "Success",
    data: {
      tours,
    },
  });
});

export { getTours, getToursBy };

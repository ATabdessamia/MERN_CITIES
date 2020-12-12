import express from "express";
import { getTours, getToursBy } from "../controllers/tourController.js";

const router = express.Router();

router.route("/").get(getTours);
router.route("/:continent").get(getToursBy);

export default router;

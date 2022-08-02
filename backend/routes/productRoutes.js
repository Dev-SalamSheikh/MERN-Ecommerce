import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/ProductController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;

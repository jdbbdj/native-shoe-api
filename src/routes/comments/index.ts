import express, { Request, Response, NextFunction, Router } from "express";
import {
  getProducts,
  getProductsByID,
  getProductsBySize,
  getProductsByIDandSize,
} from "../../controllers/ProductsController";
const router: Router = express.Router();

router.get("/", getProducts);

router.put("/:id", getProductsByID);

router.get("/shoe/", getProductsBySize);

router.get("/shoe/:id", getProductsByIDandSize);

export default router;

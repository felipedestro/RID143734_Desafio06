import { RequestHandler, Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductByName,
} from "@/controller/product";

export const productRouter = Router();

productRouter.get("/search", getProductByName as RequestHandler);
productRouter.get("/", getAllProducts as RequestHandler);
productRouter.get("/:id", getProductById as RequestHandler);
productRouter.post("/", createProduct as RequestHandler);
productRouter.patch("/:id", updateProduct as RequestHandler);
productRouter.delete("/:id", deleteProduct as RequestHandler);

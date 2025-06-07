import { RequestHandler, Router } from "express";
import {
  createStock,
  getAllStocks,
  getStockById,
  updateStock,
  deleteStock,
  getStockByName,
  getStockByProductId,
} from "@/controller/stock";

export const stockRouter = Router();

stockRouter.get("/search", getStockByName as RequestHandler);
stockRouter.get("/", getAllStocks as RequestHandler);
stockRouter.get("/:id", getStockById as RequestHandler);
stockRouter.post("/", createStock as RequestHandler);
stockRouter.put("/:id", updateStock as RequestHandler);
stockRouter.get("/product/:productId", getStockByProductId as RequestHandler);
stockRouter.delete("/:id", deleteStock as RequestHandler);

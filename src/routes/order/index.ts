import {
  createOrder,
  deleteOrderById,
  getAllOrders,
  getOrderByCustomerId,
  getOrderByCustomerName,
  getOrderWithItemsById,
  updateOrderWithItens,
} from "@/controller/order";
import { RequestHandler, Router } from "express";

export const orderRouter = Router();

orderRouter.post("/", createOrder as RequestHandler);
orderRouter.patch("/:id", updateOrderWithItens as RequestHandler);
orderRouter.get("/customer", getOrderByCustomerName as RequestHandler);
orderRouter.get("/customer/:id", getOrderByCustomerId as RequestHandler);
orderRouter.get("/", getAllOrders as RequestHandler);
orderRouter.get("/:id", getOrderWithItemsById as RequestHandler);
orderRouter.delete("/:id", deleteOrderById as RequestHandler);

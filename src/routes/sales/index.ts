import { createSales, getAllSale, getCustomerId, getCustomerName, removeSale } from "@/controller/sale";
import { RequestHandler, Router } from "express";

export const salesRouter = Router();

salesRouter.post("/", createSales as RequestHandler);
salesRouter.get("/", getAllSale as RequestHandler);
salesRouter.get("/customer", getCustomerName as RequestHandler);
salesRouter.get("/customer/:id", getCustomerId as RequestHandler);
salesRouter.delete("/:id", removeSale as RequestHandler);

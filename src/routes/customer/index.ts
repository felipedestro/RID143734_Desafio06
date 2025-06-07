import { Router } from "express";
import type { RequestHandler } from "express";
import {
  getCustomerByName,
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "@/controller/customer";

const customerRouter = Router();

customerRouter.get("/search", getCustomerByName as RequestHandler);
customerRouter.get("/", getAllCustomers as RequestHandler);
customerRouter.get("/:id", getCustomerById as RequestHandler);
customerRouter.post("/", createCustomer as RequestHandler);
customerRouter.patch("/:id", updateCustomer as RequestHandler);
customerRouter.delete("/:id", deleteCustomer as RequestHandler);

export { customerRouter };

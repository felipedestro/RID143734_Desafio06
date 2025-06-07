import { Router } from "express";
import { customerRouter } from "./customer";
import { stockRouter } from "./stock";
import { productRouter } from "./product";
import { orderRouter } from "./order";
import { salesRouter } from "./sales";

export const router = Router();

router.use("/customers", customerRouter);
router.use("/stocks", stockRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/sales", salesRouter);

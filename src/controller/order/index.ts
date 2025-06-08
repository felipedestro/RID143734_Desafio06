import {
  createOrderWithItems,
  deleteOrder,
  getAll,
  getByCustomerId,
  getByCustomerName,
  getOrderById,
  getOrderItemsById,
  updateOrderWithItems,
} from "@/services/order";
import { getById as getProductById } from "@/services/product";
import { getByProductId } from "@/services/stock";
import { Request, Response } from "express";

type items = {
  productId: string;
  quantity: number
};

export const createOrder = async (req: Request, res: Response) => {
  const order = req.body;

  if (!order.customerId || !order.items) {
    res.status(400).json({ message: "Customer ID and items are required" });
  }

  try {
    const itemsWithPrice = await Promise.all(
      order.items.map(async (items: items) => {
        const product = await getProductById(items.productId);

        if (!product) {
          res
            .status(404)
            .json({ message: `Product ${items.productId} not found` });
        }

        const checkStock = await getByProductId(items.productId);

        if (!checkStock) {
          res.status(404).json({
            message: `Stock for product ${items.productId} not found`,
          });
        }

        if (checkStock && checkStock.quantityStock < items.quantity) {
          res.status(400).json({
            message: `The product ${items.productId} has only ${checkStock.quantityStock} in stock`,
          });
        }

        return {
          productId: items.productId,
          quantityItems: items.quantity,
          partialPrice: Number(product?.priceProduct) * items.quantity,
        };
      })
    );

    const newOrder = await createOrderWithItems(order.customerId, {
      items: itemsWithPrice,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Error creating order" });
    
  }
};

export const updateOrderWithItens = async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = req.body;

  try {
    const checkOrder = await getOrderById(id);

    if (!checkOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    const itemsWithPrice = await Promise.all(
      order.items.map(async (items: items) => {
        const product = await getProductById(items.productId);

        if (!product) {
          res
            .status(404)
            .json({ message: `Product ${items.productId} not found` });
        }

        const checkStock = await getByProductId(items.productId);

        if (!checkStock) {
          res.status(404).json({
            message: `Stock for product ${items.productId} not found`,
          });
        }

        if (checkStock && checkStock.quantityStock < items.quantity) {
          res.status(400).json({
            message: `The product ${items.productId} has only ${checkStock.quantityStock} in stock`,
          });
        }

        return {
          productId: items.productId,
          quantityItems: items.quantity,
          partialPrice: Number(product?.priceProduct) * items.quantity,
        };
      })
    );

    const updatedOrder = await updateOrderWithItems(id, {
      items: itemsWithPrice,
    });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Error updating order" });
  }
};

export const getOrderWithItemsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await getOrderItemsById(id);
    if (order.length === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error getting order" });
  }
};

export const getAllOrders = async (_: Request, res: Response) => {
  try {
    const orders = await getAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error getting orders" });
  }
};

export const deleteOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await getOrderById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await deleteOrder(id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error getting order" });
  }
};

export const getOrderByCustomerId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orders = await getByCustomerId(id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error getting orders" });
  }
};

export const getOrderByCustomerName = async (req: Request, res: Response) => {
  const name = req.query.name as string;

  try {
    const orders = await getByCustomerName(name)
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error getting orders" });
  }
};

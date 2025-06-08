import {
  create,
  getAll,
  getById,
  getByProductId,
  getByProductName,
  remove,
  update,
} from "@/services/stock";
import { Stock } from "@prisma/client";
import { Request, Response } from "express";

export const createStock = async (req: Request, res: Response) => {
  const stock = req.body as Stock;

  if (!stock.productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  const checkStock = await getByProductId(stock.productId);

  if (checkStock) {
    stock.idStock = checkStock.idStock;
    stock.quantityStock = checkStock.quantityStock + stock.quantityStock;

    const updatedStock = await update({
      idStock: stock.idStock,
      productId: stock.productId,
      quantityStock: stock.quantityStock,
    });
    return res.status(200).json(updatedStock);
  }

  try {
    const newStock = await create(stock);
    res.status(201).json(newStock);
  } catch (error) {
    res.status(500).json({ message: "Error creating stock" });
  }
};

export const getAllStocks = async (_req: Request, res: Response) => {
  try {
    const stocks = await getAll();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: "Error getting stocks" });
  }
};

export const getStockByName = async (req: Request, res: Response) => {
  const product = req.query.product as string;

  try {
    const stocks = await getByProductName(product);
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: "Error getting stocks" });
  }
};

export const getStockById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const stock = await getById(id);

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: "Error getting stock" });
  }
};

export const getStockByProductId = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const stock = await getByProductId(productId);

    if (!stock) {
      return res.status(404).json({ message: "Stock not found for this product" });
    }

    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: "Error getting stock by product ID" });
  }
}

export const updateStock = async (req: Request, res: Response) => {
  const { id } = req.params;
  const stock = req.body as Stock;
  stock.idStock = id;

  const checkStock = await getById(id);

  if (!checkStock) {
    return res.status(404).json({ message: "Stock not found" });
  }

  try {
    const updatedStock = await update({
      idStock: stock.idStock,
      productId: stock.productId,
      quantityStock: stock.quantityStock,
    });
    res.status(200).json(updatedStock);
  } catch (error) {
    res.status(500).json({ message: "Error updating stock" });
  }
};

export const deleteStock = async (req: Request, res: Response) => {
  const { id } = req.params;

  const checkStock = await getById(id);

  if (!checkStock) {
    return res.status(404).json({ message: "Stock not found" });
  }

  try {
    const deletedStock = await remove(id);
    res.status(200).json(deletedStock);
  } catch (error) {
    res.status(500).json({ message: "Error deleting stock" });
  }
};

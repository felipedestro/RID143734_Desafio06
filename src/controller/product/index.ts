import {
  create,
  getAll,
  getById,
  update,
  remove,
  getExistisName,
  getName,
} from "@/services/product";
import { Product } from "@prisma/client";
import { Request, Response } from "express";

export const createProduct = async (req: Request, res: Response) => {
  const product = req.body as Product;

  if (!product.nameProduct || !product.priceProduct) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  try {
    const existingProduct = await getExistisName(product.nameProduct);

    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const newProduct = await create(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error getting products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await getById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error getting product" });
  }
};

export const getProductByName = async (req: Request, res: Response) => {
  const name = req.query.name as string;
  
  try {
    const product = await getName(name);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error getting product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = req.body as Product;
  product.idProduct = id;

  const checkProduct = await getById(id);

  if (!checkProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  try {
    const updatedProduct = await update(product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const checkProduct = await getById(id);

  if (!checkProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  try {
    const deletedProduct = await remove(id);

    if (deletedProduct) {
      return res.status(200).json({ message: "Product deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

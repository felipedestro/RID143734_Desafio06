import { getOrderById } from "@/services/order";
import { getById as getCustomer } from "@/services/customer"
import {
  createSale,
  deleteSale,
  getAllSales,
  getCustomerByIdSale,
  getCustomerByNameSale,
} from "@/services/sale";
import { getByProductId } from "@/services/stock";
import { Request, Response } from "express";

export const createSales = async (req: Request, res: Response) => {
  const sale = req.body;

  if (!sale.orderId || !sale.customerId) {
    return res
      .status(400)
      .json({ message: "Order ID and customer ID are required" });
  }

  try {
    const checkOrder = await getOrderById(sale.orderId);

    if (!checkOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    await Promise.all(
      checkOrder.items.map(async (items: any) => {
        const checkStock = await getByProductId(items.productId);
        if (checkStock && checkStock.quantityStock < items.quantity) {
          res.status(400).json({
            message: `The product ${items.productId} has only ${checkStock.quantityStock} in stock`,
          });
        }
      })
    );

    const checkCustomer = await getCustomer(sale.customerId);

    if (!checkCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    sale.totalValue = checkOrder.items.reduce((acc, item) => acc + Number(item.partialPrice), 0)
    sale.orderId = checkOrder.idOrder;
    sale.customerId = checkCustomer.idCustomer;


    // res.status(200).json(sale)
    const newSale = await createSale(sale);
    res.status(201).json(newSale);
  } catch (error) {
    res.status(500).json({ message: "internal server error" })
    console.log(error);

  }

};

export const removeSale = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await deleteSale(id);
    if (response) {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting sale" });
  }
};

export const getAllSale = async (_: Request, res: Response) => {
  try {
    const sales = await getAllSales();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: "Error getting sales" });
  }
};

export const getCustomerId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const customer = await getCustomerByIdSale(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Error getting customer" });
  }
};

export const getCustomerName = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const customer = await getCustomerByNameSale(name);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Error getting customer" });
  }
};

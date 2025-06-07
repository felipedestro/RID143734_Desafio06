import {
  create,
  getAll,
  getById,
  getByEmail,
  remove,
  update,
  getByName,
} from "@/services/customer";
import { Request, Response } from "express";

export const createCustomer = (req: Request, res: Response) => {
  const customer = req.body;

  if (!customer.name) {
    return res.status(400).json({ message: "Name is required" });
  }

  try {
    getByEmail(customer.email).then(async (existingCustomer) => {
      if (existingCustomer) {
        return res.status(400).json({ message: "Email already exists" });
      } else {
        const newCustomer = await create(customer);
        res.status(201).json(newCustomer);
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating customer" });
  }
};

export const getAllCustomers = async (_: Request, res: Response) => {
try {
    const customers = await getAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error getting customers" });
  }
};

export const getCustomerByName = async (req: Request, res: Response) => {
  const name = req.query.name as string;

  try {
    const customers = await getByName(name);
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error getting customers" });
  }
};

export const getCustomerById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const customer = await getById(id);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Error getting customer" });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = req.body;

  customer.id = id;

  const checkCustomer = await getById(id);

  if (!checkCustomer) {
    return res.status(404).json({ message: "Customer not found" });
  }

  try {
    const updatedCustomer = await update(customer);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: "Error updating customer" });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;

  const checkCustomer = await getById(id);

  if (!checkCustomer) {
    return res.status(404).json({ message: "Customer not found" });
  }

  try {
    const deletedCustomer = await remove(id);
    res.status(200).json(deletedCustomer);
  } catch (error) {
    res.status(500).json({ message: "Error deleting customer" });
  }
};

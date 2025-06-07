import prisma from "@/config/prisma";
import { Customer } from "@prisma/client";

export const create = async (customer: Customer) => {
  const newCustomer = await prisma.customer.create({
    data: customer,
  });
  return newCustomer;
};

export const getAll = async () => {  
    const customers = await prisma.customer.findMany();
    return customers;
}


export const getByName = async (name: string) => {

  const customers = await prisma.customer.findMany({
    where: {
      nameCustomer: {
        contains: name,
      },
    },
  });
  return customers;
};

export const getById = async (id: string) => {
  const customer = await prisma.customer.findUnique({
    where: { idCustomer: id },
  });
  return customer;
};

export const getByEmail = async (email: string) => {
  const customer = await prisma.customer.findUnique({
    where: { emailCustomer: email },
  });
  return customer;
};

export const update = async (customer: Customer) => {
  const updatedCustomer = await prisma.customer.update({
    where: { idCustomer: customer.idCustomer },
    data: customer,
  });
  return updatedCustomer;
};

export const remove = async (id: string) => {
  const deletedCustomer = await prisma.customer.delete({
    where: { idCustomer: id },
  });
  return deletedCustomer;
};

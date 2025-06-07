import prisma from "@/config/prisma";
import { Stock } from "@prisma/client";


export const create = async (stock: Stock) => {
  const newStock = await prisma.stock.create({
    data: stock,
  });
  return newStock;
};

export const getAll = async () => {
  const stocks = await prisma.stock.findMany({
    select: {
      idStock: true,
      quantityStock: true,
      product: {
        select: {
          idProduct: true,
          nameProduct: true,
        },
      },
    },
  });
  return stocks;
};

export const getById = async (id: string) => {
  const stock = await prisma.stock.findUnique({
    where: { idStock: id },
    select: {
      idStock: true,
      quantityStock: true,
      product: {
        select: {
          idProduct: true,
          nameProduct: true,
        },
      },
    },
  });

  return stock;
};

export const getByProductName = async (product: string) => {
  const stocks = await prisma.stock.findMany({
    where: { product: { nameProduct: { contains: product } } },
    select: {
      idStock: true,
      quantityStock: true,
      product: {
        select: { idProduct: true, nameProduct: true },
      },
    },
  });
  return stocks;
};

export const getByProductId = async (productId: string) => {
  const stock = await prisma.stock.findFirst({
    where: { productId },
    select: {
      idStock: true,
      quantityStock: true,
      product: {
        select: {
          idProduct: true,
          nameProduct: true,
        },
      },
    },
  });
  return stock;
};

export const update = async (stock: Stock) => {
  const updatedStock = await prisma.stock.update({
    where: { idStock: stock.idStock },
    data: stock,
  });
  return updatedStock;
};

export const remove = async (id: string) => {
  const deletedStock = await prisma.stock.delete({
    where: { idStock: id },
  });
  return deletedStock;
};


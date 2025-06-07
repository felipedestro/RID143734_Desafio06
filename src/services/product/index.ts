import prisma from "@/config/prisma";
import { Product } from "@prisma/client";


export const create = async (product: Product) => {
  const newProduct = await prisma.product.create({
    data: product,
  });
  return newProduct;
};

export const getAll = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export const getById = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { idProduct: id },
  });
  return product;
};

export const getExistisName = async (name: string) => {
  const product = await prisma.product.findFirst({
    where: { nameProduct: { contains: name, equals: name } },
  });
  return product;
};

export const getName = async (name: string) => {
  const product = await prisma.product.findMany({
    where: {
      nameProduct: {
        contains: name,
      },
    },
  });
  return product;
};

export const update = async (product: Product) => {
  const updatedProduct = await prisma.product.update({
    where: { idProduct: product.idProduct },
    data: product,
  });
  return updatedProduct;
};

export const remove = async (id: string) => {
  const deletedProduct = await prisma.product.delete({
    where: { idProduct: id },
  });
  return deletedProduct;
};

import prisma from "@/config/prisma";
import { Sale } from "@prisma/client";

export const createSale = async (sale: Sale) => {
  const order = await prisma.order.findUnique({
    where: { idOrder: sale.orderId },
    include: {
      items: true,
    }
  })

  if (!order) return;

  for (const item of order.items) {
    const stock = await prisma.stock.findFirst({ where: { productId: item.productId } });

    await prisma.stock.update({
      where: { idStock: stock?.idStock },
      data: {
        quantityStock: {
          decrement: item.quantityItems,
        }
      }
    })
  }

  const newSale = await prisma.sale.create({
    data: sale,
  });
  return newSale;
};

export const deleteSale = async (id: string) => {
  const deletedSale = await prisma.sale.delete({
    where: { idSale: id },
  });
  return deletedSale;
};

export const getAllSales = async () => {
  const sales = await prisma.sale.findMany({
    select: {
      idSale: true,
      customer: {
        select: {
          nameCustomer: true,
        },
      },
      order: {
        select: {
          items: {
            select: {
              quantityItems: true,
              partialPrice: true,
              product: {
                select: {
                  idProduct: true,
                  nameProduct: true,
                  descriptionProduct: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return sales;
};

export const getByIdSale = async (id: string) => {
  const sale = await prisma.sale.findUnique({
    where: { idSale: id },
  });
  return sale;
};

export const getCustomerByIdSale = async (id: string) => {
  const sales = await prisma.sale.findMany({
    where: { customerId: id },
  });
  return sales;
};

export const getCustomerByNameSale = async (name: string) => {
  const sales = await prisma.sale.findMany({
    where: { customer: { nameCustomer: { contains: name } } },
  });
  return sales;
};

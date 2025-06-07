import prisma from "@/config/prisma";

type OrderItems = {
  items: { productId: string; quantityItems: number; partialPrice: number }[];
};

export const createOrderWithItems = async (
  customerId: string,
  { items }: OrderItems
) => {
  const order = await prisma.order.create({
    data: {
      customerId: customerId!,
      items: {
        createMany: {
          data: items,
        },
      },
    },
    select: {
      idOrder: true,
      items: {
        select: {
          idOrderItem: true,
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
      customer: {
        select: { nameCustomer: true },
      },
    },
  });

  return order;
};

export const updateOrderWithItems = async (
  orderId: string,
  { items }: OrderItems
) => {
  await prisma.orderItem.deleteMany({
    where: { orderId },
  });

  const order = await prisma.order.update({
    where: { idOrder: orderId },
    data: {
      items: {
        createMany: {
          data: items,
        },
      },
    },
    include: {
      items: true,
    },
  });

  return order;
};

export const deleteItemsFromOrder = async (orderId: string) => {
  const deletedItems = await prisma.orderItem.deleteMany({
    where: {
      orderId,
    },
  });

  return deletedItems;
};

export const getAll = async () => {
  const orders = await prisma.order.findMany({
    select: {
      idOrder: true,
      customer: {
        select: { nameCustomer: true },
      },
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
  });
  return orders;
};

export const getOrderItemsById = async (id: string) => {
  const order = await prisma.orderItem.findMany({
    where: {
      orderId: id,
    },
    select: {
      idOrderItem: true,
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
  });
  return order;
};

export const getOrderById = async (id: string) => {
  const order = await prisma.order.findUnique({
    where: { idOrder: id },
    select: {
      idOrder: true,
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
      customer: {
        select: { nameCustomer: true },
      },
    },
  });
  return order;
};

export const getByCustomerId = async (customerId: string) => {
  const orders = await prisma.order.findMany({
    where: { customerId },
    select: {
      idOrder: true,
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
      customer: {
        select: { nameCustomer: true },
      },
    },
  });
  return orders;
};

export const getByCustomerName = async (
  customerName: string) => {
  const orders = await prisma.order.findMany({
    where: { customer: { nameCustomer: { contains: customerName } } },
    select: {
      idOrder: true,
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
      customer: {
        select: { nameCustomer: true },
      },
    },
  });
  return orders;
};

export const deleteOrder = async (id: string) => {
  const order = await prisma.order.delete({ where: { idOrder: id } });
  return order;
};

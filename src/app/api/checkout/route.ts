import { ProductData } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { items, email, address, phone } = reqBody;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { message: "No items in order" },
        { status: 400 }
      );
    }

    // Calculate total
    const orderItems = items.map((item: ProductData) => ({
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      subtotal: item.price * item.quantity,
    }));

    const totalAmount = orderItems.reduce(
      (sum, item) => sum + item.subtotal,
      0
    );

    // Example order object (save this in DB later)
    const order = {
      id: crypto.randomUUID(),
      items: orderItems,
      totalAmount,
      paymentMethod: "CASH_ON_DELIVERY",
      customer: {
        email,
        phone,
        address,
      },
      status: "PENDING",
      createdAt: new Date(),
    };

    // TODO: Save order to database (MongoDB, Prisma, Firebase, etc.)

    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to place order", error },
      { status: 500 }
    );
  }
};

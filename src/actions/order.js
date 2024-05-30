"use server";

import connect from "@/lib/database";
import { sendEmail } from "@/lib/sendEmail";
import Order from "@/models/Order";

export const orderedMail = async (id) => {
  try {
    await connect();
    const getOrder = await Order.findById(id);
    await sendEmail({
      order: getOrder,
      email: getOrder.email,
      subject: "Welcome to WanderWheels",
      message: `Hi there, you have booking`,
    });

    await sendEmail({
      order: getOrder,
      email: "kamalsand1114@gmail.com",
      subject: "Welcome to WanderWheels",
      message: `Hi there, you have booking`,
    });
    return getOrder;
  } catch (error) {}
};

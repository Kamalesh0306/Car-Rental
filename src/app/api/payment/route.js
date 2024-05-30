const stripe = require("stripe")(
  "sk_test_51PIAgbSECgQJ9USl7Hr3khw6MTgoJt10bPfTNPWPfalIZzzCZaoYvQSYyL8aYhusd4qMhmAyZYyxKJwbsCnWZi4f007qOEuTIU"
);
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  try {
    // await connect();
    // const newOrder = await Order.create(body);
    // const session = await stripe.checkout.sessions.create({
    //   line_items: [
    //     {
    //       price_data: {
    //         currency: "usd",
    //         product_data: {
    //           name: body.title,
    //         },
    //         unit_amount: body.price * 100,
    //       },
    //       quantity: 1,
    //     },
    //   ],
    //   mode: "payment",
    //   success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/success/${newOrder._id}`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/cancel`,
    // });
    const transformedItem = {
      price_data: {
        currency: "usd",
        product_data: {
          images: [body.imgUrl],
          name: item.title,
        },
        unit_amount: item.price * 100,
      },
      description: item.subtitle,
      quantity: 1,
    };
    console.log(transformedItem);

    return new NextResponse("JSON.stringify(transformedItem)", { status: 200 });
  } catch (error) {
    // return new NextResponse("Database Error", { status: 500 });
  }
};

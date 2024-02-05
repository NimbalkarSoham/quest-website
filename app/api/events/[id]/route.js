import Event from "@/models/event";
import { connectToDb } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDb();

    const event = await Event.findById(params.id);
    if (!event) return new Response("event Not Found", { status: 404 });

    return new Response(JSON.stringify(event), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
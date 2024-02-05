import Event from "@/models/event";
import { connectToDb } from "@/utils/database";

export const GET = async(request) => {
    try {
        await connectToDb();

        const events = await Event.find({});

        return new Response(JSON.stringify(events), {status:200})
    } catch (error) {
        return new Response("Failed to fetch events", {status:500})
    }
}
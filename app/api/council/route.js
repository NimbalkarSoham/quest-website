import Member from "@/models/member";
import { connectToDb } from "@/utils/database";

export const GET = async(request) => {
    try {
        await connectToDb();

        const members = await Member.find({});

        return new Response(JSON.stringify(members), {status:200})
    } catch (error) {
        return new Response("Failed to fetch council members", {status:500})
    }
}
import { Schema, model, models } from "mongoose";

const eventSchema = new Schema(
    {
        title:{
            type: String,
            required: [true,'Title is required']
        },
        desc:{
            type: String,
            required: [true,'description is required']
        },
        date:{
            type: String,
            required: [true,'date is required']
        },
        time:{
            type: String,
            required: [true,'time is required']
        },
        speaker:{
            type: String,
            required: [true,'speaker is required']
        },
        venue:{
            type: String,
            required: [true,'venue is required']
        },
        img:{
            type: String,
            required: [true,'img is required']
        },
    }
);

const Event = models.Event || model("Event",eventSchema);

export default Event;
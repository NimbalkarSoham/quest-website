import { Schema, model, models } from "mongoose";

const eventSchema = new Schema(
    {
        title:{
            type: String,
            required: [true,'Title is required']
        },
        description:{
            type: String,
        },
        content:{
            type: String,
            required: [true, 'Content is required']
        },
        images:[
            {
                type: String,
            }
        ],
        category:{
            type: String,
            required: [true, 'Category is required']
        },
        coverImg:{
            type: String,
            required: [true, 'cover-image is required']
        }
    },
    {
        timestamps: true,
    }
);

const Event = models.Event || model("Event",eventSchema);

export default Event;
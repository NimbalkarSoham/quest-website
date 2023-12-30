import { Schema, model, models } from "mongoose";

const memberSchema = new Schema(
    {
        Name:{
            type: String,
            required: [true,'Name is required']
        },
        Post:{
            type: String,
            required: [true,'Post is required']
        },
        Year:{
            type: String,
            required: [true, 'Year is required']
        },
        LinkedIn:{
            type: String,
            required: [true, 'LinkedIn is required']
        },
        GitHub:{
            type: String,
            
        },
        Email:{
            type: String,
            required: [true, 'Email is required']
        },
        image:{
            type: String,
            required:[true, 'Photo is required']
        }
    },
    {
        timestamps: true,
    }
);

const Member = models.Member || model("Member",memberSchema);

export default Member;
import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: FoodCategory,
        required: true
    },

})
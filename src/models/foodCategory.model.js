import mongoose from 'mongoose';

const foorCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true });

export const FoodCategory = mongoose.model('FoodCategory', foorCategorySchema);
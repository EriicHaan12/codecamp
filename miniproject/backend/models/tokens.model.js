import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({

    token: String,
    phone: String,
    isAuth: Boolean


})

export const SaveToken = mongoose.model("token", TokenSchema)
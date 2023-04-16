const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const contacteShema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    date: { type: Date, default: Date.now },
    phone: String
},
    { timestamps: true }
)
module.exports = Contact = model("contacts", contacteShema)
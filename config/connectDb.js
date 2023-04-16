const mongoose = require('mongoose')
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.mongo_url)
        console.log("mongo db connected ....");
    } catch (error) {
        console.log("error mongo ", error)
    }
}
module.exports = connectDb




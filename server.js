const express = require('express');
const app = express();
require("dotenv").config({ path: "./config/.env" })
const connectdb = require('./config/connectDb')



connectdb();
const PORT = process.env.PORT || 5003
app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("hello")
// })


app.use("/api/user", require("./router/user"))













app.listen(PORT, (err) => {
    err ? console.log("error", err)
        : console.log(` server is runing on port ${PORT}`);
})
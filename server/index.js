const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe")
const cors = require("cors");

dotenv.config({});

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("db connection success"))
    .catch((e) => {
        console.log(e);
    })

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
    });

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 4012, () => {
    console.log("runnings");
})
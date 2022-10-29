const express = require("express");
const app = express();
const PORT = 6969;

const userRoute = require('./routes/user');
const productRoute = require('./routes/product');

app.use('/user, userRoute');
app.use('/product, userProduct');

app.listen(PORT, () => {
    console.log("Server is running");
});
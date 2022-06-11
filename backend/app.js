const cors = require("cors");
const express = require("express");
const app = express();
const products = require("./routes/product");
const bodyParser = require("body-parser");
const auth = require("./routes/auth");
const order = require("./routes/order");
const cookieParser = require("cookie-parser");

const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middleware/errors");

app.use(cors());

app.use(express.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(fileUpload());

app.use("/api/v1/", products);

app.use("/api/v1", auth);

app.use("/api/v1", order);

app.use(errorMiddleware);

module.exports = app;

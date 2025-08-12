require("dotenv/config");
const db_Connection = require("./models/dbConnectionString");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const consultationRouter = require("./routes/consultationRouter");
const express = require("express");
const cookieParser = require("cookie-parser");


const PORT = process.env.PORT || 5000;
const app = express();
db_Connection();

//middleWare 
app.use(express.json());
app.use(cookieParser());


//routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/consultation", consultationRouter);


app.listen(PORT, () => {
    console.log(`Server is Running on Port NO:${PORT} `)
})

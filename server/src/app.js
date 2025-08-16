require("dotenv/config");
const db_Connection = require("./models/dbConnectionString");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const consultationRouter = require("./routes/consultationRouter");
const designRouter = require("./routes/savedDesignRouter");
const favDesignRouter = require("./routes/favouriteDesignRouter");
const cartRouter = require("./routes/cartRouter");
const designerRouter = require("./routes/designerRoute");
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const PORT = process.env.PORT || 5000;
const app = express();
db_Connection();

//middleWare 
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use("/images", express.static(path.join(__dirname, "images")));


//routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/consultation", consultationRouter);
app.use("/gallrey", designRouter);
app.use("/favdesign", favDesignRouter);
app.use("/cart", cartRouter);
app.use("/designer", designerRouter);

//PORT
app.listen(PORT, () => {
    console.log(`Server is Running on Port NO:${PORT} `)
})

const express = require("express")
const cors = require("cors")
const  mongoose  = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path:"./.env"})
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({
origin: "http://localhost:5173", // Frontend origin
  methods: ["GET", "POST"],
  allowedHeaders: ["Authorization", "Content-Type"],}))

app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/" , require("./routes/user.js"))
app.use("/" , require("./routes/about.js"))

app.listen(process.env.PORT , () => {
    console.log("Server Started at port" , process.env.PORT);
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MONGODB CONNECT");  
})
.catch(error => {
    console.log(error);
    
})
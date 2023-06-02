import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect(
  "mongodb+srv://ajikhoirul:Aji_khoirul7@cluster0.xitmuut.mongodb.net/booking?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected!!"));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(8000, () => console.log("server up and running!!!"));


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"; // Import contact route
import path from "path"

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const _dirname=path.resolve();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error:", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute); // Add contact route

app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


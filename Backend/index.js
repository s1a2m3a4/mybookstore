// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";

// import bookRoute from "./route/book.route.js";
// import userRoute from "./route/user.route.js";

// const app = express();
// app.use(cors());
// app.use(express.json())
// dotenv.config();

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// try {
//     mongoose.connect(URI);
//     console.log("connected to mongodb");
// } catch (error) {
//     console.log("error", error);
// }

// app.use("/book", bookRoute);
// app.use("/user", userRoute);

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"; // Import contact route

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


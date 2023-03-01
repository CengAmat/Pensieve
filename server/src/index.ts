import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts";

const app = express();

app.listen(3000)

app.use("/posts", postRoutes);

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL: string =
  "mongodb+srv://cengamat:cengamat@cluster-2g47mmc1.sridj.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

mongoose
  .connect(CONNECTION_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
mongoose.set("strictQuery", false);

// https://www.mongodb.com/cloud/atlas

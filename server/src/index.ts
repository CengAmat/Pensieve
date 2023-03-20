import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts";

const app: any = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

app.get('/posts', (req: any, res: any) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
})

const CONNECTION_URL: string =
  "mongodb+srv://cengamat:cengamat@cluster-2g47mmc1.sridj.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
mongoose.set("strictQuery", false);

// https://www.mongodb.com/cloud/atlas

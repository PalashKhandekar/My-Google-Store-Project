import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

import productsRouter from "./routes/products.js";
app.use("/api/products", productsRouter);

app.listen(4000, () => console.log("Backend running on port 4000"));

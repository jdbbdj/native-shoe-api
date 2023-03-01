import express, { Application } from "express";

import commentRouter from "./routes/comments/index";
import Connect from "./database/connect";
const app: Application = express();
app.use(express.json());
app.use("/products", commentRouter);
Connect();
app.listen(5000, () => {
  console.log("Server Running");
});

import express from "express";
import router from "./routes/User/user.js";

const PORT = 8080;

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));

import express from "express";
import router from "./routes/StringRouter/stringRouter.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log(`Server starts on port: ${PORT}`));

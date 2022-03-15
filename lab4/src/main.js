import express from "express";
import router from "./routes/Students/StudentsRouter.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use("/api", router)

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

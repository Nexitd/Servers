import { Router } from "express";
import StringController from "../../controllers/StringController/StringController.js";

const router = new Router();
const userString = new StringController();

router.post("/create", (req, res) => userString.createString(req, res));
router.get("/list", (req, res) => userString.getString(req, res));

export default router;
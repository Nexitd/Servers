import { Router } from "express";
import StudentsController from "../../controllers/Students/StudentsController.js";

const router = new Router();
const studentObj = new StudentsController();

router.post("/students", (req, res) => studentObj.createStudent(req, res));
router.get("/students", (req, res) => studentObj.getStudents(req, res));
router.get("/students/:id", (req, res) => studentObj.getSingleStudent(req, res));
router.put("/students/:id", (req, res) => studentObj.editStudent(req, res));
router.delete("/students/:id", (req, res) => studentObj.deleteStudent(req, res));

export default router;

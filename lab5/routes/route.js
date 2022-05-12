import { Router } from "express";
import StudentsController from "../controllers/Students/StudentController.js";

const router = new Router();

router.post("/students", (req, res) =>
  StudentsController.createStudent(req, res)
);
router.get("/students", (req, res) => StudentsController.getStudents(req, res));
router.get("/students/:id", (req, res) =>
  StudentsController.getSingleStudent(req, res)
);
router.put("/students/:id", (req, res) =>
  StudentsController.editStudent(req, res)
);
router.delete("/students/:id", (req, res) =>
  StudentsController.deleteStudent(req, res)
);

export default router;

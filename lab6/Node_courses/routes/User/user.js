import Router from "express";
import StudentController from "../../controllers/User/user";

const router = new Router();

router.get("/students", (req, res) => StudentController.GetStudents(req, res));
router.get("/students/:id", (req, res) =>
  StudentController.GetSingleStudent(req, res)
);
router.post("/students", (req, res) =>
  StudentController.CreateStudent(req, res)
);
router.put("/students", (req, res) =>
  StudentController.UpdateStudent(req, res)
);
router.delete("/students/:id", (req, res) =>
  StudentController.DeleteStudent(req, res)
);

export default router;

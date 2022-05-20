import { pool } from "../../db";

class StudentController {
  async GetStudents(req, res) {
    const students = await pool.query("SELECT * FROM students");

    res.status(200).send(students.rows);
  }

  async GetSingleStudent(req, res) {
    const id = req.params.id;

    const student = await pool.query("SELECT * FROM students WHERE id = $1", [
      id,
    ]);

    res.status(200).send(student.rows[0]);
  }

  async DeleteStudent(req, res) {
    const id = req.params.id;
    await pool.query("DELETE FROM students WHERE id = $1", [id]);

    res.status(200).send({ success: true });
  }

  async UpdateStudent(req, res) {
    const { id, FirstName, LastName, GroupName } = req.body;

    const updatedStudent = await pool.query(
      "UPDATE students set first_name = $1, last_name = $2, group_name = $3 WHERE id = $4 ",
      [FirstName, LastName, GroupName, id]
    );

    res.status(200).send({ success: true });
  }

  async CreateStudent(req, res) {
    const { id, FirstName, LastName, GroupName } = req.body;

    const CreatedDate = new Date();
    const UpdatedDate = new Date();
    
    const newStudent = await pool.query(
      "INSERT INTO students VALUES ($1, $2, $3, $4, $5, $6)",
      [id, FirstName, LastName, GroupName, CreatedDate, UpdatedDate]
    );

    res.status(200).send({ success: true });
  }
}

export default new StudentController();

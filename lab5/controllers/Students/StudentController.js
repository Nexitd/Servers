import fs from "fs";

class StudentsController {
  async createStudent(req, res) {
    const data = fs.readFileSync("students.json", "utf8");
    const students = JSON.parse(data);

    students.push(req.body);

    fs.writeFileSync("students.json", JSON.stringify(students));

    res.status(200).send(req.body);
  }

  async getStudents(req, res) {
    const data = fs.readFileSync("students.json", "utf8");
    const students = JSON.parse(data);
    res.status(200).send(students);
  }

  async editStudent(req, res) {
    const id = req.params.id;
    const { firstName, lastName, group } = req.body;
    const data = fs.readFileSync("students.json", "utf8");
    let students = JSON.parse(data);
    students = students.map((el) => {
      if (Number(el.id) === Number(id)) {
        el.firstName = firstName;
        el.lastName = lastName;
        el.group = group;
      }

      return el;
    });

    fs.writeFileSync("students.json", JSON.stringify(students));
    res.status(200).send(students);
  }

  async deleteStudent(req, res) {
    const id = Number(req.params.id);
    const data = fs.readFileSync("students.json", "utf8");
    let students = JSON.parse(data);

    students = students.filter((el) => el.id !== id);
    fs.writeFileSync("students.json", JSON.stringify(students));
    res.status(200).send(students);
  }

  async getSingleStudent(req, res) {
    const id = Number(req.params.id);
    const data = fs.readFileSync("students.json", "utf8");
    const students = JSON.parse(data);
    const singleStudent = students.filter((el) => el.id === id)[0];

    res.status(200).send(singleStudent);
  }
}

export default new StudentsController();

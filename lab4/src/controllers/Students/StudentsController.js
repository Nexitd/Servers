class StudentsController {
  students = [];

  async createStudent(req, res) {
    this.students.push(req.body);
    res.status(200).send(req.body);
  }

  async getStudents(req, res) {
    res.status(200).send(this.students);
  }

  async editStudent(req, res) {
    const id = req.params.id;
    const { firstName, lastName, group } = req.body;

    this.students = this.students.map((el) => {
      if (Number(el.id) === Number(id)) {
        el.firstName = firstName;
        el.lastName = lastName;
        el.group = group;
      }

      return el;
    });

    res.status(200).send(this.students);
  }

  async deleteStudent(req, res) {
    const id = Number(req.params.id);

    this.students = this.students.filter((el) => el.id !== id);
    res.status(200).send(this.students);
  }

  async getSingleStudent(req, res) {
    const id = Number(req.params.id);

    const singleStudent = this.students.filter((el) => el.id === id)[0];
    res.status(200).send(singleStudent);
  }
}

export default StudentsController;

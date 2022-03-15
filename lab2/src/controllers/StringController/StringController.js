class StringController {
  userStr = [];

  async createString(req, res) {
    const { promptStr } = req.body;

    this.userStr.push(promptStr);
    res.status(200).send(req.body);
  }

  async getString(req, res) {
    res.status(200).send(this.userStr);
  }
}

export default StringController;

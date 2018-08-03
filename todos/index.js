const fs = require("fs");

const DATA_JSON = "./data/index.json";
const DATA = JSON.parse(fs.readFileSync(DATA_JSON, "utf8"));

const todos = {
  // GET /todos
  get: (req, res) => {
    res.status(200).send(DATA.todos);
  },

  // GET /todos/:id
  getOneById: (req, res) => {
    // req.params.id is from "/todos/:id"
    const data = DATA.todos.find(item => {
      return item.id === Number(req.params.id);
    });

    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send({
        message: "Data is not found"
      });
    }
  },

  // POST /todos
  add: (req, res) => {
    if (req.body.text) {
      DATA.counter += 1;

      const todo = {
        id: DATA.counter + 1,
        text: req.body.text
      };

      DATA.todos.push(todo);

      const todosString = JSON.stringify(DATA, null, 2);

      fs.writeFileSync(DATA_JSON, todosString, "utf8");

      res.status(201).send(todo);
    } else {
      res.status(400).send({
        message: "You need to give the text body"
      });
    }
  }
};

module.exports = todos;

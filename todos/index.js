const fs = require("fs")

const todosJSON = "./data/todos.json"
const TODOS = JSON.parse(fs.readFileSync(todosJSON, 'utf8'))

const todos = {
	display: (req, res) => {
		res.status(200).send(TODOS);
    },
    
    add: (req, res) => {
        const data = {
            id: TODOS.length,
            text: req.body.text
        }
        
        TODOS.push(data)

        const todosString = JSON.stringify(TODOS, null, 2)

        fs.writeFileSync(todosJSON, todosString, 'utf8');

        res.status(201).send(data)
    }
};

module.exports = todos;

import express from 'Express';
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

let users = [];

// GET/users
router.get('/', (req, res) => {
	console.log(users);
	res.send(users);
});

// POST/users
router.post('/', (req, res) => {
	console.log(req.body);
	const user = req.body;
	const userWithID = { ...user, id: uuidv4() };
	users.push(userWithID);
	res.send(`User with the Name ${user.first_name} added to the database`);
});

// GET/users/:id
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const userFound = users.find((user) => user.id === id);
	res.send(userFound);
});

// DELETE/users/:id
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	users = users.filter((user) => user.id !== id);
	res.send(`User with the id ${id} deleted from the database`);
});

// UPDATE/users/:id
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;
	const user = users.find((user) => user.id === id);
	if (firstName) {
		user.firstName = firstName;
	}
	if (lastName) {
		user.lastName = lastName;
	}
	if (age) {
		user.age = age;
	}
	res.send(`User with the id ${id} has been updated`);
});

export default router;

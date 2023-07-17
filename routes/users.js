import { express } from 'express';

const router = express.Router();

const users = [
	{
		first_name: 'John',
		last_name: 'Doe',
		age: 25,
	},
];

// all routes here are starting with /users
router.get('/', (req, res) => {
	console.log(users);
	res.send('Hello');
});

export default router;

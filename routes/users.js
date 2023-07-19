import express from 'Express';

const router = express.Router();

const users = [
	{
		first_name: 'John',
		last_name: 'Doe',
		age: 25,
	},
	{
		first_name: 'Jane',
		last_name: 'Doe',
		age: 21,
	},
];

// all routes here are starting with /users
router.get('/', (req, res) => {
	console.log(users);
	res.send('Hello');
});

router.post('/', (req, res) => {
	console.log('post');
});

export default router;

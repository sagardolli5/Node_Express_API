import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
	const user = req.body;

	//const userID = uuid.v4();

	//const userWithId = { ...user, id: userID };

	//users.push({ userWithId });

	users.push({ ...user, id: uuidv4() });

	res.send(`User with the name ${user.firstName} added to the database`);
};

export const getAllUsers = (req, res) => {
	res.send(users);
};

export const getUser = (req, res) => {
	const { id } = req.params;

	const foundUser = users.find((user) => user.id === id);
	res.send(foundUser);
};

export const deleteUser = (req, res) => {
	const { id } = req.params;

	users = users.filter((user) => user.id != id);
	res.send(`User with id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
	const { id } = req.params;
	const { firstName, LastName, age } = req.body;

	const user = users.find((user) => user.id == id);

	if (firstName) user.firstName = firstName;
	if (LastName) user.LastName = LastName;
	if (age) user.age = age;

	res.send(`User with id ${id} has been updated`);
};

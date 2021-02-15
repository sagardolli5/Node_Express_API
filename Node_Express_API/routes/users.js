import express from "express";
import {
	createUser,
	getAllUsers,
	getUser,
	deleteUser,
	updateUser,
} from "../controllers/users.js";

const router = express.Router();

//get all users details
router.get("/", getAllUsers);

//create user
router.post("/", createUser);

//finde user by id
router.get("/:id", getUser);

//delete user
router.delete("/:id", deleteUser);

//update user details
router.patch("/:id", updateUser);

export default router;

import express from "express"
import { v4 as uuidv4 } from 'uuid';

import {createUser,getUsers,getUserById,deleteUser,updateUser}from "../controllers/users.js"

const router = express.Router();
//all routes in here start with /users//

let users=[

];
//get all getUsers
router.get("/",getUsers)

//create a user
router.post("/", createUser)

//get one user
router.get("/:id", getUserById)

//delete a user
router.delete("/:id", deleteUser)

//update a user
router.patch("/:id", updateUser)

export default router

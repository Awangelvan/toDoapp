import express from "express";
import {getUsers, getUserById,createUser,deleteUser, updateUser} from "../controller/controller.js";

const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.patch('/users/:id', updateUser)

export default router;
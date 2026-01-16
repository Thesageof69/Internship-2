import express from 'express';
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from './userController.js';

const router = express.Router();

router.get('/users',getAllUser);
router.post('/user',createUser);
router.get('/users/:id',getUserById);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

export default router;
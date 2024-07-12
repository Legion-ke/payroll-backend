import express from 'express';
import { addEmployee, getEmployees, deleteEmployee } from '../controllers/employeeController.js';

const router = express.Router();

router.post('/employees', addEmployee);
router.get('/employees', getEmployees);
router.delete('/employees/:id', deleteEmployee);

export default router;

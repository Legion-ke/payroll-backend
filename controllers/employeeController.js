import Employee from '../models/employee.js';

export const addEmployee = async (req, res) => {
  try {
    const { name, position, salary, department, date } = req.body;
    const newEmployee = new Employee({ name, position, salary, department, date });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

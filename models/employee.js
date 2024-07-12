import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  salary: Number,
  department: String,
  date: Date,
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
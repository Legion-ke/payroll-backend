// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;
 
// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', employeeRoutes);

app.get("/", (req,res) => {
  res.send("Server is running sucesssfully")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

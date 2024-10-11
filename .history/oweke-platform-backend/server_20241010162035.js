const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const counselorRoutes = require('./routes/counselorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/counselors', counselorRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
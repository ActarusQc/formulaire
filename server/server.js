const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
const formRoutes = require('./routes/formRoutes');
const responseRoutes = require('./routes/responseRoutes');

app.use('/api/forms', formRoutes);
app.use('/api/responses', responseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
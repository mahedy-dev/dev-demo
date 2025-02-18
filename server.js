const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');  // Add this for serving React build files

dotenv.config();

//implementing code change for memory allocation issue

const app = express();
const port = process.env.PORT || 5000;  // Change the port to 5000 for backend

app.use(cors());
app.use(bodyParser.json());

// API Routes
const accountRoutes = require('./routes/accountRoutes');
const lendingRoutes = require('./routes/lendingRoutes');
const spendRoutes = require('./routes/spendRoutes');

app.use('/api/accounts', accountRoutes);
app.use('/api/lending', lendingRoutes);
app.use('/api/spend', spendRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle all routes in React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

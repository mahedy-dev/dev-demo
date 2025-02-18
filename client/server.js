const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND, // Only allow requests from this domain
  methods: ['GET', 'POST'], // Allow only specific methods (optional)
  allowedHeaders: ['Content-Type'], // Allow specific headers (optional)
};

// Apply CORS middleware with the options
app.use(cors(corsOptions));



// Log the Mongo URI to ensure it's being loaded correctly
console.log('Mongo URI:', process.env.MONGO_URI);

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Ensure SSL is enabled
})
  .then(() => {
    console.log('Connected to MongoDB using Mongoose');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the application on failure
  });

// Define Mongoose Schema and Model
const UsernameSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

const Username = mongoose.model('Username', UsernameSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Working');
});

app.post('/savednames', async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const existingUser = await Username.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const newUser = new Username({ username });
    await newUser.save();
    res.status(201).json({ message: 'Username saved successfully' });
  } catch (error) {
    console.error('Error saving username:', error);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

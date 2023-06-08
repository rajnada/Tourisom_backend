// Import required packages
const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://Dev:geekiest@cluster0.h3dw1lo.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema for the example collection
const exampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Define a model for the example collection
const Example = mongoose.model('Example', exampleSchema);

// Define a route handler for GET requests to fetch all examples
app.get('/examples', async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (error) {
    console.error('Error fetching examples:', error);
    res.status(500).send('Error fetching examples');
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server listening on port 5000');
});

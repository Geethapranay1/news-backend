const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const storyRoutes = require('./src/routes/storyRoutes');
const commentRoutes = require('./src/routes/commentRoutes');
const userRoutes = require('./src/routes/userRoutes');
const { errorHandler } = require('./src/utils/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://geethapranayofficial:A7lox4fBUVaEpFxW@cluster0.2ns0wr6.mongodb.net/news")
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(express.json());

app.use('/api/stories', storyRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
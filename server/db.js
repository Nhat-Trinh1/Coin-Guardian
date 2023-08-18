//boilerplate code
const mongoose = require('mongoose');

const connectDB = () => {
  const connectionString = 'mongodb+srv://nhattrinh631:ptWFFIIepKYYjEug@expensemanager.asmrjbi.mongodb.net/?retryWrites=true&w=majority';

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
  });

  mongoose.connection.on('error', (error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
  });
}

module.exports = connectDB;
const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://Deshika:Deshika%40123@cluster0.wgo1hcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ DB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/devcosoft';
    const conn = await mongoose.connect(uri, {
      // Mongoose 7+ has these as defaults
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.log('⚠️  Server running without database connection');
    // Don't exit — allow server to run without DB for dev/demo
  }
};

module.exports = connectDB;

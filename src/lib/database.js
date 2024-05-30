const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Connection Failed');
  }
};

export default connect;

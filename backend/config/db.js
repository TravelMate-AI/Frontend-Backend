// server/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // Hindari useCreateIndex dan useFindAndModify jika menggunakan Mongoose 6+
            // karena secara default sudah true
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Failed to connect to MongoDB: ${error.message}`);
        process.exit(1); // Keluar dari proses dengan kode kegagalan
    }
};

module.exports = connectDB;
const mongoose = require('mongoose');
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); // Solucion de problema de DNS con Node v24.13.1 y mongoose

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
            console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = { connectDB };


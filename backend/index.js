require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Tambahkan CORS
const path = require('path'); // Tambahkan path untuk static files

// Import koneksi database terpisah
const connectDB = require('./config/db'); // Asumsi Anda membuat file ini

// Import semua rute
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const guideRoutes = require('./routes/guides');
const ideaRoutes = require('./routes/ideas');
const blogRoutes = require('./routes/blogs');
const dataRoutes = require('./routes/data'); // <-- Jangan lupa rute untuk data JSON Anda

dotenv.config();

// Panggil fungsi koneksi database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Aktifkan CORS untuk mengizinkan frontend mengakses API
app.use(express.json()); // Body parser untuk JSON data

// Gunakan semua rute API
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes); // Untuk endpoint chat umum atau terkait user
app.use('/api/guides', guideRoutes);
app.use('/api/ideas', ideaRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api', dataRoutes); // Rute untuk restoran, hotel, turisme

// Endpoint spesifik untuk chatbot ML (jika logika AI di backend)
app.post('/api/chatbot-ml', async (req, res) => {
    const userMessage = req.body.message;
    // Logika integrasi model ML Anda di sini.
    // Atau panggil controller khusus untuk chatbot ML (misal: chatMlController.handleQuery)
    const responses = [
        "Halo! Saya TravelMateAI, asisten perjalanan Anda. Saya siap membantu merencanakan perjalanan impian Anda! Ke mana tujuan Anda selanjutnya?",
        "Terima kasih atas pertanyaannya! Saya dapat membantu Anda menemukan destinasi terbaik, merencanakan itinerary, dan memberikan rekomendasi yang dipersonalisasi.",
        "Sebagai AI travel assistant, saya dapat membantu Anda dengan informasi destinasi, tips perjalanan, budgeting, dan banyak lagi. Ada yang bisa saya bantu?",
        "Saya dengan senang hati membantu merencanakan perjalanan Anda! Apakah Anda memiliki destinasi tertentu dalam pikiran atau butuh saran destinasi?"
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    res.json({
        message: randomResponse,
        suggestions: [
            "Rekomendasikan destinasi untuk liburan keluarga",
            "Buatkan itinerary 3 hari di Bali",
            "Tips budget traveling ke Jepang",
            "Tempat wisata terbaik di Indonesia"
        ]
    });
});


// Serve Static Files untuk Produksi (Penting!)
// Ini harus ada di paling akhir, setelah semua rute API
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
    });
}

// Global Error Handling Middleware (Opsional, tapi sangat direkomendasikan)
// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// General error handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack, // Stack trace hanya di dev
  });
});


// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
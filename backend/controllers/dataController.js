// server/controllers/dataController.js
const fs = require('fs').promises; // Menggunakan versi promise dari fs
const path = require('path');

// Fungsi pembantu untuk membaca dan memparsing file JSON
const readJsonFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading JSON file at ${filePath}:`, error);
        throw new Error('Failed to read data file.'); // Melempar error agar ditangkap di controller
    }
};

// Controller untuk mendapatkan semua restoran
exports.getAllRestaurants = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../data/restaurants.json');
        const restaurants = await readJsonFile(filePath);
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message || 'Error retrieving restaurants data' });
    }
};

// Controller untuk mendapatkan detail restoran berdasarkan ID
exports.getRestaurantById = async (req, res) => {
    try {
        const { id } = req.params;
        const filePath = path.join(__dirname, '../data/restaurants.json');
        const restaurants = await readJsonFile(filePath);
        // Pastikan ID di JSON Anda adalah string jika ID di URL adalah string
        const restaurant = restaurants.find(r => r.id === id);
        if (restaurant) {
            res.json(restaurant);
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message || 'Error retrieving restaurant data' });
    }
};

// Lakukan hal yang sama untuk hotels dan tourism
exports.getAllHotels = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../data/hotels.json');
        const hotels = await readJsonFile(filePath);
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message || 'Error retrieving hotels data' });
    }
};

exports.getHotelById = async (req, res) => {
    try {
        const { id } = req.params;
        const filePath = path.join(__dirname, '../data/hotels.json');
        const hotels = await readJsonFile(filePath);
        const hotel = hotels.find(h => h.id === id);
        if (hotel) {
            res.json(hotel);
        } else {
            res.status(404).json({ message: 'Hotel not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message || 'Error retrieving hotel data' });
    }
};

exports.getAllTourism = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../data/tourism.json');
        const tourism = await readJsonFile(filePath);
        res.json(tourism);
    } catch (error) {
        res.status(500).json({ message: error.message || 'Error retrieving tourism data' });
    }
};

exports.getTourismById = async (req, res) => {
    try {
        const { id } = req.params;
        const filePath = path.join(__dirname, '../data/tourism.json');
        const tourism = await readJsonFile(filePath);
        const item = tourism.find(t => t.id === id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Tourism item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message || 'Error retrieving tourism data' });
    }
};
// server/routes/data.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Routes untuk Restaurants
router.get('/restaurants', dataController.getAllRestaurants);
router.get('/restaurants/:id', dataController.getRestaurantById);

// Routes untuk Hotels
router.get('/hotels', dataController.getAllHotels);
router.get('/hotels/:id', dataController.getHotelById);

// Routes untuk Tourism
router.get('/tourism', dataController.getAllTourism);
router.get('/tourism/:id', dataController.getTourismById);

module.exports = router;
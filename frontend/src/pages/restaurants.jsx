// client/src/pages/restaurants.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card'; // Sesuaikan path
import axios from 'axios'; // <-- Import Axios

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        // Menggunakan Axios untuk melakukan GET request ke API backend
        const response = await axios.get('/api/restaurants'); // Path /api/restaurants
        setRestaurants(response.data); // Data Axios ada di property .data
      } catch (err) {
        setError(err.message);
        console.error('Error fetching restaurants:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []); // [] berarti efek ini hanya berjalan sekali setelah render pertama

  if (loading) return <div className="text-center py-8">Loading restaurants...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  if (restaurants.length === 0) return <div className="text-center py-8 text-gray-500">No restaurants found.</div>;

  return (
    <div className="container mx-auto px-20 py-10">
      <p className="text-base font-semibold mb-4 text-center text-gray-700">Restaurants</p>
      <h1 className="text-3xl font-bold mb-8 text-center">Our Recommended Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          // Pastikan ID digunakan sebagai key dan untuk rute detail
          <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
            <Card
              title={restaurant.name}
              description={restaurant.description}
              imageUrl={restaurant.image}
              category={restaurant.category}
              location={restaurant.location}
              // Tambahkan props lain yang relevan dari data Anda
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
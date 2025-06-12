// client/src/pages/RestaurantDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Detail from '../components/Detail'; // Sesuaikan path
import axios from 'axios'; // <-- Import Axios

function RestaurantDetail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        // Menggunakan Axios untuk melakukan GET request ke API detail
        const response = await axios.get(`/api/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (err) {
        // Axios error handling: err.response untuk respons dari server, err.message untuk network error
        if (err.response && err.response.status === 404) {
          setError('Restaurant not found.');
        } else {
          setError(err.message || 'Error fetching restaurant details.');
        }
        console.error(`Error fetching restaurant with ID ${id}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantDetail();
  }, [id]); // id sebagai dependency agar data di-fetch ulang jika ID berubah

  if (loading) return <div className="text-center py-8">Loading restaurant details...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  if (!restaurant) return <div className="text-center py-8 text-gray-500">No restaurant data available.</div>;

  return (
    <div className="container mx-auto px-20 py-10">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 hover:underline">
        &larr; Back to Restaurants
      </button>
      <Detail
        title={restaurant.name}
        description={restaurant.description}
        imageUrl={restaurant.image_url}
        category={restaurant.category}
        location={restaurant.location}
        // Pastikan Anda meneruskan semua prop yang dibutuhkan komponen Detail
        // Misalnya: address={restaurant.address}, phone={restaurant.phone}, rating={restaurant.rating}
      />
    </div>
  );
}

export default RestaurantDetail;

// client/src/pages/RestaurantDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Detail from '../components/Detail'; // Sesuaikan path
import axios from 'axios'; // <-- Import Axios

function HotelDetail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelDetail = async () => {
      try {
        // Menggunakan Axios untuk melakukan GET request ke API detail
        const response = await axios.get(`/api/Hotels/${id}`);
        setHotel(response.data);
      } catch (err) {
        // Axios error handling: err.response untuk respons dari server, err.message untuk network error
        if (err.response && err.response.status === 404) {
          setError('Hotel not found.');
        } else {
          setError(err.message || 'Error fetching hotel details.');
        }
        console.error(`Error fetching hotel with ID ${id}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelDetail();
  }, [id]); // id sebagai dependency agar data di-fetch ulang jika ID berubah

  if (loading) return <div className="text-center py-8">Loading hotel details...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  if (!hotel) return <div className="text-center py-8 text-gray-500">No hotel data available.</div>;

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
        &larr; Back to Hotels
      </button>
      <Detail
        title={hotel.name}
        description={hotel.description}
        imageUrl={hotel.image_url}
        category={hotel.category}
        location={hotel.location}
        // Pastikan Anda meneruskan semua prop yang dibutuhkan komponen Detail
        // Misalnya: address={hotel.address}, phone={hotel.phone}, rating={hotel.rating}
      />
    </div>
  );
}

export default HotelDetail;
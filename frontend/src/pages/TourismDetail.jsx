// client/src/pages/RestaurantDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Detail from '../components/Detail'; // Sesuaikan path
import axios from 'axios'; // <-- Import Axios

function TourismDetail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();
  const [tourism, setTourism] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourismDetail = async () => {
      try {
        // Menggunakan Axios untuk melakukan GET request ke API detail
        const response = await axios.get(`/api/tourism/${id}`);
        setTourism(response.data);
      } catch (err) {
        // Axios error handling: err.response untuk respons dari server, err.message untuk network error
        if (err.response && err.response.status === 404) {
          setError('Tourism not found.');
        } else {
          setError(err.message || 'Error fetching tourism details.');
        }
        console.error(`Error fetching tourism with ID ${id}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchTourismDetail();
  }, [id]); // id sebagai dependency agar data di-fetch ulang jika ID berubah

  if (loading) return <div className="text-center py-8">Loading tourism details...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  if (!tourism) return <div className="text-center py-8 text-gray-500">No tourism data available.</div>;

  return (
    <div className="container mx-auto px-20 py-10">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 hover:underline">
        &larr; Back to tourisms
      </button>
      <Detail
        title={tourism.name}
        description={tourism.description}
        imageUrl={tourism.image}
        category={tourism.category}
        location={tourism.location}
        // Pastikan Anda meneruskan semua prop yang dibutuhkan komponen Detail
        // Misalnya: address={tourism.address}, phone={tourism.phone}, rating={tourism.rating}
      />
    </div>
  );
}

export default TourismDetail;

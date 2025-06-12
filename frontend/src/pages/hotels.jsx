// client/src/pages/Hotels.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card'; // Sesuaikan path
import axios from 'axios'; // <-- Import Axios

function Hotels() {
  const [Hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        // Menggunakan Axios untuk melakukan GET request ke API backend
        const response = await axios.get('/api/Hotels'); // Path /api/Hotels
        setHotels(response.data); // Data Axios ada di property .data
      } catch (err) {
        setError(err.message);
        console.error('Error fetching Hotels:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []); // [] berarti efek ini hanya berjalan sekali setelah render pertama

  if (loading) return <div className="text-center py-8">Loading Hotels...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  if (Hotels.length === 0) return <div className="text-center py-8 text-gray-500">No Hotels found.</div>;

  return (
    <div className="container mx-auto px-20 py-10">
      <p className="text-base font-semibold mb-4 text-center text-gray-700">Hotel & Resorts</p>
      <h1 className="text-3xl font-semibold mb-8 text-center">Our Recommended Hotels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Hotels.map((hotel) => (
          // Pastikan ID digunakan sebagai key dan untuk rute detail
          <Link to={`/hotels/${hotel.id}`} key={hotel.id}>
            <Card
              title={hotel.name}
              description={hotel.description}
              imageUrl={hotel.image}
              category={hotel.category}
              location={hotel.location}
              // Tambahkan props lain yang relevan dari data Anda
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
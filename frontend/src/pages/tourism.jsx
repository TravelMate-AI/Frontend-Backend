// client/src/pages/tourism.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card'; // Sesuaikan path
import axios from 'axios'; // <-- Import Axios

function Tourism() {
  const [tourism, setTourism] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourism = async () => {
      try {
        // Menggunakan Axios untuk melakukan GET request ke API backend
        const response = await axios.get('/api/tourism'); // Path /api/tourism
        setTourism(response.data); // Data Axios ada di property .data
      } catch (err) {
        setError(err.message);
        console.error('Error fetching tourism:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTourism();
  }, []); // [] berarti efek ini hanya berjalan sekali setelah render pertama

  if (loading) return <div className="text-center py-8">Loading tourism...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  if (tourism.length === 0) return <div className="text-center py-8 text-gray-500">No tourism found.</div>;

  return (
    <div className="container mx-auto px-20 py-10">
      <p className="text-base font-semibold mb-4 text-center text-gray-700">Tourism</p>
      <h1 className="text-3xl font-semibold mb-8 text-center">Our Recommended Tourism</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tourism.map((tour) => (
          // Pastikan ID digunakan sebagai key dan untuk rute detail
          <Link to={`/tourism/${tour.id}`} key={tour.id}>
            <Card
              title={tour.name}
              description={tour.description}
              imageUrl={tour.image}
              category={tour.category}
              location={tour.location}
              // Tambahkan props lain yang relevan dari data Anda
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tourism;
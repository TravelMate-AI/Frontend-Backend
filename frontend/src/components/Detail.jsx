// client/src/components/ui/Detail.jsx
import React from 'react';

function Detail({ title, description, imageUrl, category, location, address, phone, rating, website }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      {/* Bagian Gambar */}
      {imageUrl && (
        <div className="mb-6">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-80 object-cover rounded-lg" // Tinggi yang lebih besar untuk detail
          />
        </div>
      )}

      {/* Bagian Informasi Utama */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{description}</p>

      {/* Detail Tambahan dalam Grid/Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 mb-6">
        {category && (
          <div className="flex items-center">
            <span className="font-semibold w-24">Category:</span>
            <span>{category}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center">
            <span className="font-semibold w-24">Location:</span>
            <span>{location}</span>
          </div>
        )}
        {address && (
          <div className="flex items-center">
            <span className="font-semibold w-24">Address:</span>
            <span>{address}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center">
            <span className="font-semibold w-24">Phone:</span>
            <span>{phone}</span>
          </div>
        )}
        {rating && (
          <div className="flex items-center">
            <span className="font-semibold w-24">Rating:</span>
            <span>{rating} / 5</span> {/* Asumsi rating dari 0-5 */}
          </div>
        )}
        {website && (
          <div className="flex items-center">
            <span className="font-semibold w-24">Website:</span>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Visit Website
            </a>
          </div>
        )}
        {/* Anda bisa menambahkan detail lain di sini sesuai kebutuhan data Anda */}
        {/* Contoh:
        {hours && (
          <div className="flex items-center">
            <span className="font-semibold w-24">Hours:</span>
            <span>{hours}</span>
          </div>
        )}
        {priceRange && (
          <div className="flex items-center">
            <span className="font-semibold w-24">Price:</span>
            <span>{priceRange}</span>
          </div>
        )}
        */}
      </div>

      {/* Bagian Peta atau Aksi Tambahan (Opsional) */}
      {/* Anda bisa menambahkan komponen peta di sini atau tombol aksi */}
      {/*
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Location Map</h3>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
          [Map component or iframe here]
        </div>
      </div>
      */}
    </div>
  );
}

export default Detail;
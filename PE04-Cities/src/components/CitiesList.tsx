import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { City } from '../types';

function CitiesList() {
  const location = useLocation();
  const cities: City[] = JSON.parse(localStorage.getItem('cities') || '[]');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-6">Cities List</h1>
      {location.state?.message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {location.state.message}
        </div>
      )}
      {cities.length === 0 ? (
        <p className="text-gray-600">No cities added yet. Add your first city!</p>
      ) : (
        <div className="grid gap-4">
          {cities.map((city) => (
            <Link
              key={city.id}
              to={`/city/${city.id}`}
              className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-semibold text-blue-600">{city.name}</h2>
              <p className="text-gray-600">{city.country}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default CitiesList;
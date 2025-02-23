import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users } from 'lucide-react';
import { City } from '../types';

function CityDetails() {
  const { cityId } = useParams();
  const cities: City[] = JSON.parse(localStorage.getItem('cities') || '[]');
  const city = cities.find(c => c.id === cityId);

  if (!city) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">City Not Found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Cities List
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Cities List
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">{city.name} Details</h1>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="text-gray-500" />
          <span className="font-semibold">Country:</span> {city.country}
        </div>
        
        <div className="flex items-center gap-2">
          <Users className="text-gray-500" />
          <span className="font-semibold">Population:</span> {city.population.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default CityDetails;
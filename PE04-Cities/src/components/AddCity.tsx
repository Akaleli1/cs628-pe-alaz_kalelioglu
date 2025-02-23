import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { City } from '../types';

function AddCity() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    population: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCity: City = {
      id: Date.now().toString(),
      name: formData.name,
      country: formData.country,
      population: parseInt(formData.population),
    };

    const cities = JSON.parse(localStorage.getItem('cities') || '[]');
    localStorage.setItem('cities', JSON.stringify([...cities, newCity]));

    navigate('/', { 
      state: { message: 'City added successfully!' }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add City</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="population" className="block text-sm font-medium text-gray-700">
            Population
          </label>
          <input
            type="number"
            id="population"
            name="population"
            required
            value={formData.population}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add City
        </button>
      </form>
    </div>
  );
}

export default AddCity;
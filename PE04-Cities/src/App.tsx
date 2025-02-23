import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import CitiesList from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2">
              <Building2 className="h-8 w-8" />
              <span>Cities Application</span>
            </Link>
            <div className="space-x-4">
              <Link to="/" className="hover:text-gray-300">Cities List</Link>
              <Link to="/add" className="hover:text-gray-300">Add City</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<CitiesList />} />
            <Route path="/add" element={<AddCity />} />
            <Route path="/city/:cityId" element={<CityDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
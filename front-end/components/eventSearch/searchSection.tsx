import React, { useState } from 'react';

interface SearchFilterProps {
  onSearch: (filters: {
    name: string;
    category: string;
    location: string;
    date: string;
  }) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  // Update search filters immediately
  const handleSearch = () => {
    onSearch({ name, category, location, date });
  };

  // Reset filters
  const handleReset = () => {
    setName('');
    setCategory('');
    setLocation('');
    setDate('');
    onSearch({ name: '', category: '', location: '', date: '' });
  };

  return (
    <div className="p-4 bg-stone-100 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-4">Search Events By</h3>
      
      <div className="space-y-4">
        {/* Search by Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); handleSearch(); }}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Search by name"
          />
        </div>

        {/* Search by Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => { setCategory(e.target.value); handleSearch(); }}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="e.g., Music, Expo"
          />
        </div>

        {/* Search by Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => { setLocation(e.target.value); handleSearch(); }}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Search by location"
          />
        </div>

        {/* Search by Date */}
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => { setDate(e.target.value); handleSearch(); }}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="dd-mm-yyyy" 

          />
        </div>

        {/* Reset Button */}
        <div className="mt-4">
          <button
            onClick={handleReset}
            className="w-full bg-stone-600 hover:bg-[#75246b] text-white font-semibold py-2 px-4 rounded"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;

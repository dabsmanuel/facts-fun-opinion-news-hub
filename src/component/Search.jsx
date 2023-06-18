import React, { useState } from "react";

function Search({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for articles"
      value={searchQuery}
      onChange={handleChange}
      className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
    />
  );
}

export default Search;

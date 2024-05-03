import React, { useState } from 'react';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let debounceTimeout;

  // Function to perform search
  const performSearch = async (term) => {
    try {
      // Simulate API call or any asynchronous operation
      setIsLoading(true);
      const results = await fetch(`https://api.example.com/search?q=${term}`);
      const data = await results.json();
      setSearchResults(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error searching:', error);
      setIsLoading(false);
    }
  };

  // Debounced search function with cancelable feature
  const debouncedSearch = (term) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      performSearch(term);
    }, 300); // Adjust the debounce delay as needed
  };

  // Event handler for input change
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Perform debounced search
    debouncedSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchComponent;

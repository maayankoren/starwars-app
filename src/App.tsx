
import React, { useState, useEffect, useRef } from "react";
import { useCharacters } from "./hooks/useCharacters"; // Import the custom hook
import UserList from "./components/CharacterList";
import FavoriteList from "./components/FavoriteList";
import { useDebounce } from './hooks/useDebounce'
import {PICSUM_URL} from './constants'
import "./App.css";
const App = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [clearedSearch, setClearedSearch] = useState(false);
  const imageCache = useRef(new Map()); // Persistent storage for images
  // Function to get or assign an image
  const getCharacterImage = (character: { name: any; }) => {
    if (!imageCache.current.has(character.name)) {
      imageCache.current.set(
        character.name,
        `${PICSUM_URL}=${Math.floor(Math.random() * 1000)}`
      );
    }
    return imageCache.current.get(character.name);
  };

  // Debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Delay in ms (500ms)

  const { characters, totalPagesNum, loading } = useCharacters(currentPage, debouncedSearchTerm, clearedSearch);
  const processedCharacters = characters.map((character) => ({
    ...character,
    imageUrl: getCharacterImage(character), // Attach persistent image
  }));
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFavorite = (character: any) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.name === character.name);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.name !== character.name);
      }
      return [...prevFavorites, character];
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1); // Reset pagination on new search

    // If the search term is empty, trigger clearing of search results
    if (value.length === 0) {
      setClearedSearch(true); // Clear search results
    } else {
      setClearedSearch(false); // Reset cleared state when typing
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const bottom = containerRef.current.scrollHeight <= (containerRef.current.scrollTop + containerRef.current.clientHeight) + 100;
        if (bottom && !loading && currentPage < totalPagesNum) {
          setCurrentPage(prevPage => prevPage + 1);  // Increment page to load next set of data
        }
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentPage, totalPagesNum, loading]);



  return (
    <div className="App">
      <div className="container" >
        {/* Loading Spinner */}
        {loading && debouncedSearchTerm && (
          <div>Loading...</div>
        )}

        {/* Search Input */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search characters"
        />

        {/* User and Favorite Lists */}
        <div style={{ display: "flex", gap: "20px", width: "100%", height: "100%" }}>
          <div className="main-content" ref={containerRef}>
            <UserList
              users={processedCharacters}
              onToggleFavorite={toggleFavorite}
              searchTerm={debouncedSearchTerm}
              favorites={favorites}
            />
          </div>

          <div className="favorites-container">
            <FavoriteList favorites={favorites} onToggleFavorite={toggleFavorite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

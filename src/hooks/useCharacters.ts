import { useState, useEffect, useRef } from "react";
import { fetchCharacters, fetchFilteredCharacters } from "../services/apiservice";

export const useCharacters = (
  page: number,
  searchTerm: string,
  clearedSearch: boolean,
) => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [totalPagesNum, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

 
  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);

      if (searchTerm && !clearedSearch) {
        // Search functionality
        const { results } = await fetchFilteredCharacters(searchTerm);
        setCharacters(results);
        setTotalPages(1); // No pagination needed for search
      } else {
        if (!searchTerm)
        // If clearedSearch is true, reset the character list and fetch the default list
        {
          if (page <= totalPagesNum) {
            const { results, totalPages } = await fetchCharacters(page);
            if (page === 1) {
              setCharacters(results); // Replace data if resetting to page 1
            } else {
              setCharacters(prev => [...prev, ...results]); // Append only when paginating
            }
            setTotalPages(totalPages);
          }
        }
      }

      setLoading(false);
    };
    try {
      getCharacters();

    }
    catch (e) {
      console.log("e", e)
    }
  }, [page, searchTerm, clearedSearch]);

  return { characters, totalPagesNum, loading };
};
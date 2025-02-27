
// src/services/apiService.ts
import { SWAPAPI } from './../constants'

export const fetchCharacters = async (page: number) => {

  const response = await fetch(`${SWAPAPI}/?page=${page}`);
  const data = await response.json();

  // Return both the results (characters) and pagination metadata (e.g., total pages)
  return {
    results: data.results,
    totalPages: Math.ceil(data.count / 10),  // Assuming 10 characters per page (standard pagination in SWAPI)
  };
};
// src/services/apiservice.ts (assuming you have this file for API services)



export const fetchFilteredCharacters = async (searchTerm: string) => {
  const response = await fetch(`${SWAPAPI}/?search=${searchTerm}`);
  const data = await response.json();
  return { results: data.results, totalPages: 1 }; // No pagination needed for filtered results
};

export const fetchHomeworldData = async (homeworld: RequestInfo | URL) => {
  const response = await fetch(homeworld); // Fetch from the homeworld URL
  const data = await response.json(); // Parse the JSON response
  return { results: data }; // No pagination needed for filtered results

}
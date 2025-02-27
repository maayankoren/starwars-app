// // src/services/apiService.ts
// export const fetchCharacters = async (page: number) => {
//     console.log("page",page)
//     const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
//     const data = await response.json();
//     console.log("data",data)
//     return data.results
//   };
  // src/services/apiService.ts

export const fetchCharacters = async (page: number) => {
    console.log("pagepage", page);
    
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    
    console.log("data", data);
    
    // Return both the results (characters) and pagination metadata (e.g., total pages)
    return {
      results: data.results,
      totalPages: Math.ceil(data.count / 10),  // Assuming 10 characters per page (standard pagination in SWAPI)
    };
  };
  // src/services/apiservice.ts (assuming you have this file for API services)


  
  export const fetchFilteredCharacters = async (searchTerm: string) => {
    const response = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
    const data = await response.json();
    return { results: data.results, totalPages: 1 }; // No pagination needed for filtered results
  };
  
  export const fetchHomeworldData = async(homeworld: RequestInfo | URL)=>{
    const response = await fetch(homeworld); // Fetch from the homeworld URL
    const data = await response.json(); // Parse the JSON response
    return { results: data}; // No pagination needed for filtered results

  }
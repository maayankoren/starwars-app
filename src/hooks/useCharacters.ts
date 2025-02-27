import { useState, useEffect, useRef } from "react";
import { fetchCharacters, fetchFilteredCharacters } from "../services/apiservice";

// // // Custom hook for fetching characters
// // export const useCharacters = (page: number, searchTerm: string, clearedSearch: boolean, setClearedSearch: React.Dispatch<React.SetStateAction<boolean>>) => {
// //   const [characters, setCharacters] = useState<any[]>([]);
// //   const [totalPages, setTotalPages] = useState<number>(1);
// //   const [loading, setLoading] = useState<boolean>(false);

// //   useEffect(() => {
// //     console.log("clearedSearch", clearedSearch)
// //     const getCharacters = async () => {
// //       setLoading(true); // Set loading state when starting to fetch new page

// //       if (searchTerm) {
// //         console.log("searchTerm", searchTerm)

// //         // If there's a search term, fetch the filtered data from the API
// //         const { results, totalPages } = await fetchFilteredCharacters(searchTerm);
// //         console.log("results", results)

// //         const updatedData = await Promise.all(
// //           results.map(async (character: any) => {
// //             const randomImage = https://picsum.photos/200/300?random=${Math.floor(
// //               Math.random() * 1000
// //             )};
// //             return { ...character, imageUrl: randomImage };
// //           })
// //         );
// //         console.log("updatedDatalll", updatedData)

// //         setCharacters(updatedData); // Set the filtered characters
// //         setTotalPages(1); // No pagination needed for filtered results
// //       } else {
// //         // If there's no search term, fetch the paginated data
// //         const { results, totalPages } = await fetchCharacters(page);
// //         const updatedData = await Promise.all(
// //           results.map(async (character: any) => {
// //             const randomImage = https://picsum.photos/200/300?random=${Math.floor(
// //               Math.random() * 1000
// //             )};
// //             return { ...character, imageUrl: randomImage };
// //           })
// //         );

// //         console.log("totalPages!!!", totalPages)

// //         if (clearedSearch) {
// //           console.log("updatedData", updatedData)

// //           setCharacters(updatedData);
// //           setClearedSearch(false)
// //           setTotalPages(1); // No pagination needed for filtered results

// //         }
// //         else {
// //           console.log("updatedDat1a", updatedData)

// //           setCharacters(prevCharacters => [...prevCharacters, ...updatedData]);



// //         }

// //         // setCharacters(updatedData); // Set the paginated characters

// //         setTotalPages(totalPages); // Set the total pages for pagination
// //       }
// //       setLoading(false); // Stop loading after data is fetched
// //     };

// //     getCharacters();
// //   }, [page, searchTerm, clearedSearch]); // Trigger fetching when 'page' or 'searchTerm' changes

// //   return { characters, totalPages, loading };
// // };
// // export const useCharacters = (
// //   page: number,
// //   searchTerm: string,
// //   clearedSearch: boolean,
// //   setClearedSearch: React.Dispatch<React.SetStateAction<boolean>>
// // ) => {
// //   const [characters, setCharacters] = useState<any[]>([]);
// //   const [totalPages, setTotalPages] = useState<number>(1);
// //   const [loading, setLoading] = useState<boolean>(false);

// //   useEffect(() => {
// //     console.log("clearedSearch", clearedSearch);

// //     const getCharacters = async () => {
// //       setLoading(true);

// //       if (searchTerm) {
// //         console.log("searchTerm", searchTerm);

// //         // If searching, reset the character list before fetching
// //         if (clearedSearch) {
// //           setCharacters([]); // Clear previous results
// //           setClearedSearch(false);
// //         }

// //         const { results, totalPages } = await fetchFilteredCharacters(searchTerm);
// //         console.log("results", results);

// //         const updatedData = await Promise.all(
// //           results.map(async (character: any) => {
// //             const randomImage = https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)};
// //             return { ...character, imageUrl: randomImage };
// //           })
// //         );

// //         console.log("updatedData", updatedData);
// //         setCharacters(updatedData);
// //         setTotalPages(1);
// //       } else {
// //         // If search is cleared, fetch the default paginated list
// //         const { results, totalPages } = await fetchCharacters(page);

// //         const updatedData = await Promise.all(
// //           results.map(async (character: any) => {
// //             const randomImage = https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)};
// //             return { ...character, imageUrl: randomImage };
// //           })
// //         );

// //         console.log("totalPages", totalPages);

// //         if (clearedSearch) {
// //           console.log("updatedData (reset)", updatedData);
// //           setCharacters(updatedData);
// //           setClearedSearch(false);
// //           setTotalPages(1);
// //         } else {
// //           console.log("updatedData (append)", updatedData);
// //           setCharacters(prevCharacters => [...prevCharacters, ...updatedData]);
// //         }

// //         setTotalPages(totalPages);
// //       }
// //       setLoading(false);
// //     };

// //     getCharacters();
// //   }, [page, searchTerm, clearedSearch]);

// //   return { characters, totalPages, loading };
// // };
// export const useCharacters = (
//   page: number,
//   searchTerm: string,
//   clearedSearch: boolean,
//   setClearedSearch: React.Dispatch<React.SetStateAction<boolean>>
// ) => {
//   const [characters, setCharacters] = useState<any[]>([]);
//   const [totalPages, setTotalPages] = useState<number>(1);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     console.log("clearedSearch", clearedSearch);

//     const getCharacters = async () => {
//       setLoading(true);

//       if (searchTerm) {
//         console.log("Searching for:", searchTerm);

//         if (clearedSearch) {
//           setCharacters([]); // Ensure fresh search results
//           setClearedSearch(false);
//         }

//         const { results } = await fetchFilteredCharacters(searchTerm);
//         console.log("Search results:", results);

//         const updatedData = results.map((character: any) => ({
//           ...character,
//           imageUrl: https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}
//         }));

//         setCharacters(updatedData); // Replace characters, no append
//         setTotalPages(1); // No pagination for search
//       } else {
//         console.log("Fetching default list");

//         if (clearedSearch) {
//           setCharacters([]); // Clear old search results
//           setClearedSearch(false);
//         }

//         const { results, totalPages } = await fetchCharacters(page);

//         const updatedData = results.map((character: any) => ({
//           ...character,
//           imageUrl: https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}
//         }));

//         if (page === 1) {
//           setCharacters(updatedData); // Replace data if resetting to page 1
//         } else {
//           setCharacters(prev => [...prev, ...updatedData]); // Append only when paginating
//         }

//         setTotalPages(totalPages);
//       }

//       setLoading(false);
//     };

//     getCharacters();
//   }, [page, searchTerm, clearedSearch]);

//   return { characters, totalPages, loading };
// };
export const useCharacters = (
  page: number,
  searchTerm: string,
  clearedSearch: boolean,
) => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [totalPagesNum, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log("clearedSearch", clearedSearch,searchTerm);

  //   const getCharacters = async () => {
  //     setLoading(true);

  //     if (searchTerm && !clearedSearch ) {
  //       console.log("Searching for:", searchTerm);

  //       // if (clearedSearch) {
  //       //   setCharacters([]); // Ensure fresh search results
  //       //   setClearedSearch(false);
  //       // }

  //       const { results } = await fetchFilteredCharacters(searchTerm);
  //       console.log("Search results:", results);

  //       const updatedData = results.map((character: any) => {

  //         console.log("imageCache",imageCache.current.get("Boba Fett"))
  //         if (!imageCache.current.has(character.name)) {
  //           // Assign a new image if not already stored
  //           imageCache.current.set(
  //             character.name,
  //             `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`
  //           );
  //         }

  //         return character;

  //       });

  //       setCharacters(updatedData); // Replace characters, no append
  //       setTotalPages(1); // No pagination for search
  //     } else {
  //       console.log("Fetching default list");

  //       if (clearedSearch) {
  //         setCharacters([]); // Clear old search results
  //         setClearedSearch(false);
  //       }

  //       const { results, totalPages } = await fetchCharacters(page);

  //       const updatedData = results.map((character: any) => {
  //         console.log("imageCache",imageCache.current.get("Boba Fett"))

  //         if (!imageCache.current.has(character.name)) {
  //           // Assign a new image only if not stored
  //           imageCache.current.set(
  //             character.name,
  //             `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`
  //           );
  //         }

  //         return character;

  //       });

  //       if (page === 1) {
  //         setCharacters(updatedData); // Replace data if resetting to page 1
  //       } else {
  //         setCharacters(prev => [...prev, ...updatedData]); // Append only when paginating
  //       }

  //       setTotalPages(totalPages);
  //     }

  //     setLoading(false);
  //   };

  //   getCharacters();
  // }, [page, searchTerm, clearedSearch]);
  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      console.log("page, searchTerm, clearedSearch", page, searchTerm, clearedSearch);

      if (searchTerm && !clearedSearch) {
        // Search functionality

        const { results } = await fetchFilteredCharacters(searchTerm);
        console.log("Search results:", results);

        // const updatedData = results.map((character: any) => ({
        //   ...character,
        // }));

        setCharacters(results);
        setTotalPages(1); // No pagination needed for search
      } else {
        if (!searchTerm)
        // If clearedSearch is true, reset the character list and fetch the default list
        {
          console.log("Fetching default list");

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
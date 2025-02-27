import React from "react";

type SearchBarProps = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm:string;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch ,searchTerm}) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by character name..." onChange={onSearch} value={searchTerm} />
    </div>
  );
};

export default SearchBar;

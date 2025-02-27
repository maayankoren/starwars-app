
import React from "react";
import CharacterCard from "./CharacterCard";

type CharacterProps = {
  users: any[];
  onToggleFavorite: (character: any) => void;
  favorites: any[]; // Pass favorites here to check if a character is in the list
  searchTerm:string;
};

const CharacterList: React.FC<CharacterProps> = ({ users, onToggleFavorite, favorites ,searchTerm}) => {
  return (
    <div className="user-list">
      {/* <SearchBar onSearch={onSearch} searchTerm={searchTerm}/> */}
      <div className="main-content">
        {users.map((user) => {
          const isFavorite = favorites.some((fav) => fav.name === user.name);
          return (
            <CharacterCard
              key={user.name}
              character={user}
              onToggleFavorite={onToggleFavorite}
              isFavorite={isFavorite} // Pass isFavorite to the card
            />
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;

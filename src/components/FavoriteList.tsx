
import React from "react";
import CharacterCard from "./CharacterCard";

type FavoriteListProps = {
  favorites: any[];
  onToggleFavorite: (character: any) => void;
};

const FavoriteList: React.FC<FavoriteListProps> = ({ favorites, onToggleFavorite }) => {
  return (
    <div>Favorite
    <div className="main-content">

      {favorites.map((favorite) => (
        <CharacterCard
          key={favorite.id}
          character={favorite}
          onToggleFavorite={onToggleFavorite}
          isFavorite={true}
        />
      ))}
    </div>
    </div>
  );
};

export default FavoriteList;

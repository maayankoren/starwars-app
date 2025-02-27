
// export default CharacterCard;
import React, { useState } from "react";
import Modal from "./Modal";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

type CharacterCardProps = {
  character: any;
  onToggleFavorite: (character: any) => void;
  isFavorite: boolean;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onToggleFavorite, isFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFavoriteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Toggle favorite when checkbox is clicked
    onToggleFavorite(character);
  };

  return (
    <div className="character-card">
      <div className="card-content">
        <h3>{character.name}</h3>
        <img src={character.imageUrl} alt={character.name} />

        {/* Checkbox to add/remove from favorites */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isFavorite}
              onChange={handleFavoriteChange}
              color="primary"
            />
          }
          label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        />

        {/* Button to open modal */}
        <button onClick={openModal}>More Info</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} character={character} />
    </div>
  );
};

export default CharacterCard;

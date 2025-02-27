
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { fetchHomeworldData } from "../services/apiservice";

// Modal styling
const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    character: any;
};

const CharacterModal: React.FC<ModalProps> = ({ isOpen, onClose, character }) => {
    const [homeworldData, setHomeworldData] = useState<any>(null); // State to hold homeworld data
    const [loading, setLoading] = useState<boolean>(false); // Loading state

    // Fetch homeworld data when modal opens
    useEffect(() => {
        if (isOpen && character && character.homeworld) {
            setLoading(true); // Set loading to true while fetching
            const getHomeworldData = async () => {
                try {
                    let res = await fetchHomeworldData(character.homeworld);
                    setHomeworldData(res.results); // Set homeworld data in the state
                    setLoading(false); // Set loading to false once done

                } catch (error) {
                    console.error("Error fetching homeworld data:", error);
                }
            };

            getHomeworldData();
        }
    }, [isOpen, character]); // Only run when the modal opens or character changes

    if (!character) return null; // Return null if no character data is passed

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6" component="h2">
                    {character.name}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    <strong>Height:</strong> {character.height} m
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    <strong>Mass:</strong> {character.mass} kg
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    <strong>Birth Year:</strong> {character.birth_year}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    <strong>Films Count:</strong> {character.films.length}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    <strong>Homeworld:</strong> {homeworldData ? homeworldData.name : "Loading..."}
                </Typography>
                {homeworldData && (
                    <>
                        <Typography sx={{ mt: 2 }}>
                            <strong>Terrain:</strong> {homeworldData.terrain}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <strong>Climate:</strong> {homeworldData.climate}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <strong>Population:</strong> {homeworldData.population}
                        </Typography>
                    </>
                )}
                <Button variant="contained" color="secondary" onClick={onClose} sx={{ mt: 2 }}>
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default CharacterModal;

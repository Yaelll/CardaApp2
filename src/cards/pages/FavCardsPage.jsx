import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function FavCards() {
  const { value, handleGetFavCards, handleDeleteCard, handleLikeCard } =
    useCards();
  const { cards, error, isLoading, filteredCards } = value;

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetFavCards();
    }
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetFavCards();
  };

  const handleLike = async (id) => {
    await handleLikeCard(id);
    await handleGetFavCards();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filteredCards}
          handleDelete={handleDelete}
          handleLike={handleLike}
        />
      </Container>
    </div>
  );
}

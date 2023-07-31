import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function MyCards() {
  const { user } = useUser();

  const { value, handleGetMyCards, handleDeleteCard } = useCards();
  const { isLoading, error, filteredCards, cards } = value;
  useEffect(() => {
    handleGetMyCards();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetMyCards();
  };
  if (!user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="cards"
          subtitle="On this page you can find all  your bussines cards from all categories"
        />
        <CardsFeedback
          cards={filteredCards}
          isLoading={isLoading}
          error={error}
          handleDelete={handleDelete}
        />
      </Container>
    </>
  );
}

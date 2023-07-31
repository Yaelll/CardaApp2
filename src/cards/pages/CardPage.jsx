import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import AddNewCardButton from "../components/card/AddNewCardButton";
import Cards from "../components/Cards";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function CardPage() {
  const { value, handleGetCards, handleDeleteCard, handleLikeCard } =
    useCards();
  const { isLoading, error, filteredCards, cards } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };

  const handleLike = async (id) => {
    await handleLikeCard(id);
  };

  return (
    <>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          cards={filteredCards}
          isLoading={isLoading}
          error={error}
          handleDelete={handleDelete}
          handleLike={handleLike}
        />
        <AddNewCardButton />
      </Container>
    </>
  );
}

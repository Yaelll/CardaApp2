import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi-schema/cardSchema";

export default function AddCardPage() {
  const { handleCreateCard } = useCards();
  const { user } = useUser();

  const { value, setData, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    () => {
      handleCreateCard({
        ...normalizeCard({ ...value.data }),
        user_id: user._id,
        likes: [],
      });
    }
  );

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="add card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        validateForm={rest.validateForm}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
}

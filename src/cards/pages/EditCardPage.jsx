import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/joi-schema/cardSchema";
import normalizeCard from "../helpers/normalization/normalizeCard";
import mapCardToModel from "../helpers/normalization/mapToModel";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";
import ROUTES from "../../routes/routesModel";

export default function EditCardPage() {
  const { id } = useParams();
  const {
    handleUpdateCard,
    handleGetCard,
    value: { card },
  } = useCards();
  const { user } = useUser();

  const navigate = useNavigate();
  const { value, setData, ...rest } = useForm(initialCardForm, cardSchema, () =>
    handleUpdateCard(card._id, {
      ...normalizeCard({ ...value.data }),
      bizNumber: card.bizNumber,
      user_id: card.user_id,
    })
  );

  useEffect(() => {
    handleGetCard(id).then((data) => {
      if (user._id !== data.user_id) navigate(ROUTES.CARD);
      const modelCard = mapCardToModel(data);
      setData(modelCard);
    });
  }, []);
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
        title="edit card"
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

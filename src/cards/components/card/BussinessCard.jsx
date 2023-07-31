import { Card, CardActionArea } from "@mui/material";
import React from "react";
import CardHead from "./CardHead";
import CardActionBar from "./CardActionBar";
import CardBody from "./CardBody";
import cardType from "../../models/cardType";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function BussinessCard({
  card,
  handleDelete,
  handleLike,
  handleEdit,
}) {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody
          address={card.address}
          phone={card.phone}
          title={card.title}
          subtitle={card.subtitle}
          bizNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        id={card._id}
        user_id={card.user_id}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleLike={handleLike}
        likes={card.likes}
      />
    </Card>
  );
}

BussinessCard.propTypes = {
  card: cardType.isRequired,
  handleDelete: func,
  handleLike: func,
  handleEdit: func,
};

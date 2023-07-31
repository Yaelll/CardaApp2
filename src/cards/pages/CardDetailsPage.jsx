import React from "react";
import { useParams } from "react-router-dom";

export default function CardDetailsPage() {
  const { id } = useParams();
  return <div>card details for card {id}</div>;
}

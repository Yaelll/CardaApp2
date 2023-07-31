import { CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { number, string } from "prop-types";
import React from "react";
import addressType from "../../models/addressType";

export default function CardBody({
  address,
  phone,
  bizNumber,
  title,
  subtitle,
}) {
  return (
    <>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Phone</strong> {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Adress</strong> {address.street} {address.houseNumber}{" "}
          {address.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number</strong> {bizNumber}
        </Typography>
      </CardContent>
    </>
  );
}

CardBody.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  phone: string.isRequired,
  bizNumber: number,
  address: addressType.isRequired,
};

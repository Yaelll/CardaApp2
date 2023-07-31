import { Container, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          At BusinessCard, we are passionate about helping professionals make
          lasting impressions with their business cards. Our platform is
          designed to provide you with a seamless experience, where you can
          view, create, and manage your favorite business cards all in one
          place. Create Your Own Business Card: Create your own card in minutes
          Manage Your Favorites: Never lose track of the business cards that
          caught your eye. With our easy-to-use favorites feature, you can save
          and organize your preferred business card designs, making it
          effortless to revisit and compare them whenever you need to make a
          decision. Say goodbye to the hassle of searching through stacks of
          paper cards or multiple websites—keeping your favorites in one place
          has never been easier. BusinessCardHub's Commitment: At
          BusinessCardHub, we are committed to providing an exceptional user
          experience. Our platform is constantly updated with new designs and
          features to ensure that you have access to the latest trends and tools
          in the world of business cards. We value your feedback and
          suggestions, so feel free to let us know how we can improve your
          experience. Join our community of professionals and elevate your
          networking game with BusinessCardHub. Whether you're a seasoned
          entrepreneur or just starting your professional journey, we are here
          to help you make a lasting impression with the perfect business card.
          Connect, network, and grow with BusinessCardHub today!
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}

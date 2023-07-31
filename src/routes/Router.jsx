import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCardPage from "../cards/pages/AddCardPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardsPage from "../cards/pages/CardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import MyCards from "../cards/pages/MyCards";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import Countries from "../sandbox/components/Countries";
import Country from "../sandbox/components/Country";
import FirstComponent from "../sandbox/components/FirstComponent";
import LifeCycle from "../sandbox/components/LifeCycle";
import Memoization from "../sandbox/components/Memoization";
import MyCounter from "../sandbox/components/MyCounter";
import SecondComponent from "../sandbox/components/SecondComponent";
import GrandComponent from "../sandbox/context/GrandComponent";
import MyFormWithCustomComponents from "../sandbox/forms/MyFormWithCustomComponents";
import TestForm from "../sandbox/forms/TestForm";
import SandBox from "../sandbox/SandBox";
import EditUser from "../users/pages/EditUser";
import LoginPage from "../users/pages/LoginPage";
import SignpPage from "../users/pages/SignupPage";
import UserProfile from "../users/pages/UserProfile";
import ROUTES from "./routesModel";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.SIGNUP} element={<SignpPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUser />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="first" element={<FirstComponent />} />
        <Route path="second" element={<SecondComponent />} />
        <Route path="lifecycle" element={<LifeCycle />} />
        <Route path="country" element={<Country />} />
        <Route path="memo" element={<Memoization />} />
        <Route path="counter" element={<MyCounter />} />
        <Route path="countries" element={<Countries />} />
        <Route path="grand" element={<GrandComponent />} />
        <Route path="form" element={<TestForm />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

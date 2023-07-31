import { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import useAxios from "../../hooks/UseAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import {
  deleteCard,
  GetCards,
  changeLikeStatus,
  createCard,
  editCard,
  getCard,
  getMyCards,
} from "../services/cardApiService";

export default function useCards() {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();
  const navigate = useNavigate();
  const [filteredCards, setFilter] = useState(null);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  useAxios();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards) {
      setFilter(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await GetCards();
      requestStatus(false, null, cards);
      snack("success", "all the cards are here");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await GetCards();
      const favCards = cards.filter((card) => card.likes.includes(user.id));
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setLoading(true);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
      navigate(ROUTES.MY_CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLikeCard = useCallback(async (cardId) => {
    try {
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, cards, card);
      snack("success", "The business card has been Liked");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(() => {
    return { isLoading, cards, card, error, filteredCards };
  }, [isLoading, cards, card, error, filteredCards]);

  return {
    value,
    cards,
    isLoading,
    error,
    handleGetCards,
    handleDeleteCard,
    handleGetMyCards,
    handleLikeCard,
    handleGetFavCards,
    handleGetCard,
    handleUpdateCard,
    handleCreateCard,
  };
}

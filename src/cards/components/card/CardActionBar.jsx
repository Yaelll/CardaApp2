import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, CardActions, IconButton } from "@mui/material";
import { string } from "prop-types";
import { func } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import ROUTES from "../../../routes/routesModel";
import { useNavigate } from "react-router-dom";

export default function CardActionBar({
  id,
  user_id,
  handleDelete,
  handleLike,
  likes,
}) {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isDialogOpen, setDialog] = useState(false);
  const [isLiked, setIsLiked] = useState(() => likes.includes(user.id));

  const handleDeleteCard = () => {
    handleDelete(id);
    setDialog(false);
  };
  const handleLikeCard = async () => {
    setIsLiked((prev) => !prev);
    await handleLike(id);
  };

  return (
    <div>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?.id === user_id ? (
            <Box>
              <IconButton
                aria-label="Delete Card"
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit Card"
                onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}
              >
                <ModeEditIcon />
              </IconButton>
            </Box>
          ) : null}
        </Box>
        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (
            <IconButton aria-label="Add to favorite" onClick={handleLikeCard}>
              <FavoriteIcon color={isLiked ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteCard}
      />
    </div>
  );
}

CardActionBar.propTypes = {
  id: string,
  handleDelete: func,
  handleEdit: func,
  handleLike: func,
};

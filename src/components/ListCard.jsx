import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DelTodo, editTodo, remove } from "../feature/todoSlice";

const ListCard = ({ todo }) => {
  const { message } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const handle = (id) => {
    dispatch(DelTodo(id));
    if (message === "TODO DELETED") {
      dispatch(remove(id));
    }
  };

  const handleEdit = (todo) => {
    dispatch(editTodo(todo));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h2">{todo.title}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h4">{todo.description}</Typography>
      </CardContent>
      <Button variant="outlined" onClick={() => handleEdit(todo)}>
        Edit
      </Button>
      <Button variant="outlined" onClick={() => handle(todo._id)}>
        Delete
      </Button>
    </Card>
  );
};

export default ListCard;

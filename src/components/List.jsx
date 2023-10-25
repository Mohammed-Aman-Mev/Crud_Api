import React, { useEffect } from "react";
import ListCard from "./ListCard";
import { useDispatch, useSelector } from "react-redux";
// import { CircularProgress, Typography } from "@mui/material";
import { getAllTodos } from "../feature/todoSlice";

import { LinearProgress, Typography } from "@mui/material";

const List = () => {
  const dispatch = useDispatch();
  const { tododata, isLoading, isError } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <Typography variant="h2">ERROR</Typography>;
  }

  return (
    <ol>
      {tododata.map((todo) => (
        <ListCard key={todo._id} todo={todo} />
      ))}
    </ol>
  );
};

export default List;

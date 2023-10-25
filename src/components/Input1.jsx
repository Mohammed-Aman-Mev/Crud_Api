import { Box, Button, Card, CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostTodos, todoUpdate } from "../feature/todoSlice";

const Input1 = () => {
  const dispatch = useDispatch();

  const { edit } = useSelector((state) => state.todos);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const saveTodo = (e) => {
    e.preventDefault();
    const x = {
      // id: crypto.randomUUID(),
      title: title,
      description: description,
    };
    if (edit.isedit) {
      const updatedTodo = {
        _id: edit.data._id,
        title: title,
        description: description,
      };
      dispatch(todoUpdate(updatedTodo));
      
    } else {
      dispatch(PostTodos(x));
    }
    settitle("");
    setdescription("");
  };

  useEffect(() => {
    settitle(edit.data.title);
    setdescription(edit.data.description);
    // console.log(edit)
  }, [edit]);

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          padding: "10px",
          marginTop: "30px",
          marginLeft: "38%",
        }}
      >
        <form action="" onSubmit={(e) => saveTodo(e)}>
          <Box>
            <TextField
              fullWidth
              id="filled-basic"
              label="Enter your Title"
              variant="filled"
              value={title}
              required
              sx={{
                marginTop: "30px",
              }}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Enter your Description"
              variant="filled"
              required
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              sx={{
                marginTop: "30px",
              }}
            />

            <Button
              fullWidth
              sx={{ marginTop: "30px", background: "#5B0888" }}
              variant="contained"
              type="submit"
            >
              SAVE DATA
            </Button>
          </Box>
        </form>
      </Card>
    </>
  );
};

export default Input1;

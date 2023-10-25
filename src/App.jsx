import React from "react";
import Appbar from "./components/Appbar";

import Input1 from "./components/Input1";
import List from "./components/List";
import { CircularProgress } from "@mui/material";

const App = () => {
  return (
    <>
      <Appbar />

      <Input1 />
      <List />
    </>
  );
};

export default App;

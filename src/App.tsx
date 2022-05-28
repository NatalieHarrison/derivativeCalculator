import React from "react";
import logo from "./logo.svg";
import { Box, TextField, Button, Stack } from "@mui/material";
import { Evaluate } from "./components/Evaluate";
import { InputEquation } from "./components/InputEquation";

function App() {
  return (
    <div className="App">
      <Box>
        <Stack spacing={2} direction="row">
          <InputEquation></InputEquation>
          <Evaluate />
        </Stack>
      </Box>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import { Box, TextField, Button, Stack } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box>
        <Stack spacing={2} direction="row">
          <TextField id="equation" variant="outlined" />
          <Button variant="contained"> Evaluate </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default App;

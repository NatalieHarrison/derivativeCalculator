import { TextField, Button, Stack, Input } from "@mui/material";
import React, { useState } from "react";
import { create, all } from "mathjs";

export const Evaluate = () => {
  const math = create(all);

  const [input, setInput] = useState("");
  const handleClick = () => {
    math.evaluate(input);
  };
  return (
    <Stack spacing={2} direction="row">
      <TextField
        id="equation"
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleClick} variant="contained">
        Evaluate
      </Button>
    </Stack>
  );
};

import { TextField, Button, Stack, Box, Container } from "@mui/material";
import React, { useState } from "react";
import { create, all } from "mathjs";

export const Evaluate = () => {
  const math = create(all);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  return (
    <Box>
      <Box maxWidth="xs" sx={{ fontSize: 20 }}>
        {answer}
      </Box>
      <Stack spacing={2} direction="row">
        <TextField
          id="equation"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={() => {
            setAnswer(input + " = " + math.evaluate(input));
            setInput("");
          }}
          variant="contained"
        >
          Evaluate
        </Button>
      </Stack>
    </Box>
  );
};

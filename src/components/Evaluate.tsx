import { TextField, Button, Stack, Box, Container } from "@mui/material";
import React, { useState } from "react";
import { create, all } from "mathjs";

export const Evaluate = () => {
  const math = create(all);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const array: string[] = [];

  const [list, setList] = useState(array);

  function handleClick() {
    setAnswer(input + " = " + math.evaluate(input));
    setInput("");
    const newList = list.concat(answer);
    setList(newList);
    console.log(list);
  }
  return (
    <Box>
      <Box maxWidth="xs" sx={{ fontSize: 20 }}>
        {/* {answer} */}
        {list}
      </Box>
      <Stack spacing={2} direction="row">
        <TextField
          id="equation"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleClick} variant="contained">
          Evaluate
        </Button>
      </Stack>
    </Box>
  );
};

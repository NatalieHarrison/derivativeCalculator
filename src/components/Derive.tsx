import { TextField, Button, Stack, Box, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import { create, all } from "mathjs";


export const Derivative = () => {
    const math = create(all);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const [list, setList] = useState<string[]>([]);

  const handleClick = () => {
    try {
      if (input === "" || input === undefined || input === null) {
        throw new Error("missing");
      }
      const ans = input + "=" + math.derivative(input,'x').toString();
      const newList = [...list, ans];
      setAnswer(ans);
      setList(newList);
      setInput("");
  }
  catch (err: any) {
    console.log(err);
    switch (err.message) {
      case "missing":
        alert("Input is empty. Please enter an expression.");
        break;
      // case `Undefined symbol ${input}`:
      //   alert("Variables cannot be defined here.");
      //   break;
      // default:
      //   break;
    }
  }
}

  function ListItem(props: {
    value:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }) {
    return <li>{props.value}</li>;
  }

    return (
        <Box>
        <Box maxWidth="xs" sx={{ ml: 7, fontSize: 25 }}>
          <List>
            {list.map((lists) => (
              <ListItem key={lists.toString()} value={lists} />
            ))}
          </List>
        </Box>
        <Stack spacing={2} direction="row">
          <TextField
            id="equation"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={handleClick} variant="contained">
            Derive
          </Button>
        </Stack>
      </Box>

    );
}
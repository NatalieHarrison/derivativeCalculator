import { TextField, Button, Stack, Box } from "@mui/material";
import React, { useState } from "react";
import { create, all } from "mathjs";

export const Evaluate = () => {
  const math = create(all);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const [list, setList] = useState<string[]>([]);

  const handleClick = () => {
    try {
      if (input === "" || input === undefined || input === null) {
        throw new Error("missing");
      }
      console.log(math.evaluate(input));
      const ans = input + " = " + math.evaluate(input);
      const newList = [...list, ans];
      setAnswer(ans);
      setList(newList);
      setInput("");
    } catch (err: any) {
      console.log(err);
      switch (err.message) {
        case "missing":
          alert("Input is empty. Please enter an expression.");
          break;
        case `Undefined symbol ${input}`:
          alert("Variables cannot be defined here.");
          break;

        default:
          break;
      }

      // alert(err);
    }
    // if (input !== "") {
    //   const ans = input + " = " + math.evaluate(input);
    //   const newList = [...list, ans];
    //   setAnswer(ans);
    //   setList(newList);
    //   setInput("");
    // } else if (input === "") {
    //   try {
    //     alert("Input field is empty. Please enter an expression to evaluate");
    //   } catch (error) {
    //     alert("Please try again with a valid expression");
    //   }
    // } else if (math.evaluate(input) === undefined) {
    //   try {
    //     alert(
    //       "Input is undefined. Please try again with a different expression"
    //     );
    //   } catch (error) {
    //     alert("Please try again with a valid expression");
    //   }
    // }
  };

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
  function NumberList(props: { list: any }) {
    const list = props.list;
  }
  return (
    <Box>
      <Box maxWidth="xs" sx={{ fontSize: 20 }}>
        <ul>
          {list.map((lists) => (
            <ListItem key={lists.toString()} value={lists} />
          ))}
        </ul>
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

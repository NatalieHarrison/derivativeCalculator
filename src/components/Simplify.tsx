import { TextField, Button, Stack, Box, List, ButtonGroup} from "@mui/material";
import React, { useState } from "react";
import { create, all } from "mathjs";

export const Simplify = () => {
    const math = create(all);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const [list, setList] = useState<string[]>([]);


  const handleClick = () => {
    try {
      if (input === "" || input === undefined || input === null) {
        throw new Error("missing");
      }
      if (input.includes("π")){
        let input2 = input.replaceAll("π", "pi");
        console.log(input2)
        const ans = input + "=" + math.simplify(input2).toString();
        
        if (ans.includes("pi")){
          let ansAddPiSymbol = ans.replaceAll("pi","π" )


          const newList = [...list, ansAddPiSymbol];
          setAnswer(ansAddPiSymbol);
          setList(newList);
          setInput("");

        }
      }

      else{
        console.log(math.evaluate(input));
          const ans = input + " = " + math.simplify(input);
          const newList = [...list, ans];
          setAnswer(ans);
          setList(newList);
          setInput("");

        }
      
      // const ans = input + "=" + math.simplify(input).toString();
      // const newList = [...list, ans];
      // setAnswer(ans);
      // setList(newList);
      // setInput("");
     
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
            Evaluate
          </Button>
        </Stack>
        <ButtonGroup disableElevation variant="contained">
            <Button onClick = {() => setInput(input + "π")}
            
            sx = {{
              fontSize: 30
            }}>𝝅</Button>
            <Button sx = {{
              fontSize: 20
            }}>√k</Button>
        </ButtonGroup>
      </Box>

    );
}
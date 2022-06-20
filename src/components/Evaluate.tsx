import { TextField, Button, Stack, Box, List, ButtonGroup,  MenuItem, InputLabel, FormControl}  from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from "react";
import { create, all, add } from "mathjs";

export const Evaluate = () => {
  const math = create(all);

  const [input, setInput] = useState(""); //used to clear the input field after evaluate button is clicked
  const [list, setList] = useState<string[]>([]); //Used to create a list of user inputs 
  const [selectValue, setSelectValue] = React.useState(""); //used for button group: select component
  const [openInverse, setOpenInverse] = React.useState(false);

  //Used for button group: select component 
  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };

  const unHideInverse = () => {
    setOpenInverse((current) => !current);
  }

  const handleClick = () => {
    try {
      if (input === "" || input === undefined || input === null) {
        throw new Error("missing");
      }

      //If user clicks a button from button group 
      if (input.includes("π") || input.includes("√(") || input.includes("arc")){
        let pi = input.replaceAll("π", "pi") 
        let sqrt = pi.replaceAll("√" ,"sqrt")
        let arc = sqrt.replaceAll("arc", "a")
        const ans = input + " =" + math.evaluate(arc).toString();
        const newList = [...list, ans];
        setList(newList);
        setInput("");
      }

      //Apart of the button group- Select component items include: <=, <, >=, >
      if (input.includes("≤")){
        let input2 = input.replaceAll("≤" ,"<=");
        const ans = math.  evaluate(input2).toString();
        if (ans == "1"){
          var ansTrueFalse = input + " true";
          const newList = [...list, ansTrueFalse];
             
          setList(newList);
          setInput("");
        }
        else {
          var ansTrueFalse = input + " false";
          const newList = [...list, ansTrueFalse];
             
          setList(newList);
          setInput("");
        }
      }
      if (input.includes("≥")){
        let input2 = input.replaceAll("≥" ,">=");
        const ans = math.  evaluate(input2).toString();
        if (ans == "1"){
          var ansTrueFalse = input + " true";
          const newList = [...list, ansTrueFalse];
             
          setList(newList);
          setInput("");
        }
        else {
          var ansTrueFalse = input + " false";
          const newList = [...list, ansTrueFalse];
             
          setList(newList);
          setInput("");
        }
      }
      if (input.includes("=")){
        let input2 = input.replaceAll("=" ,"==");
        const ans = math.  evaluate(input2).toString();
        if (ans == "1"){
          var ansTrueFalse = input +  " true";
          const newList = [...list, ansTrueFalse];
             
          setList(newList);
          setInput("");
        }
        else {
          var ansTrueFalse = input +  " false";
          const newList = [...list, ansTrueFalse];
             
          setList(newList);
          setInput("");
        }
      }
      if (input.includes(">") ||input.includes("<") ){
        const ans = math.evaluate(input).toString();
        if (ans == "1"){
          var ansTrueFalse = input + " true";
          const newList = [...list, ansTrueFalse];
             
          setList(newList);
          setInput("");
        }
        else {
          var ansTrueFalse = input +  " false";
          const newList = [...list, ansTrueFalse];
             
          setList(newList);
          setInput("");
        }
      }

      //if user does not select any of the buttons->
      else{
        console.log(math.evaluate(input));
          const ans = input + " = " + math.evaluate(input);
          const newList = [...list, ans];
             
          setList(newList);
          setInput("");
        }

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
  function NumberList(props: { list: any }) {
    const list = props.list;
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
      
      <Stack>
      <ButtonGroup sx = {{mt:2}}disableElevation variant="contained">
            <Button 
            onClick = {() => setInput(input + "π")}
            sx = {{
              width: 62.5,
              fontSize: 30
            }}>𝝅</Button>
            <Button 
            onClick = {() => setInput(input + "√()")}
            sx = {{
              width: 62.5,
              fontSize: 20
            }}>√</Button>
            
            <Button 
            onClick = {() => setInput(input + "^")}
            sx = {{
              width: 62.5,
              fontSize: 20
            }}>^</Button>
            <FormControl sx={{ width: 50 }}> 
            <InputLabel>&lt;</InputLabel>
            
            <Select
              value={selectValue}
              label= "&lt;"
              onChange={handleChange}
              sx = {{height: 65, width: 62.5}}
            >
              
              <MenuItem value={'<'} onClick = {() => setInput(input + "<")}   > &lt; </MenuItem>

              <MenuItem value = {"≤"} onClick = {() => setInput(input + "≤")}  
              sx = {{
                fontSize: 20
              }}> ≤ </MenuItem>

              <MenuItem value = {">"} onClick = {() => setInput(input + ">")}
               sx = {{
              }}> &gt;</MenuItem>

              <MenuItem value = {"≥"} onClick = {() => setInput(input + "≥")}
              sx = {{
                fontSize: 20
              }}> ≥ </MenuItem>  
              <MenuItem value = {"="} onClick = {() => setInput(input + "=")}
               sx = {{
                fontSize: 20
              }}> = </MenuItem>
            </Select>
            </FormControl>
      </ButtonGroup>

      
      <ButtonGroup sx = {{mt:.2, width: 250}}disableElevation variant="contained">
        <Button onClick = {() => setInput(input + "cos()")}
          >cos</Button>

        <Button onClick = {() => setInput(input + "sin()")}
          >sin</Button>

        <Button onClick = {() => setInput(input + "tan()")}
          >tan</Button>

        <Button onClick = {unHideInverse}> Inverse </Button>
        </ButtonGroup>
        {openInverse && (
            <div>
              <ButtonGroup sx = {{mt:.2, width: 250}}disableElevation variant="contained">
              <Button onClick = {() => setInput(input + "arccos()")}
                >arccos</Button>

              <Button onClick = {() => setInput(input + "arcsin()")}
                >arcsin</Button>

              <Button onClick = {() => setInput(input + "arctan()")}
                >arctan</Button>
            </ButtonGroup>

            </div>
          )}

          {openInverse &&<Box/>}
      
      </Stack>
        
    </Box>
  );
};

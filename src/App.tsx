import React, {useState}from "react";
import { Box, Button, Stack, IconButton } from "@mui/material";
import { Evaluate } from "./components/Evaluate";
import { Simplify } from "./components/Simplify";
import { Derivative } from "./components/Derive";



import ClickAwayListener from '@mui/material/ClickAwayListener';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { SxProps } from '@mui/system';
import { SymbolKeyboard } from "./components/SymbolKeyboard";


function App() {
  const [showSimplify, setShowSimplify] = useState(false);
  const [showDerivative, setShowDerivative] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  
  const styles: SxProps = {
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };  

  const handleClick1 = () => {
    setOpen1((prev) => !prev);
  };

  const handleClickAway1 = () => {
    setOpen1(false);
  };  

  
  const derivativeClick = () => {
    setShowDerivative(current => !current);
  }
  const simplifyClick = () => {
    setShowSimplify(current => !current);
  }
  return (
    <div className="App">

      <Box>
        <Stack  spacing = {2}>
          <Evaluate></Evaluate> 

          <Stack direction = "row" spacing = {.5}>
          <div> 
          <Button variant = "outlined"
          onClick = {simplifyClick}>Simplify</Button>
          {showSimplify && (
            <div>
              <Simplify></Simplify>
            </div>
          )}

          {showSimplify &&<Box/>}
          </div>

          <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
              <IconButton type="button" onClick={handleClick}>
               <HelpOutlineIcon></HelpOutlineIcon>
              </IconButton>
              {open ? (
                <Box sx = {styles}>
                  Used for adding, subtracting, multiplying and dividing expressions with variables
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>

          </Stack>
          
          <Stack  direction = "row" spacing = {.5}>
          <div>
          <Button variant = "outlined" onClick = {derivativeClick}>Derivative</Button>
          <br></br>
          {showDerivative &&(
            <div>
              <Derivative></Derivative>
            </div>
          )}
         
          </div>

          <ClickAwayListener onClickAway={handleClickAway1}>
            <Box sx={{ position: 'relative' }}>
              <IconButton type="button" onClick={handleClick1}>
               <HelpOutlineIcon></HelpOutlineIcon>
              </IconButton>
              {open1 ? (
                <Box sx = {styles}>
                  Used for solving derivatives
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener> 
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default App;

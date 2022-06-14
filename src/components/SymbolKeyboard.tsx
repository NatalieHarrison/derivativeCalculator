import React from "react";
import { ButtonGroup, Button } from '@mui/material';

export const SymbolKeyboard = () => {
  return (
  <ButtonGroup disableElevation variant="contained">
    <Button sx = {{
      fontSize: 30
    }}>𝝅</Button>
    <Button sx = {{
      fontSize: 20
    }}>√x</Button>
</ButtonGroup>

  );
}
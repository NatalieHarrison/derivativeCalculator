import { Button } from "@mui/material";
import { InputEquation } from "./components/InputEquation";
const handleClick = () => {
  console.log("Hello World");
};
export const Evaluate = () => {
  return (
    <Button onClick={handleClick} variant="contained">
      Evaluate
    </Button>
  );
};

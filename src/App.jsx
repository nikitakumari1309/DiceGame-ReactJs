import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((currentValue) => !currentValue);
  };
 
  if(isGameStarted){
    return <GamePlay/>
 }
 else{
   return <StartGame toggle={toggleGamePlay}/>
 }
}

export default App;
import { useState } from "react"
import GameStart from "./components/GameStart"
import GamePlay from "./components/GamePlay";


function App() {
  const [isGameStarted , setIsGameStarted]  = useState(false);

  const toggleGamePaly = () =>{
    setIsGameStarted((prev) => !prev)
  };

  return (
    <>
     { isGameStarted ? <GamePlay/> :  <GameStart toggle = {toggleGamePaly} />}
    </>
  )
}

export default App

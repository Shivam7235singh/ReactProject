import NumberSelector from "./NumberSelector";
import { Button, OutLineButton } from "./styled/Button";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurentDice] = useState(1);
  const [error, setError] = useState("");
  const [ShowRules , setShowRules] = useState(false);

  const GenerateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roleDice = () => {
    if (!SelectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = GenerateRandomNumber(6, 1);
    setCurentDice((prev) => randomNumber);
    if (SelectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const ResetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className=" top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutLineButton onClick={ResetScore}>Reset</OutLineButton>
        <Button 
        onClick={() => setShowRules ((prev) => !prev)}
        >{ShowRules ? "Hide" : "Show"} Rules</Button>
      </div>
     {ShowRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 72px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btns {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

import styled from "styled-components"
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";
//this is my button component we can write it any where top and bottom
const Button = styled.button`
background-color:black;
color:white;
padding : 5px;
`;
function App() {
 //by clicking on play now we want move to another component
 
 const [isGameStarted,setisGameStarted]=useState(true);
 
 const toggleGamePlay=()=>{
  setisGameStarted((prev)=>!prev)
 };

 return (
    <>
      {
        isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay} />
      }
    </>
  )
}

export default App

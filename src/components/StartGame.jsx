import React from 'react'
import styled from 'styled-components';

const StartGame = ({toggle}) => {
  return (
   <Container>
    <div>
    <img src="/images/dices.png" alt="" />
    </div>
    <div className='content'>
      <h1>Dice Game</h1>
      <Button onClick={toggle}>Play Now</Button>
    </div>
   </Container>
  )
}

export default StartGame;

const Container = styled.div`
  max-width:1182px;
 display: flex;
 
 height: 100vh;
 margin: 0 auto;
 align-items: center;

 .content h1{
  font-size: 96px;
  font-weight: 700;
  white-space: nowrap;
 }
`;
const Button  = styled.button`
background: black;
color: white;
min-width: 220px;
height: 44px;
border-radius: 5px;
border: 1px solid transparent;
padding: 10px 18px;
cursor: pointer;
transition: 0.4 ease-in;
&:hover {
  background-color: white;
  border : 1px solid black;
  color: black;
  transition: 0.3s ease-in;
}
`;

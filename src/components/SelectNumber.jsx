import React, { useState } from 'react'
import styled from 'styled-components'
const SelectNumber = () => {
  const arrayNumber = [1,2,3,4,5,6];
  
  const [selectedNumber,setselectedNumber]=useState();
 // console.log(selectedNumber); i have checked that whenever i am clicking on number console p value is printing 
 //now i want that when i click on dice the bg colore should be solid black

  return (
        <div>
            {arrayNumber.map((value,i)=>(
                <Box 
                isSelected ={value ==selectedNumber}
                key={i} onClick={()=>setselectedNumber(value)}>{value}</Box>
            ))}
        </div>
  )
}

const Box = styled.div`
border: 1px solid black;
width: 72px;
height: 72px;
display: grid;
place-items:center;
font-weight: 700;
font-size: 24px;
background-color: ${(props) =>  {props.isSelected?"Black":"white"}};
`;
export default SelectNumber

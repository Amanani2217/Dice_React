import React from 'react'
import styled from 'styled-components'
const TotalScore = () => {
  return (
    <TotalScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </TotalScoreContainer>
  )
}

const TotalScoreContainer = styled.div`
   max-width: 200px;
   text-align: center;
   margin-left:-50px;
    h1{
        font-size: 50px;
        line-height: 00px;
    }
    p{
        font-weight: 500;
        font-size: 12px;
        line-height: 00px;
    }
`

export default TotalScore

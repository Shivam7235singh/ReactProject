import React from 'react'
import styled from "styled-components"

const App = () => {
  return (
    <MainContainer>
    <TopContainer>
      <div className='logo'>
        <img src="/logo.svg" alt="" />
      </div>
      <div className='search'>
      <input placeholder='search food..'/>
      </div>
    </TopContainer>
    </MainContainer>
  )
}

export default App

const MainContainer  = styled.div``;
const TopContainer  = styled.div``;
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { styled } from '@material-ui/styles';
import React from 'react'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
`

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlined/>
      </Arrow>
      <Arrow>
        <ArrowRightOutlined/>
      </Arrow>
    </Container> 
  )
}

export default Slider;
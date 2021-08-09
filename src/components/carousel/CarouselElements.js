import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`

export const Slide = styled.div`
  display: flex;
  width: 100%;
  height:340px;
  width: 670px;
  transition: transform 0.4s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px)`};

    img{
        width:100%;
        height: 100%;
    }


    @media all and (max-width:800px){
        height: 310px;
        width: 550px;
    }

    @media all and (max-width:600px){
        height: 280px;
        width: 470px;
    }

    @media all and (max-width:490px){
        height: 220px;
        width: 420px;
    }

    @media all and (max-width:440px){
        min-height: 200px;
        width: 100%;
    }

    @media all and (max-width:360px){
        height: 140px;
        width: 100%;
    }
            
`
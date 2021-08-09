import styled from 'styled-components'

export const Button = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items:center;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 0}px;
  right: ${props => props.side === 'next' && 0}px;
  height: 100%;
  width:40px;
  background-color: rgba(0,0,0,.3);
  transition:  .2s;

  &:hover{
    
    background-color: rgba(0,0,0,.4);
  }

  .icon{
    display:flex;
    color:white;
    font-size: 30px;
  }

`
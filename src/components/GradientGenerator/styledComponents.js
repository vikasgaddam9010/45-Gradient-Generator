import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(${props => props.gradienDirection});
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const DirectionButton = styled.button`
  width: 100px;
  background-color: ${props => props.bgColor};
  padding: 10px;
  border: 0px solid transparent;
  border-radius: 5px;
  margin-top: 30px;
`
export const FormsComnatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DivContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`
export const UlContainer = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-between;
`
export const Para = styled.p`
  color: #ededed;
`

export const Hone = styled.h1`
  color: #ededed;
`

export const Input = styled.input`
background-color: transparent};
border: none;
border-radius: 10px;
outline: none;
cursor: pointer;
`

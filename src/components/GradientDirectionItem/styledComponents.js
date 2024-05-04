import styled from 'styled-components'

export const DirectionButton = styled.button`
  width: 100px;
  background-color: ${props => props.outline && '#ffffff'};
  opacity: ${props => (props.outline ? 1 : 0.5)};
  padding: 10px;
  border: 0px solid transparent;
  border-radius: 5px;
  margin-top: 30px;
`
export const List = styled.li`
  padding: 0px;
  list-style-type: none;
`

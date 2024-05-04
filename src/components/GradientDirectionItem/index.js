import {DirectionButton, List} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, getDirectionId, isActive} = props

  const clikToChangeColor = event => {
    getDirectionId(event.target.value)
  }

  return (
    <List>
      <DirectionButton
        outline={isActive}
        onClick={clikToChangeColor}
        value={each.value}
      >
        {each.displayText}
      </DirectionButton>
    </List>
  )
}

export default GradientDirectionItem

import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  DirectionButton,
  FormsComnatiner,
  DivContainer,
  UlContainer,
  Para,
  Input,
  Hone,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    dirrection: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    gradienDirection: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onSubmitForm = () => {
    const {dirrection, colorOne, colorTwo} = this.state
    this.setState({
      gradienDirection: `to ${dirrection}, ${colorOne}, ${colorTwo}`,
    })
  }

  colorChangeOne = event => {
    this.setState({colorOne: event.target.value})
  }

  getDirectionId = id => {
    this.setState({dirrection: id})
  }

  colorChangeTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  render() {
    const {gradienDirection, colorOne, colorTwo, dirrection} = this.state

    console.log(dirrection)

    return (
      <BgContainer
        data-testid="gradientGenerator"
        gradienDirection={gradienDirection}
      >
        <Hone>Generate a CSS Color Gradient</Hone>
        <Para>Choose Direction</Para>
        <UlContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              isActive={each.value === dirrection}
              getDirectionId={this.getDirectionId}
              key={each.directionId}
              each={each}
            />
          ))}
        </UlContainer>
        <Para>Pick the Colors</Para>
        <FormsComnatiner>
          <DivContainer>
            <div>
              <Para>{colorOne}</Para>
              <Input
                bgColor={colorOne}
                value={colorOne}
                onChange={this.colorChangeOne}
                type="color"
              />
            </div>

            <div>
              <Para>{colorTwo}</Para>
              <Input
                bgColor={colorTwo}
                value={colorTwo}
                onChange={this.colorChangeTwo}
                type="color"
              />
            </div>
          </DivContainer>

          <DirectionButton onClick={this.onSubmitForm} bgColor="#00c9b7">
            Generate
          </DirectionButton>
        </FormsComnatiner>
      </BgContainer>
    )
  }
}

export default GradientGenerator

import styled from 'styled-components'
import { StyledPrimaryInput } from 'components/inputs'
import FloatingBox from 'components/FloatingBox'
import {StyledDropDownArrow} from '../styled'

import { black, grayLightest, grayLight, gray, grayLighter, red, shadowGray, green, blue, blueActive } from 'styles/colors'
import TextButton from 'components/buttons/TextButton'

export const StyledCardPropertyName = styled.span`
  font-weight: bold;
  word-break: ${props => props.focused ? 'break-word' : 'normal'};
  color: ${black};
  opacity: 1;
  padding-right: 5px;
`
export const StyledProperty = styled.div`
  cursor: ${props => props.editEnabled ? props.isDragging ? 'grabbing' : 'grab' : 'default'};
  background-color: ${props => props.isDragPreview ? grayLight : 'transparent'};
  border-radius: 3px;
  z-index: 1000;
`
export const StyledDropZone = styled.div`
  background-color: ${grayLightest};
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px dashed #666e7c;
  overflow: hidden;
  ${props => {
    if (props.isOver) {
      return `
        border: 1px dashed white;
        color: white;
        background-color: ${gray};
      `
    }
  }}
`
export const StyledMessage = styled.div`
  background-color: ${props => props.error ? red : green};
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  color: white;
`

export const StyledEditable = styled.span`
  cursor: ${props => props.editEnabled ? 'text' : 'default'};
  padding-left: 0.25em;
`
export const StyledEditableInput = styled.input`
  width: ${props => props.fullWidth ? '80%' : '40%'};
  font-family : inherit;
  font-size : inherit;
  color: inherit;
  border: none;
`

export const StyledTypeIndicator = styled.span`
    font-size: 0.7em;
    color: ${black};
    padding-right: 3px;
    opacity: 0.5;
`

export const StyledPropertyKeyPickerLine = styled(FloatingBox)`
  cursor: default;
  line-height: 2.5em;
  width: 12em;
  position: fixed;
  z-index: 10;
`
export const StyledPropertyKeyPickerInput = styled(StyledPrimaryInput)`
  line-height: 2.5em;
  font-size: 1em;
  width: 8em;
`

export const StyledPropertyKeySuggestions = styled.div`
  overflow: auto;
  max-height: 20em;
  width: 10em;
`
export const StyledPropertyKeySuggestion = styled.div`
  color: #30333a;
  font-weight: ${props => props.highlighted ? 'bold' : 'normal'};
  padding: 0.5em;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const StyledTriangleContainer = styled.div`
  position: relative;
  height: 1em;
`

export const StyledAddPropertyDropDownArrow = styled(StyledDropDownArrow)`
  top: -1em;
  left: 4.25em;
  &:after {
    border: none;
    box-shadow: 0 0 7px ${shadowGray};
  }
`
export const StyledSearchIcon = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  margin: 0 0.5em 0 1em;
  fill: ${grayLighter};
`
export const StyledInputWrap = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  border-bottom-color: ${grayLight};
  border-bottom-style: solid;
  border-bottom-width: 0.1em;
`

export const StyledAddPropertyButton = styled(TextButton)`
  color: ${blue};
  font-size: 1em;
  height: 1.5em;
  line-height: 1.5em;
  
  &:hover,
  &:focus,
  &:active {
    color: ${blueActive}
  }
`

export const StyledNewPropertyContainer = styled.div`
  padding-left: 1.625em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.6em;
`

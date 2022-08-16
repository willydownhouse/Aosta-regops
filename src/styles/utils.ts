import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  height: 100vh;
  position: relative;
`;

export const FormGrid = styled.div`
  /* height: 95%; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4fr 3fr;

  @media (max-width: 600px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr 0.5fr 0.5fr 1fr 0.5fr 4fr 4fr;
  }
`;

type FlexWrapperProps = {
  $width?: number;
  $height?: number;
  $justify?: string;
  $align?: string;
  $direction?: string;
  $pos?: boolean;
  $padding?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  position: ${props => props.$pos && 'relative'};
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  align-items: ${props => props.$align || 'center'};
  width: ${props => (props.$width ? `${props.$width}%` : '100%')};
  height: ${props => props.$height || '100%'};
  justify-content: ${props => props.$justify || 'start'};
  padding: ${props => props.$padding || 'none'};
`;

export const MyInputWrap = styled.div`
  &.grid-first {
    background-color: green;
    grid-column: 1/4;
  }

  &.small-screen-padding {
    padding-right: 0.5rem;
  }
`;

type TextInputProps = {
  $error?: any;
  $mb?: number;
  $ml?: number;
  $mr?: number;
  $width?: number;
};

export const TextInput = styled.input<TextInputProps>`
  width: ${props => (props.theme.screenWidth < 600 ? '100%' : '')};
  height: 3rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0.5rem;
  outline: none;
  font-size: ${props => props.theme.input.font_size};
  border: ${props => `1px solid ${props.$error ? 'red' : '#999'}`};
  border-radius: 3px;
  margin-bottom: ${props => props.$mb || 'none'};
  margin-left: ${props => props.$ml || 'none'};
  margin-right: ${props => props.$mr || '1rem'};
`;

export const InputLabel = styled.label`
  font-size: ${props => props.theme.input.label_font_size};
  display: block;
  margin-bottom: 0.5rem;
  margin-top: ${props => (props.theme.screenWidth < 600 ? '1rem' : '')};
`;

export const ErrorText = styled.p`
  color: red;
`;

type TextAreaProps = {
  $error: string | undefined;
};

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 100%;
  font-family: ${props => props.theme.font.base};
  font-size: ${props => props.theme.input.font_size};
  padding: 0.5rem;
  border: ${props => `1px solid ${props.$error ? 'red' : '#999'}`};
  margin-bottom: 1rem;
`;

export const HoverP = styled.p`
  &:hover ~ .hover {
    opacity: 1;
  }
`;

export const TestHoverBox = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #044157;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  opacity: 0;
  transition: all 0.5s ease;
`;

export const TestHoverInfo = styled.div`
  span {
    margin-right: 1rem;
    font-size: 1.4rem;
  }
`;

import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  height: 100vh;
  position: relative;
`;

export const FormGrid = styled.div`
  height: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 3fr;
  /* grid-gap: 1rem; */

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

type FlexWrapperProps = {
  $width?: number;
  $height?: number;
  $justify?: string;
  $align?: string;
  $direction?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  align-items: ${props => props.$align || 'center'};
  width: ${props => (props.$width ? `${props.$width}%` : '100%')};
  height: ${props => props.$height || '100%'};
  justify-content: ${props => props.$justify || 'start'};
`;

export const MyInputWrap = styled.div`
  &.grid-first {
    background-color: green;
    grid-column: 1/4;
  }
`;

type TextInputProps = {
  $error?: any;
  $mb?: number;
  $ml?: number;
  $mr?: number;
};

export const TextInput = styled.input<TextInputProps>`
  height: 3rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0.5rem;
  outline: none;
  font-size: 1.4rem;
  border: ${props => `1px solid ${props.$error ? 'red' : '#999'}`};
  border-radius: 3px;
  margin-bottom: ${props => props.$mb || 'none'};
  margin-left: ${props => props.$ml || 'none'};
  margin-right: ${props => props.$mr || '1rem'};
`;

export const InputLabel = styled.label`
  font-size: 1.4rem;
  display: block;
  margin-bottom: 0.5rem;
`;

export const ErrorText = styled.p`
  color: red;
`;

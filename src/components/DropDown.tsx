import React from 'react';
import { FlexWrapper, InputLabel, TextInput } from '../styles/utils';

type DropDownProps = {
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.FocusEvent) => void;
  options: string[];
};

function DropDown({ label, onChange, options, name }: DropDownProps) {
  return (
    <FlexWrapper $direction="column" $align="start">
      <InputLabel>{label}</InputLabel>
      <TextInput onChange={onChange} name={name} as="select">
        {options.map(el => (
          <option key={el}>{el}</option>
        ))}
      </TextInput>
    </FlexWrapper>
  );
}

export default DropDown;

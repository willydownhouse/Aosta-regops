import React from 'react';
import { ErrorText, FlexWrapper, InputLabel, TextInput } from '../styles/utils';

type DropDownProps = {
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.FocusEvent) => void;
  options: string[] | number[];
  touched: boolean | undefined;
  error: string | undefined;
  placeholder?: string;
};

function DropDown({
  label,
  onChange,
  options,
  name,
  error,
  touched,
  placeholder,
}: DropDownProps) {
  return (
    <FlexWrapper $direction="column" $align="start">
      <InputLabel>{label}</InputLabel>
      <TextInput onChange={onChange} name={name} as="select">
        <option>{placeholder}</option>
        {options.map(el => (
          <option key={el}>{el}</option>
        ))}
      </TextInput>
      {touched && error ? <ErrorText>{`${error}`}</ErrorText> : null}
    </FlexWrapper>
  );
}

export default DropDown;

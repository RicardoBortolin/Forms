import React from 'react';
import * as S from '../styles/InputStyles';
import {TextInputProps} from 'react-native';

interface InputText extends TextInputProps {
  label: string;
}

const Input = ({
  label,
  placeholder,
  onChangeText,
  onBlur,
  value,
}: InputText) => {
  return (
    <S.InputView>
      <S.InputLabel>
        {label}
        <S.Required>*</S.Required>
      </S.InputLabel>
      <S.InputArea
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
      />
    </S.InputView>
  );
};

export default Input;

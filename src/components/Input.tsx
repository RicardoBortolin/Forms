import React from 'react';
import * as S from '../styles/InputStyles';
import {TextInputProps} from 'react-native';

interface InputText extends TextInputProps {
  label: string;
}

const Input = ({label, placeholder}: InputText) => {
  return (
    <S.InputView>
      <S.InputLabel>
        {label}
        <S.Required>*</S.Required>
      </S.InputLabel>
      <S.InputArea placeholder={placeholder} />
    </S.InputView>
  );
};

export default Input;

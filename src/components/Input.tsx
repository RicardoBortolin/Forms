import React from 'react';
import * as S from '../styles/InputStyles';
import {TextInputProps} from 'react-native';

interface InputText extends TextInputProps {
  label: string;
}

const Input = ({label, ...rest}: InputText) => {
  return (
    <S.InputView>
      <S.InputLabel>
        {label}
        <S.Required>*</S.Required>
      </S.InputLabel>
      <S.InputArea {...rest} />
    </S.InputView>
  );
};

export default Input;

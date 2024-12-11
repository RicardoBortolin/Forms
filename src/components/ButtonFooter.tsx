import React from 'react';
import * as S from '../styles/ButtonStyles';
import {TouchableOpacityProps} from 'react-native';

interface Button extends TouchableOpacityProps {}

const ButtonFooter = ({onPress}: Button) => {
  return (
    <S.ButtonContainer>
      <S.Button onPress={onPress}>
        <S.ButtonText>Confirm and continue</S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  );
};

export default ButtonFooter;

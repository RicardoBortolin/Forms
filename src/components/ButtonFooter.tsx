import React from 'react';
import * as S from '../styles/ButtonStyles';
import {TouchableOpacityProps} from 'react-native';

const ButtonFooter: React.FC<TouchableOpacityProps> = ({onPress}) => {
  return (
    <S.ButtonContainer>
      <S.Button onPress={onPress}>
        <S.ButtonText>Confirm and continue</S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  );
};

export default ButtonFooter;

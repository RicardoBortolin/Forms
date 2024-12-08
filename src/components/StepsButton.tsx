import React from 'react';
import * as S from '../styles/StepsStyles';

interface Button {
  label: number;
  name: string;
}

const StepsButton = ({label, name}: Button) => {
  return (
    <S.StepsButton onPress={() => console.log({label, name})}>
      <S.LabelBackground>
        <S.ButtonLabelText>{label}</S.ButtonLabelText>
      </S.LabelBackground>
      <S.ButtonText>{name}</S.ButtonText>
    </S.StepsButton>
  );
};

export default StepsButton;

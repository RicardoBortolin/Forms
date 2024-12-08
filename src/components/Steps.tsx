import React from 'react';
import * as S from '../styles/StepsStyles';
import StepsButton from './StepsButton';

const Steps = () => {
  return (
    <S.Container>
      <StepsButton label={1} name={'Shipping'} />
      <S.Line />
      <StepsButton label={2} name={'Payment'} />
      <S.Line />
      <StepsButton label={3} name={'Review'} />
    </S.Container>
  );
};

export default Steps;

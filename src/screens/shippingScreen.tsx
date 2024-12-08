import React from 'react';
import Header from '../components/Header';
import * as S from '../styles/HeaderStyles';
import Steps from '../components/Steps';

const ShippingScreen = () => {
  return (
    <S.Container>
      <Header />
      <Steps />
    </S.Container>
  );
};

export default ShippingScreen;

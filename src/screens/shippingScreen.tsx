import React from 'react';
import Header from '../components/Header';
import * as S from '../styles/HeaderStyles';
import Steps from '../components/Steps';
import InputContainer from '../components/InputContainer';
import Footer from '../components/Footer';

const ShippingScreen = () => {
  return (
    <S.Container>
      <Header />
      <Steps />
      <InputContainer />
      <Footer />
    </S.Container>
  );
};

export default ShippingScreen;

import React from 'react';
import Header from '../components/Header';
import * as S from '../styles/HeaderStyles';
import Steps from '../components/Steps';
import InputContainer from '../components/InputContainer';
import Footer from '../components/Footer';
import {Text} from 'react-native';

const ShippingScreen = () => {
  return (
    <S.Container>
      <Header />
      <Steps />
      <InputContainer />
      <Footer />
      <Text>OI</Text>
    </S.Container>
  );
};

export default ShippingScreen;

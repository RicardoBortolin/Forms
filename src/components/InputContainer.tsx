import {View} from 'react-native';
import React from 'react';
import Input from './Input';
import * as S from '../styles/InputStyles';

const InputContainer = () => {
  return (
    <View>
      <S.Title>Enter your shipping address</S.Title>
      <Input label="County" placeholder="Add your Country" />
      <Input label="Full name" placeholder="Add your full name" />
      <Input label="Street adress" placeholder="Add your street address " />
      <Input label="Other" placeholder="Add a complement" />
    </View>
  );
};

export default InputContainer;

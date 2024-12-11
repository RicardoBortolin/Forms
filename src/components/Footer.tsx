import React from 'react';
import ButtonFooter from './ButtonFooter';
import * as S from '../styles/FooterStyles';

const Footer = ({onSubmit}) => {
  return (
    <S.FooterContainer>
      <ButtonFooter onPress={onSubmit} />
    </S.FooterContainer>
  );
};

export default Footer;

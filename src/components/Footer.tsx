import React from 'react';
import ButtonFooter from './ButtonFooter';
import * as S from '../styles/FooterStyles';

interface FooterProps {
  onSubmit: () => void;
}

const Footer = ({onSubmit}: FooterProps) => {
  return (
    <S.FooterContainer>
      <ButtonFooter onPress={onSubmit} />
    </S.FooterContainer>
  );
};

export default Footer;

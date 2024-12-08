import React from 'react';
import * as S from '../styles/HeaderStyles';

const Header = () => {
  return (
    <S.Header>
      <S.Cancel>
        <S.CancelText>Cancel</S.CancelText>
      </S.Cancel>
      <S.TextHeader>Checkout</S.TextHeader>
    </S.Header>
  );
};

export default Header;

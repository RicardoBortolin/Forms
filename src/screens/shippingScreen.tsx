import { View, Text } from 'react-native'
import React from 'react'
import * as S from '../styles/shippingStyles'

const shippingScreen = () => {
  return (
    <S.Header>
        <S.Cancel>
          <S.CancelText>
              Cancel
          </S.CancelText>
        </S.Cancel>
        <S.TextHeader>
          Checkout
        </S.TextHeader>
    </S.Header>
  )
}

export default shippingScreen
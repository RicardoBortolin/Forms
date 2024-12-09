import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  background-color: #060606;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
`;

export const Cancel = styled.TouchableOpacity`
  position: absolute;
  font-family: 'Inter';
  left: 20px;
`;

export const CancelText = styled.Text`
  color: #adafbc;
  font-weight: bold;
  font-size: 17px;
`;

export const TextHeader = styled.Text`
  color: #f9f9f9;
  font-size: 25px;
  font-family: Inter-Bold;
  position: absolute;
  left: 150px;
`;

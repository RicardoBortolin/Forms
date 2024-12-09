import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f9f9f9;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 10px;
  border-bottom-width: 1px;
  border-color: #ececec;
`;

export const StepsButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ButtonLabelText = styled.Text`
  font-size: 16px;
  align-items: center;
  color: #fff;
  text-align: center;
  margin-top: 6px;
  font-family: Inter-Regular;
`;

export const LabelBackground = styled.View`
  background-color: #0c0d0d;
  height: 35px;
  width: 35px;
  border-radius: 100px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  font-family: Inter-Regular;
`;

export const Line = styled.View`
  width: 20px;
  height: 3px;
  background-color: #e8e9e9;
  margin-top: 40px;
`;

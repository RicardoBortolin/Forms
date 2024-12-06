import styled from "styled-components/native";

export const  Header = styled.View `
    background-color: #060606;
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:35px;
`;

export const Cancel = styled.TouchableOpacity`
    position:absolute;
    left: 20px;
`;

export const CancelText = styled.Text`
    color: #ADAFBC;
    font-weight:bold;
    font-size:17px;
`;


export const TextHeader = styled.Text`
    color: #F9F9F9;
    font-size:25;
    font-family: 'Inter-Bold';
    position:absolute;
    left:43%;
    
`;
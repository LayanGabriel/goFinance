<<<<<<< HEAD
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionsTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const CategorySelect = styled.View`
  width: 100%;
`;

export const RegisterButton = styled.View`
  margin-top: 20px;
`;
=======
import styled from "styled-components/native"

import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(120)}px;
    align-items: center;
    padding-bottom: 20px;
    font-family:${({ theme })=>theme.fonts.bold};

`

export const Title = styled.Text`
    margin-top: 60px;
    align-items: center;
    font-family:${({ theme }) => theme.fonts.regular};
    color:${({ theme }) => theme.colors.shape};
    font-size: ${({ theme }) =>theme.fontSize.xlarge};  
`
export const Form = styled.View`
    flex:1;
    width: 100%;
    padding: 24px;
`
>>>>>>> de2389da16985d982dcda18469ae88c41674069e

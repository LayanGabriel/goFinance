import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

interface TypeProps {
    type: 'up' | 'down' | 'total'
};

export const Container = styled.View< TypeProps > `
        background-color: ${({ theme, type }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
        width: ${RFValue(300)}px;
        border-radius: ${({ theme }) => theme.borderRadius.large}px;
        padding: 20px 23px;
        padding-bottom: ${RFValue(42)}px;
        margin-bottom: ${({ theme }) => theme.spacing.small};
    `

export const Header = styled.View`
        flex-direction: column;
        justify-content: space-between;
        align-itens: center;

    `
export const Title = styled.Text`
        font-size: ${({ theme }) => theme.fontSize.small}px;
        font-family: ${({ theme }) => theme.fonts.regular};
        color: ${({ theme, type }) =>  type === 'total' ? theme.colors.shape : theme.colors.text};
    `

export const Footer = styled.View``

export const Amount = styled.Text < TypeProps >`
        font-size: ${({ theme }) => theme.fontSize.xxlarge}px;
        font-family: ${({ theme }) => theme.fonts.medium};
        margin-top: ${({ theme }) => theme.spacing.xlarge};
        color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text};
    `
export const LastTransaction = styled.Text`
        font-size: ${({ theme }) => theme.fontSize.small}px;
        font-family: ${({ theme }) => theme.fonts.regular};       
        color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_light};
    `
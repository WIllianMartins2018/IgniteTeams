import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import theme from "../../theme";

export type FilterStyleProps = {
    isActive?: boolean;
};

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
    ${({ isActive }) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `};

    border-radius: 4px;
    margin-top: 12px;
    margin-right: 12px;

    height: 38px;
    width: 80px;

    align-items: center;
    justify-content: center;
`;


export const Title = styled.Text`
    text-transform: uppercase;

  ${({ }) => css`
       font-size: ${theme.FONT_SIZE.SM}px;
       color: ${theme.COLORS.WHITE};
    `}; 
`;
import styled, { css } from "styled-components/native";
import theme from "../../theme";
import { User } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({}) => theme.COLORS.GRAY_500};

    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;
  font-size: ${({}) => theme.FONT_SIZE.MD}px;
  color: ${({}) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(User).attrs(({}) => ({
    size: 24,
    color: theme.COLORS.GRAY_200,
}))`
    margin-left: 16px;
    margin-right: 4px;
    
`;
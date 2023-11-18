import styled from "styled-components/native";
import theme from "../../theme";


export const Container = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    text-align: center;

    font-size: ${({t}) => theme.FONT_SIZE.SM}px;
    color: ${({t}) => theme.COLORS.GRAY_300};
`;
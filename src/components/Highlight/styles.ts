import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;


export const Title = styled.Text`
  text-align: center;

  font-size: ${({t}) => theme.FONT_SIZE.XL}px;
  color: ${({t}) => theme.COLORS.WHITE};

`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${({t}) => theme.FONT_SIZE.MD}px;
  color: ${({t}) => theme.COLORS.GRAY_300};

`;
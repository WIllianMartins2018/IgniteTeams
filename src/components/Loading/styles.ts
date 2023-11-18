import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex : 1;
  justify-content : center;
  align-items: center;

  background-color: ${({ t }) => theme.COLORS.GRAY_600};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ t }) => ({
  color: theme.COLORS.GREEN_700
}))`

`;
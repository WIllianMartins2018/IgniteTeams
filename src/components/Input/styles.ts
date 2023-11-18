import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled(TextInput)`
    flex: 1;

    min-height : 56px;
    max-height : 56px;

    background-color: ${({t}) => theme.COLORS.GRAY_700};
    color: ${({t}) => theme.COLORS.WHITE};

    border-radius: 6px;
    padding: 16px;

    font-size:  ${({t}) => theme.FONT_SIZE.LG}px;
`;
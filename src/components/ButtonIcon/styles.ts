import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import theme from "../../theme";
import {  Plus, UserMinus } from 'phosphor-react-native';


export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;
`;

export const IconPlus = styled(Plus).attrs<Props>(({type}) => ({
    size: 24,
    color: theme.COLORS.GREEN_700
}))``;


export const IconRemove = styled(UserMinus).attrs<Props>(({type}) => ({
    size: 24,
    color: theme.COLORS.RED
}))``;
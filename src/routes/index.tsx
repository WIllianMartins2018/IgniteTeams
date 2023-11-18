import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes';
import {  View } from 'react-native';
import { useTheme } from 'styled-components';

export function Routes() {
    const { COLORS } = useTheme();
    return (
        <View style={{flex: 1, backgroundColor: COLORS.GRAY_600}}> 
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>

        // INSERÇÃO DESSA VIEW FOI PARA REMOVER O GLITCH DE TELA (UMA ANIMAÇÃO COMO SE FOSSE UM FLASH)
        // PESSOALMENTE CONTORNEI ESSA PROPRIEDADE COLOCANDO UMA ANIMATION NO APP.ROUTES.TSX --> animation:'slide_from_right'
    );
}
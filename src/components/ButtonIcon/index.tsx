import { TouchableOpacityProps } from "react-native";
import { Container, IconPlus, IconRemove } from "./styles";


type Props = TouchableOpacityProps & {
    isAdd?: boolean
}

export function ButtonIcon({isAdd = true, ...rest } : Props) {
    return(
        <Container {...rest}>
            { isAdd ? 
                <IconPlus /> :
                <IconRemove />
            }
        </Container>
    );
}
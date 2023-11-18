import { ButtonIcon } from "../ButtonIcon";
import { Container, Icon, Name } from "./styles";

type Props = {
    name: string;
    onRemove: () => void;
}

export function PlayerCard({name , onRemove} : Props) {
    return(
        <Container>
            <Icon />
            <Name>
                {name}
            </Name>
            <ButtonIcon 
                isAdd={false}
                onPress={onRemove}
            />
        </Container>
    );
}
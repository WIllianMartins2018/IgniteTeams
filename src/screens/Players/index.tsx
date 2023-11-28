import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { useRoute } from '@react-navigation/native';

type RouteParams = {
    group: string;
}

export function Players() {
    const route = useRoute();
    const [team, setTeam] = useState<string>('');
    const [players, setPlayers] = useState<string[]>([]);
    const { group } = route.params as RouteParams;
    
    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title={group}
                subtitle="Adcione a Galera e Separe os times"
            />
            <Form>
                <Input
                    placeholder="Nome Da Pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon />
            </Form>

            <HeaderList>

                <FlatList

                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                
                {/* <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers> */}
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <ListEmpty 
                        message="Que tal Cadastrar o Primeiro Player?"
                    />    
                )}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length == 0 && {flex: 1}
                ]}   
            />

            <Button 
                title="REMOVER TURMA"
                type="SECONDARY"
            />

        </Container>
    );
}
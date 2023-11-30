import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";
import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { useRoute } from '@react-navigation/native';
import { AppError } from "../../utils/AppError";
import { PlayerStorageDTO } from "../../storage/player/PlayerStorageDTO";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { playersGetByGroup } from "../../storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "../../storage/player/playersGetByGroupAndTeam";
import { playerRemoveGroup } from "../../storage/player/playerRemoveGroup";

type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const route = useRoute();
  const [team, setTeam] = useState<string>('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Novo Player", "INFORME O NOME DA PESSOA.");
    }

    const newPLayer : PlayerStorageDTO = {
      name: newPlayerName,
      team
    }

    try {
      await playerAddByGroup(newPLayer, group);

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Player', error.message);
      }
      else {
        Alert.alert('Novo Player', 'Não Foi possível Criar o Novo Player');
        console.log(error);
      }
    }
  }

  async function handleRemovePlayer(player: PlayerStorageDTO) {
    try {
      await playerRemoveGroup(player, group);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      fetchPlayersByTeam();
      
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Pessoas", "Não foi possível carregar as pessoas do time")
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

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
          onChangeText={setNewPlayerName}
        />

        <ButtonIcon
          onPress={handleAddPlayer}
        />
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
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => {handleRemovePlayer(item)}}
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
          players.length == 0 && { flex: 1 }
        ]}
      />

      <Button
        title="REMOVER TURMA"
        type="SECONDARY"
      />

    </Container>
  );
}
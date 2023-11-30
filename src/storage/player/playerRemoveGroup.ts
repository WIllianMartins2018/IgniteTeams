import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";
import { AppError } from "../../utils/AppError";


export async function playerRemoveGroup(playerRemove: PlayerStorageDTO, group: string) {
    try {
        const storedPlayers = await playersGetByGroup(group);

        const newStoredPlayers = storedPlayers.filter(player => player.name !== playerRemove.name);

        const storage = JSON.stringify([...newStoredPlayers]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

    }
    catch (error) {
        throw (error);
    }
}
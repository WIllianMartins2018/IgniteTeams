import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";


export async function groupRemoveByName(groupDeleted: string) {
    try {

        const storagedGroups = await groupsGetAll();

        const newStoredGroups = storagedGroups.filter(group => group !== groupDeleted);

        const storage = JSON.stringify([...newStoredGroups]);

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);

    } catch (error) {
        throw error;
    }

}
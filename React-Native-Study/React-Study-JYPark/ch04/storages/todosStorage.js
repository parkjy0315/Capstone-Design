import AsyncStorageLib from "@react-native-async-storage/async-storage";

const key = 'todos';

const todosStorage = {
    async get() {
        try {
            const rawTodos = await AsyncStorageLib.getItem(key);

            if(!rawTodos) {
                throw new Error('No saved todos');
            }

            const savedTodos = JSON.parse(rawTodos);
            return savedTodos;
        } catch(e) {
            throw new Error('Failed to load todos');
        }
    },
    async set(data) {
        try {
            await AsyncStorageLib.setItem(key, JSON.stringify(data));
        } catch(e) {
            throw new Error('Failed to save todos');
        }
    }
}

export default todosStorage;
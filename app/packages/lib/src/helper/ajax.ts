import axios from 'axios';

export async function get<T>(uri: string): Promise<T> {
    try {
        const response = await axios.get(uri);
        return response.data;
    } catch (e) {
        throw { data: e?.response?.data, status: e?.response?.status };
    }
}

export async function post<T, TData>(uri: string, data: TData): Promise<T> {
    try {
        const response = await axios.post(uri, data);
        return response.data;
    } catch (e) {
        throw e?.response?.data;
    }
}

export async function remove<T>(uri: string): Promise<T> {
    try {
        const response = await axios.delete(uri);
        return response.data;
    } catch (e) {
        throw e?.response?.data;
    }
}
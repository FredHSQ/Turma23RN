import axios, { AxiosResponse } from "axios";

const apiMagicItems = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/2014/'
});

export interface MagicItemProps {
    index: string,
    name: string,
    url: string
}

interface MagicItemResponse {
    count: number,
    results: MagicItemProps[]
}

export function getMagicItems(): Promise<AxiosResponse<MagicItemResponse, any>> {
    const url = 'magic-items';

    return apiMagicItems.get(url);
}
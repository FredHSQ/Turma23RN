import axios, { AxiosResponse } from "axios";

const apiMagicItems = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/2014/'
});

export interface MagicItemProps {
    index: string,
    name: string,
    url?: string
}

interface MagicItemResponse {
    count: number,
    results: MagicItemProps[]
}

export function getMagicItems(): Promise<AxiosResponse<MagicItemResponse, any>> {
    const url = 'magic-items';

    return apiMagicItems.get(url);
}

export interface getMagicItemDetailsResponse {
	index: string;
	name: string;
	equipment_category: EquipmentCategory;
	rarity: Rarity;
	variants?: any[] | null;
	variant: boolean;
	desc?: (string)[] | null;
}

interface EquipmentCategory {
	index: string;
	name: string;
	url: string;
}

interface Rarity {
	name: string;
}

export function getMagicItemsDetails(index: string): Promise<AxiosResponse<getMagicItemDetailsResponse, any>> {
    const url = 'magic-items/' + index;

    return apiMagicItems.get(url);
}
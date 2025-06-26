import { useState, createContext, useEffect } from "react"
import { MagicItemProps } from "../services/MagicItensApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CartProviderProps {
    children: React.ReactNode
}

interface CartContextProps {
    cartItems: MagicItemProps[],
    addItemToCart: (magicItem: MagicItemProps) => void
}

export const CartContext = createContext<CartContextProps>({
    cartItems: [],
    addItemToCart: () => {}
});

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<MagicItemProps[]>([]);

    useEffect(()=>{
        getData()
            .then(item=>setCartItems(item))
            .catch(error=>console.error(error))
    }, []);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('cartItems');
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            // error reading value
        }
    };

    function addItemToCart (magicItem: MagicItemProps) {
        setCartItems(prevItems => {
            const newList = [...prevItems, magicItem];

            storeData(newList);

            return newList
        });
    }

    const storeData = async (value: MagicItemProps[]) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('cartItems', jsonValue);
        } catch (e) {
            // saving error
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart
            }}
        >
            { children }
        </CartContext.Provider>
    )
}
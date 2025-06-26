import { View, FlatList, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { MagicItem } from "../../components/MagicItem"
import { useContext, useState } from "react"
import { CartContext } from "../../context"
import { ItemDetailsModal } from "../../components/Modals/ItemDetailsModal"

export const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] = useState<boolean>(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState<string>('');

    return <View style={styles.container}>
        <Text style={styles.title}>
            Carrinho
        </Text>
        <FlatList
            data={cartItems}
            renderItem={({item})=>{
                return (
                    <MagicItem
                        name={item.name}
                        index={item.index}
                        setIsItemDetailsModalOpen={setIsItemDetailsModalOpen}
                        setSelectedItemIndex={setSelectedItemIndex}
                    />
                )
            }}
        />
        {isItemDetailsModalOpen && <ItemDetailsModal
            selectedItemIndex={selectedItemIndex}
            isItemDetailsModalOpen={isItemDetailsModalOpen}
            setIsItemDetailsModalOpen={setIsItemDetailsModalOpen}
            isCart={true}
        />}
    </View>
}
import { View, FlatList, Text, ActivityIndicator } from "react-native"
import { styles } from "./styles"
import { MagicItem } from "../../components/MagicItem"
import { getMagicItems, MagicItemProps } from "../../services/MagicItensApi"
import { useContext, useEffect, useState } from "react"
import { ItemDetailsModal } from "../../components/Modals/ItemDetailsModal"
import { CartContext } from "../../context"

export const Shop = () => {
    const [magicItemList, setMagicItemList] = useState<MagicItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] = useState<boolean>(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState<string>('');

    useEffect(()=>{
        getMagicItems()
            .then(({ data })=> {
                setMagicItemList(data.results)
            })
            .catch((error)=>{
                console.error(error)
            })
            .finally(() => setLoading(false));
    }, [])

    return <View style={styles.container}>
        <Text style={styles.title}>
            Loja
        </Text>
        {loading ?
            <ActivityIndicator
                size={"large"}
            />
        :
            <FlatList
                data={magicItemList}
                renderItem={({ item })=>{
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
        }
        {isItemDetailsModalOpen && <ItemDetailsModal
            selectedItemIndex={selectedItemIndex}
            isItemDetailsModalOpen={isItemDetailsModalOpen}
            setIsItemDetailsModalOpen={setIsItemDetailsModalOpen}
        />}
    </View>
}
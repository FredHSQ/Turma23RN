import { View, FlatList, Text, ActivityIndicator } from "react-native"
import { styles } from "./styles"
import { MagicItem } from "../../components/MagicItem"
import { getMagicItems, MagicItemProps } from "../../services/MagicItensApi"
import { useEffect, useState } from "react"

export const Shop = () => {
    const [magicItemList, setMagicItemList] = useState<MagicItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
                        />
                    )
                }}
            />
        }
    </View>
}
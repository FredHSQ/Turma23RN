import { View, FlatList, Text } from "react-native"
import { styles } from "./styles"
import { MagicItem } from "../../components/MagicItem"

export const Cart = () => {
    return <View style={styles.container}>
        <Text style={styles.title}>
            Carrinho
        </Text>
        <FlatList
            data={[1]}
            renderItem={()=>{
                return (
                    <MagicItem
                        name="Fred (1)"
                    />
                )
            }}
        />
    </View>
}
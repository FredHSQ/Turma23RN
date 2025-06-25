import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface MagicItem {
    name: string
}

export const MagicItem = ({ name }: MagicItem) => {
    return (
        <TouchableOpacity style={styles.buttonMagicItem}>
            <Text style={styles.textMagicItem}>
                { name }
            </Text>
        </TouchableOpacity>
    )
}
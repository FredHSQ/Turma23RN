import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { MagicItemProps } from "../../services/MagicItensApi";

interface MagicItemCpmProps extends MagicItemProps {
    setIsItemDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedItemIndex: React.Dispatch<React.SetStateAction<string>>
}

export const MagicItem = ({ name, index, setIsItemDetailsModalOpen, setSelectedItemIndex }: MagicItemCpmProps) => {

    function defineSelectedIndex () {
        setSelectedItemIndex(index);
        setIsItemDetailsModalOpen(true);
    }

    return (
        <TouchableOpacity onPress={defineSelectedIndex} style={styles.buttonMagicItem}>
            <Text style={styles.textMagicItem}>
                { name }
            </Text>
        </TouchableOpacity>
    )
}
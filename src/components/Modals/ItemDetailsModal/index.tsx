import React, { useContext, useEffect, useState } from "react";
import { Modal, View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";
import { getMagicItemDetailsResponse, getMagicItemsDetails, MagicItemProps } from "../../../services/MagicItensApi";
import CloseIcon from '../../../assets/CloseIcon.png';
import { CartContext } from "../../../context";
import { Button } from "../../Button";

interface ItemDetailsModal {
    isItemDetailsModalOpen: boolean,
    setIsItemDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    selectedItemIndex: string,
    isCart?: boolean
}

export const ItemDetailsModal = ({ isCart, isItemDetailsModalOpen, setIsItemDetailsModalOpen, selectedItemIndex } : ItemDetailsModal) => {
    const [itemDetails, setItemDetails] = useState<getMagicItemDetailsResponse>({
        index: "",
        name: "",
        equipment_category: {
            index: "",
            name: "",
            url: ""
        },
        rarity: {
            name: "",
        },
        variants: [{
            index: "",
            name: "",
            url: "",
        }],
        variant: false,
        desc: [""]
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);

    useEffect(()=>{
        getMagicItemsDetails(selectedItemIndex)
            .then(({ data })=> {
                setItemDetails(data)
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=> {
                setIsLoading(false)
            })
    }, []);

    function addSelectedItemToCard () {
        const magicItem: MagicItemProps = {
            name: itemDetails.name,
            index: itemDetails.index
        }
        
        addItemToCart(magicItem)
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isItemDetailsModalOpen}
            onRequestClose={() => {
                setIsItemDetailsModalOpen(false);
            }}
        >
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
				    {isLoading ?
						<ActivityIndicator
							size={"large"}
						/>
						:
						<>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{itemDetails.name}</Text>
                                <TouchableOpacity onPress={() => setIsItemDetailsModalOpen(false)}>
                                    <Image source={CloseIcon} style={styles.closeIcon} />
                                </TouchableOpacity>
                            </View>
							<ScrollView showsVerticalScrollIndicator={false}>
								
								<View style={styles.firstStatsContainer}>
									<View style={styles.firstStats}>
										<Text style={styles.textTitle}>Rarity: </Text>
										<Text style={styles.textTitle}>{itemDetails.rarity.name}</Text>
									</View>
									<View style={styles.firstStats}>
										<Text style={styles.textTitle}>Type: </Text>
										<Text style={styles.textTitle}>{itemDetails.equipment_category.name}</Text>
									</View>
								</View>
                                {itemDetails.desc &&
                                    <View style={styles.descriptionContainer}>
                                        <Text style={styles.textTitle}>
                                            Descrição:
                                        </Text>
                                        <Text style={styles.text}>
                                            {itemDetails.desc[1]}
                                        </Text>
                                        {
                                            itemDetails.desc.length > 2 && itemDetails.desc.map((description,index) => {
                                                if (index > 1) {
                                                    return (
                                                        <Text style={styles.text}>
                                                            {description}
                                                        </Text>
                                                    )
                                                }
                                            })
                                        }
                                    </View>
                                }
							</ScrollView>
                            <Button
                                text={!isCart ? "Comprar" : "Tirar do carrinho"}
                                onPress={!isCart ? addSelectedItemToCard : ()=>removeItemFromCart(itemDetails.index)}
                            />
						</>
				    }
			    </View>
            </View>
        </Modal>
    );
};
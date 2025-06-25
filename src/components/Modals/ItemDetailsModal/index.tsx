import React, { useEffect, useState } from "react";
import { Modal, View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";
import { getMagicItemDetailsResponse, getMagicItemsDetails } from "../../../services/MagicItensApi";
import CloseIcon from '../../../assets/CloseIcon.png';

interface ItemDetailsModal {
    isItemDetailsModalOpen: boolean,
    setIsItemDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    selectedItemIndex: string
}

export const ItemDetailsModal = ({ isItemDetailsModalOpen, setIsItemDetailsModalOpen, selectedItemIndex } : ItemDetailsModal) => {
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
    }, [])

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
				{
					isLoading ?
						<ActivityIndicator
							size={"large"}
						/>
						:
						<>
							<ScrollView showsVerticalScrollIndicator={false}>
								<View style={styles.titleContainer}>
									<Text style={styles.title}>{itemDetails.name}</Text>
									<TouchableOpacity onPress={() => setIsItemDetailsModalOpen(false)}>
										<Image source={CloseIcon} style={styles.closeIcon} />
									</TouchableOpacity>
								</View>
								<View style={styles.firstStatsContainer}>
									<View style={styles.firstStats}>
										<Text style={styles.textTitle}>Rarity: </Text>
										<Text style={styles.textTitle}>{itemDetails.rarity.name}</Text>
									</View>
									<View style={styles.firstStats}>
										<Text style={styles.textTitle}>Type: </Text>
										<Text style={styles.textTitle}>{itemDetails.equipment_category.name}</Text>
									</View>
									{/* <View style={styles.firstStats}>
										<Text style={styles.textTitle}>Price: </Text>
										<Text style={styles.textTitle}>R${precoModal},00</Text>
									</View> */}
								</View>
                                {itemDetails.desc &&
                                    <View style={styles.descriptionContainer}>
                                        <Text style={styles.textTitle}>
                                            Descrição:
                                        </Text>
                                        <Text style={styles.text}>
                                            {itemDetails.desc[1]}
                                        </Text>
                                        {itemDetails.desc.length > 2 && itemDetails.desc.map((description,index) => {
                                            if (index > 1)
                                                return <Text style={styles.text}>
                                                    {description}
                                                </Text>
                                        })
                                        }
                                    </View>
                                }
							</ScrollView>
						</>
				}
			</View>
            </View>
        </Modal>
    );
};
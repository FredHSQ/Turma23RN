import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    text: string
}

export const Button = ({ text, ...rest }: ButtonProps) => {
   return ( 
        <TouchableOpacity 
            style={styles.button}
            {...rest}
        >
            <Text style={styles.buttonText}>
               { text }
            </Text>
        </TouchableOpacity>
   )
}
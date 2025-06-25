import React from "react";
import { TouchableOpacity, Text, Image, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

import CicleIcon from '../../assets/CircleIcon.png';

export interface skillProps {
  name: string,
  id: string
};

interface SkillCardProps extends TouchableOpacityProps {
    skill: skillProps
};

export const SkillCard = ({ skill,...rest }: SkillCardProps) => {
    return (
    <TouchableOpacity style={styles.buttonSkill} {...rest} >
        <Image source={CicleIcon} style={styles.image}/>
        <Text style={styles.textSkill}>
            { skill.name }
        </Text>
    </TouchableOpacity>
)};
import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";

import CicleIcon from '../../assets/CircleIcon.png';

export interface skillProps {
  name: string,
  id: string
};

interface SkillCardProps {
    skill: skillProps
};

export const SkillCard = ({ skill }: SkillCardProps) => {
    return (
    <TouchableOpacity style={styles.buttonSkill}>
        <Image source={CicleIcon} style={styles.image}/>
        <Text style={styles.textSkill}>
            { skill.name }
        </Text>
    </TouchableOpacity>
)}

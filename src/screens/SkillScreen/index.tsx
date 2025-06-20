import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { styles } from './styles';
import CicleIcon from '../../assets/CircleIcon.png';
import { Button } from '../../components/Button';
import { skillProps, SkillCard } from '../../components/SkillCard';

export const SkillScreen = () => {
  const [skills, setSkills] = useState<skillProps[]>([]);
  const [newSkill, setNewSkill] = useState<string>('');

  function setNewSkillsList () {
    const skill: skillProps = {
      name: newSkill,
      id: String(new Date().getTime())
    }

    setSkills(oldSkills => [...oldSkills, skill])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem vindo, Fred
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setNewSkill}
      />
      <Button
        text='Adicione um habilidade'
        onPress={setNewSkillsList}
      />
      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <SkillCard skill={item}/>
        )}}
      />
    </View>
  )
};

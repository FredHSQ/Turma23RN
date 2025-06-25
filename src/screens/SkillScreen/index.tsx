import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { Button } from '../../components/Button';
import { SkillCard, skillProps } from '../../components/SkillCard';
import { BottomTabsParamList } from '../../routes/BottomTabs';
import { styles } from './styles';

type SkillScreenProps = BottomTabScreenProps<BottomTabsParamList, 'Skill'>;

export const SkillScreen = ({ navigation }: SkillScreenProps) => {
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
            <SkillCard onPress={()=>navigation.navigate('Shop')} skill={item}/>
        )}}
      />
    </View>
  )
};
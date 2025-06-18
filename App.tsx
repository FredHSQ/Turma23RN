import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { styles } from './styles';
import CicleIcon from './CircleIcon.png';

const App = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem vindo, Fred
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setNewSkill(text)
        }}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={()=> setSkills((oldSkills)=> [...oldSkills, newSkill])}
      >
        <Text style={styles.buttonText}>
          Adiciona Skill
        </Text>
      </TouchableOpacity>
      <FlatList
        data={skills}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.buttonSkill}>
              <Image source={CicleIcon} style={styles.image}/>
              <Text style={styles.textSkill}>
                { item }
              </Text>
            </TouchableOpacity>
        )}}
      />
    </View>
  )
}

export default App;

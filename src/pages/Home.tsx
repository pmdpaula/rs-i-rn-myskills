import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import { MyButton } from '../components/MyButton';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

const Home = () => {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState<string>('');

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(oldState => [...oldState, data]);
  };

  const handleRemoveSkill = (id: string) => {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  };

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetings('Bom dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Boa tarde');
    } else {
      setGreetings('Boa noite');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benvindo Pedro</Text>
      <Text style={styles.greetings}>{greetings}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <MyButton onPress={handleAddNewSkill} title="New" />

      <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            title={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    marginTop: 30,
  },
  greetings: {
    color: '#FFF',
  },
});

import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

import GoalItems from './components/GoalItems';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [yearGoals, setYearGoals] = useState([]);
  function goalInputHandler(enteredValues) {
    setEnteredGoalText(enteredValues);
  }

  function addGoalHandler() {
    setYearGoals(currentYearGoal => [...currentYearGoal, {
      text: enteredGoalText, id: Math.random().toString()
    },
    ]);

  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your Goals For 2023...' onChangeText={goalInputHandler}></TextInput>
        <Button title="Add Goals" onPress={addGoalHandler}></Button>
      </View>


      <View style={styles.goalContainer}>

        <FlatList data={yearGoals} renderItem={(itemData) => {
          return <GoalItems text={itemData.item.text} />
        }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}

        />

      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 12,
    flex: 1

  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 50

  },
  TextInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: '#6c6c6c',
    padding: 8,
    marginRight: 9

  },
  goalContainer: {
    flex: 5
  },


});


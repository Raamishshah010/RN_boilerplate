import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count , setCount] = useState(0)

  let title = 1;
  const tap = () => {
    
    setCount(count + 1);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={
          {
            color: 'red',
            borderWidth: 2, 
            borderColor: 'black',
            padding: 15,
            }}
            
            >{count}</Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="tap me" onPress={tap}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [textForSpeech, setTextForSpeech] = useState('');

  const speakOut = () => {
    Speech.speak(textForSpeech);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Write something' onChangeText={text => setTextForSpeech(text)}
      value={textForSpeech} />
      <StatusBar style="auto" />
      <Button title="Listen" onPress={() => speakOut()} />
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
  textinput: {
    height: 30,
    width: 150, 
    marginTop: 10,
    marginBottom: 10
  }
});

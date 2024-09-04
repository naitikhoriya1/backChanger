import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
} from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const getRandomHexColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
  };

  const handleChangeColor = () => {
    const newColor = getRandomHexColor();
    setBackgroundColor(newColor);
  };

  const handleCopyHexCode = () => {
    Clipboard.setString(backgroundColor);
    alert(`Copied ${backgroundColor} to clipboard!`);
  };

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <TouchableOpacity onPress={handleChangeColor} style={styles.button}>
        <Text style={styles.buttonText}>Change Background Color</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCopyHexCode} style={styles.copyButton}>
        <Text style={styles.hexText}>{backgroundColor}</Text>
        <Text style={styles.copyText}>Tap to Copy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  copyButton: {
    alignItems: 'center',
  },
  hexText: {
    fontSize: 24,
    color: '#333',
    marginBottom: 5,
  },
  copyText: {
    fontSize: 14,
    color: '#666',
  },
});

export default App;

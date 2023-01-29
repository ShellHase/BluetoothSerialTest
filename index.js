import { StyleSheet, Text, View } from 'react-native';
import BluetoothSerialExample from './App';

export default function App() {
  const BluetoothSerial = new BluetoothSerialExample()
  
  return (
    <View style={styles.container}>
      <BluetoothSerial.render></BluetoothSerial.render>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

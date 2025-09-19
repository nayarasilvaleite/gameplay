import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { stylesSignIn } from './styles';
import { TextInput } from 'react-native';

export function stylesSignIn() {
  return (
    <View style={stylesSignIn.container}>
      <Text> ssa tela é a tela de entrada </Text>
      <TextInput style={{width:200, height:50,borderWidth:2}}/>
      <StatusBar style="auto" />
    </View>
  );
}


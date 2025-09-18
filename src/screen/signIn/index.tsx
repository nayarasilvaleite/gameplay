import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { stylesSingIn } from './styles'

export function SignIn() {
  return (
    <View style={styles.container}>
      <Text>essa tela é a de entrada </Text>
      <StatusBar style="auto" />
    </View>
  );
}


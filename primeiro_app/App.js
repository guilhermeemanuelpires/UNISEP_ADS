
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

export default function App() {

  const [valor, setValor] = useState(0);
  const [nome, setNome] = useState("teste");

  function add() {
    setValor(valor + 1);
  }
  function rmv() {
    setValor(valor - 1);
  }

  return (
    <View style={styles.container}>
      <Text>
        {valor}
      </Text>

      <Button
        title='Adicionar'
        onPress={() => { add() }}
      />

      <Button
        title='Remover'
        onPress={() => { rmv() }}
      />

      <TextInput
        onChangeText={setNome}
        value={nome}
        style={{
          borderWidth: 1,
          width: 200,
          height: 25,
          borderBlockColor: '#000'
        }}
      />

      <Text>{nome}</Text>

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
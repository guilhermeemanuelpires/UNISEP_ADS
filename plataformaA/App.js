import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={logo}
          style={styles.logo}
        />

        <Text style={styles.title}>Seja bem-vindo</Text>

        <TextInput
          placeholder='Usuário'
          keyboardType='numeric'
          placeholderTextColor="#9aa0a6"
          style={styles.input}
        />

        <TextInput
          placeholder='Senha'
          secureTextEntry
          placeholderTextColor="#9aa0a6"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.rowBetween}>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueci o usuário</Text>
          </TouchableOpacity>
          <Text style={styles.dividerText}>ou</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 6
  },
  logo: {
    width: 210,
    height: 80,
    alignSelf: 'center'
  },
  title: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 12
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 15
  },
  button: {
    height: 46,
    backgroundColor: '#2c3b48',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25
  },
  link:{
    color: '#c8003c',
    fontSize: 14
  },
  dividerText:{
    marginHorizontal: 10,
    color: '#9aa0a6'
  }
});

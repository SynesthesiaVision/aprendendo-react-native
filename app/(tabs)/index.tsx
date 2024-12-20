import Fact from "@/components/Fact";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

// Um componente, é uma função javascript que retorna um trecho de código HTML
export default function HomeScreen() {
  return (
    // Utilizamos os estilos que criamos em "styles", passando diretamente ao atributo
    // do nosso componente
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Podemos renderizar componentes dentro dos nossos próprios componentes */}
      <Fact />
    </View>
  );
}

// A estilização padrão com o Expo é feita dessa forma.
// Basicamente, criamos um objeto de estilos e o utilizamos no nosso componente.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white"
  }
});

import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Fact() {
  const [fact, setFact] = useState(''); // Estado para armazenar o fato.
  const [error, setError] = useState(''); // Estado para armazenar erros.

  // Função que será chamada quando pressionamos o botão
  const fetchCatFact = () => {
    setError(''); // Limpa mensagens de erro ao começar a busca.
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json()) // Converte a resposta em JSON.
      .then((data) => setFact(data.fact)) // Atualiza o estado com o fato recebido.
      .catch((error) => setError('Error when fetching fact! Try again later...')); // Captura erros.
  };

  return (
    <View style={styles.container}>
      <View style={styles.factContainer}>
        {/* 
          Abaixo, temos um if ternário, se fact existir, apresentamos um texto
          com o fact, se não, apresentamos uma mensagem de erro.
        */}
        {fact ? (
          <Text style={styles.text}>
            {fact}
          </Text>
        ) : (
          <Text style={styles.error}>
            {error}
          </Text>
        )}
      </View>
      {/* 
        Pressable é um botão que faz uma chamada à api do cat fact (onPress) 
        quando pressionado.
      */}
      <Pressable style={styles.button} onPress={fetchCatFact}>
        <Text style={styles.buttonText}>
          Gerar Fato
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  factContainer: {
    flex: 1,
    padding: 10,
    textAlign: "justify",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  error: {
    color: "red",
  },
  button: {
    backgroundColor: "purple",
    marginTop: "auto",
    padding: 20,
    borderRadius: 5,
    margin: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  }
});

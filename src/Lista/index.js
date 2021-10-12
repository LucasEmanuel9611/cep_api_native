import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import api from "../service/api";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function Lista() {
  const [cep, setCep] = useState("");
  const [exibir, setExibir] = useState(false);
  const [informacoes, setInformacoes] = useState([]);

  const getApi = () => {
    api.get(cep + "/json/").then((response) => {
      setInformacoes(response.data);
      console.log(response.data);
      setExibir(true);
    })
    .catch(() => {
      console.warn("CEP ERROR")
    });
  };


  return (
    <>
      <View style={styles.container}>
        <Text>Consulta Dados Por CEP</Text>

        <TextInput
          type="text"
          onChangeText={(cep) => setCep(cep)}
          placeholder="Digite o CEP"
          style={styles.input}
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={getApi} style={styles.button}>
          <Text style={styles.title_button}> Localizar</Text>
        </TouchableOpacity>

        <View style={styles.responses}>
          {exibir == false ? (
            <>
              <Text style={styles.footer}> Digite seu Cep </Text>
            </>
          ) : (
            <ScrollView style={styles.response}>
              <View style={styles.campos}>
                <Text style={styles.response_titulo}>Resultados</Text>
                <Text style={styles.campo}>
                  localidade: {informacoes.localidade}
                </Text>
                <Text style={styles.campo}>ibge: {informacoes.ibge}</Text>
                <Text style={styles.campo}>bairro {informacoes.bairro}</Text>
                <Text style={styles.campo}>cep {informacoes.cep}</Text>
                <Text style={styles.campo}>
                  complemento: {informacoes.complemento}
                </Text>
                <Text style={styles.campo}>ddd: {informacoes.ddd}</Text>
                <Text style={styles.campo}>gia: {informacoes.gia}</Text>
                <Text style={styles.campo}>
                  logradouro: {informacoes.logradouro}
                </Text>
                <Text style={styles.campo}>siafi: {informacoes.siafi}</Text>
                <Text style={styles.campo}>uf: {informacoes.uf}</Text>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
        <Text style={{marginTop: '30%'}}>github: LucasEmanuel9611</Text>
    </>
  );
}

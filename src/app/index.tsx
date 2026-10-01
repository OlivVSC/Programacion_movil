import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import { FichaSala } from "../components/ficha_sala";

export default function HomeScreen() {
  const Ficha_Sala = {
    nombre_sala: "Sala de Conferencias",
    descrip_sala: "Aforo máximo autorizado: 25 Personas",
    foto_sala:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_MY291OjoN1iUu4y-hIRUP61497Y0qupfWnQLax_mg&s=10",
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Corporate Spaces</Text>
          <Text style={styles.headerSubtitle}>
            Gestión de salas - ISER Pamplona
          </Text>
        </View>

        <FichaSala
          nombre_sala={Ficha_Sala.nombre_sala}
          descrip_sala={Ficha_Sala.descrip_sala}
          foto_sala={Ficha_Sala.foto_sala}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#64748b",
  },
});

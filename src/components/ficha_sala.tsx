import { Image, StyleSheet, Text, View } from "react-native";
//• 1. Ficha Visual del Espacio: Desplegar una tarjeta superior atractiva con la fotografía de la sala de conferencias,
// mostrando de forma clara el nombre oficial de la sala y su aforo máximo autorizado (25 Personas).
interface FichaSala {
  //Define the props for the FichaSala component
  nombre_sala: string;
  descrip_sala: string;
  foto_sala: string;
}

export const FichaSala: React.FC<FichaSala> = ({
  nombre_sala,
  descrip_sala,
  foto_sala,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: foto_sala || "https://via.placeholder.com/300" }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{nombre_sala}</Text>
        <Text style={styles.descripcion}>{descrip_sala}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    margin: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: "100%",
    height: 150,
  },
  info: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a2e",
  },
  descripcion: {
    fontSize: 15,
    color: "#555555",
    marginTop: 6,
    lineHeight: 22,
  },
});

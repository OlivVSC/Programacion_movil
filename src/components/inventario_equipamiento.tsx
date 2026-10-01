import { StyleSheet, Text, View } from "react-native";

//Inventario de Equipamiento: Mostrar el listado del equipamiento tecnológico disponible en la sala: Pantalla 4K de 85",
// Sistema de Micrófonos Omnidireccionales, Cámara PTZ para videollamadas, Red Wi-Fi dedicada y Tomas Eléctricas.

interface equipamiento_sala {
  inventario: string;
}

export const InventarioEquipamiento: React.FC<equipamiento_sala> = ({
  inventario,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.descripcion}>{inventario}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    margin: 14,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  info: {
    padding: 16,
  },
  descripcion: {
    fontSize: 15,
    color: "#181818",
    lineHeight: 22,
  },

});

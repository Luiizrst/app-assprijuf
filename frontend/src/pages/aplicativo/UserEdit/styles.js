import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#BE2C2C",
    justifyContent: "center",
    alignItems: "center",
  },
  board: {
    width: "90%",
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 30,
    borderRadius: 20,
  },
  viewImagePicker: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imagePicked: {
    borderRadius: 10,
    width: 160,
    height: 200,
    marginVertical: "5%",
  },
  imagePicker: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9A2B2B",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  textImagePicker: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  button: {
    height: 70,
    marginBottom: "12%",
  },
});

export default styles;

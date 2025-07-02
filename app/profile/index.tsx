import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useLanguage } from "../../context/LanguageContext";
import React, { useState } from 'react';

export default function ProfileScreen() {
  const { t, language, setLanguage } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("profile")}</Text>
      
      <View style={styles.formGroup}>
        <Text>{t("name")}:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder={t("enterName")}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text>{t("email")}:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder={t("enterEmail")}
          keyboardType="email-address"
        />
      </View>
      
      <View style={styles.languageSelector}>
        <Text>{t("language")}:</Text>
        <Button 
          title="O'zbekcha" 
          onPress={() => setLanguage("uz")} 
          disabled={language === "uz"}
        />
        <Button
          title="English"
          onPress={() => setLanguage("en")}
          disabled={language === "en"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  formGroup: {
    marginBottom: 15
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: "white"
  },
  languageSelector: {
    marginTop: 20
  }
});
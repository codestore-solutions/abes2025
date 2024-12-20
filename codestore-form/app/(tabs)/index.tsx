import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    companyName: "",
    catchPhrase: "",
    bs: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const validateForm = () => {
    return Object.values(formData).every((field) => field.trim() !== "");
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      Alert.alert("Success", `User registered with ID: ${data.id}`);
      setUsers((prevUsers) => [...prevUsers, data]);
      setFormData({
        name: "",
        email: "",
        username: "",
        phone: "",
        website: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        companyName: "",
        catchPhrase: "",
        bs: "",
      });
    } catch (err) {
      setError("Failed to register user.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register User</Text>
      <View style={styles.form}>
        {Object.keys(formData).map((key) => (
          <TextInput
            key={key}
            style={styles.input}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={formData[key]}
            onChangeText={(value) => handleInputChange(key, value)}
            keyboardType={
              key === "email"
                ? "email-address"
                : key === "phone" || key === "zipcode"
                ? "number-pad"
                : "default"
            }
          />
        ))}
        <TouchableOpacity
          style={[
            styles.button,
            (!validateForm() || loading) && styles.buttonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={!validateForm() || loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Submitting..." : "Register"}
          </Text>
        </TouchableOpacity>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>

      <Text style={styles.title}>User List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardText}>Username: {item.username}</Text>
              <Text style={styles.cardText}>Email: {item.email}</Text>
              <Text style={styles.cardText}>Phone: {item.phone}</Text>
              <Text style={styles.cardText}>Website: {item.website}</Text>
              <Text style={styles.cardText}>Address:</Text>
              {item.address ? (
                <Text style={styles.cardSubText}>
                  {item.address.street}, {item.address.suite},{" "}
                  {item.address.city}, {item.address.zipcode}
                </Text>
              ) : (
                <Text style={styles.cardSubText}>No Address Provided</Text>
              )}
              <Text style={styles.cardText}>Company:</Text>
              {item.company ? (
                <>
                  <Text style={styles.cardSubText}>{item.company.name}</Text>
                  <Text style={styles.cardSubText}>
                    {item.company.catchPhrase}
                  </Text>
                  <Text style={styles.cardSubText}>{item.company.bs}</Text>
                </>
              ) : (
                <Text style={styles.cardSubText}>
                  No Company Information Provided
                </Text>
              )}
            </View>
          )}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FAFAFA",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#007BFF",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    marginBottom: 30,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    elevation: 1,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    elevation: 2,
  },
  buttonDisabled: {
    backgroundColor: "#6C757D",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  error: {
    color: "#D9534F",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 1,
    shadowColor: "#000",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  cardSubText: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
    paddingLeft: 10,
  },
});

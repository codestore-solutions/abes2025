// Import necessary libraries
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

  const handleInputChange = (key: any, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
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
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={formData.name}
          onChangeText={(value) => handleInputChange("name", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(value) => handleInputChange("email", value)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formData.username}
          onChangeText={(value) => handleInputChange("username", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={formData.phone}
          onChangeText={(value) => handleInputChange("phone", value)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Website"
          value={formData.website}
          onChangeText={(value) => handleInputChange("website", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Street"
          value={formData.street}
          onChangeText={(value) => handleInputChange("street", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Suite"
          value={formData.suite}
          onChangeText={(value) => handleInputChange("suite", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={formData.city}
          onChangeText={(value) => handleInputChange("city", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Zipcode"
          value={formData.zipcode}
          onChangeText={(value) => handleInputChange("zipcode", value)}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          value={formData.companyName}
          onChangeText={(value) => handleInputChange("companyName", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Catch Phrase"
          value={formData.catchPhrase}
          onChangeText={(value) => handleInputChange("catchPhrase", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Business Strategy (BS)"
          value={formData.bs}
          onChangeText={(value) => handleInputChange("bs", value)}
        />
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Submitting..." : "Register"}
          </Text>
        </TouchableOpacity>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>

      <Text style={styles.title}>User List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
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
    backgroundColor: "#F9FAFC",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    marginBottom: 30,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: "#6200EE",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#6200EE",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: "#999",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  error: {
    color: "#D32F2F",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
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

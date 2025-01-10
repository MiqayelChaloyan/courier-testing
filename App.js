import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// Import your data
import data from './products/data.json';

// Home Screen
const HomeScreen = ({ navigation }) => {
  const handleProducts = () => {
    navigation.navigate('Products');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonWrapper} onPress={handleProducts}>
        <Text style={styles.buttonText}>Продукты</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Filter Separator Component
const FilterSeparator = () => <View style={styles.separator} />;

// Products Screen
const ProductsScreen = () => {
  const flatListRef = useRef(null);

  const scrollToItem = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  const renderCard = ({ item }) => {
    const base64Image = `data:image/png;base64,${item.IconUrlSmall}`;

    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        {item.IconUrlSmall ? (
          <Image source={{ uri: base64Image }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>Изображение отсутствует</Text>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data.Items}
        renderItem={renderCard}
        keyExtractor={(item) => item.Id.toString()}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
        ItemSeparatorComponent={FilterSeparator}
        ListHeaderComponent={<Text style={styles.title2}>Продукты</Text>}
      />
      <TouchableOpacity
        style={styles.scrollButton}
        onPress={() => scrollToItem(0)} // Example: Scroll to the first item
      >
        <Text style={styles.buttonText}>Наверх</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD65A',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatListContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  separator: {
    height: 10,
  },
  card: {
    margin: 5,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 170,
    height: 270
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    height: 95
  },
  title2: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: 150,
    height: 150,
  },
  placeholder: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  scrollButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';
import products from 'assets/data/products';
import defaultPizzaImage from '@components/ProductListItem';

export default function ProductDetailsScreen() {
    // useLocalSearchParams is a hook imported from expo-router that is used to extract
    // dymaic data passed via the URL to a spefici screen or component.
    const { id } = useLocalSearchParams();

    const product = products.find((item) => item.id.toString() === id);

    // If product is undefined return this.
    if (!product) {
        return <Text>Product not found</Text>;
    };

    // If product is found return this.
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: product.name }} />
            <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
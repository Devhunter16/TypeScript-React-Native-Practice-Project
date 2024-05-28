import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@constants/Colors';
import { Product } from '@assets/types/types';

// A default image we can use in case out product image is null
export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

// This is kind of confusing but we're just saying that ProductListItemProps is an object
// that contains a product variable of type Product.
type ProductListItemProps = {
    product: Product;
};

export default function ProductListItem({ product }: ProductListItemProps) {
    return (
        // A view is a container similar to a <div> that helps us group together JSX 
        // elements
        /* We also provide a fallback image if the original image is null */
        <View style={styles.container}>
            <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        /*
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        */
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    image: {
        width: '100%',
        aspectRatio: 1, // aspectRatio automatically calculated the height based on the width
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
    },
    price: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.light.tint,
    }
});
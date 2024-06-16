import { StyleSheet, Text, Pressable, Image } from 'react-native';
import Colors from '@constants/Colors';
import { Product } from '@assets/types/types';
import { Link } from 'expo-router';

// A default image we can use in case out product image is null
export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

// This is kind of confusing but we're just saying that ProductListItemProps is an object
// that contains a product variable of type Product.
type ProductListItemProps = {
    product: Product;
};

export function ProductListItem({ product }: ProductListItemProps) {
    return (
        // A view is a container similar to a <div> that helps us group together JSX 
        // elements
        /* We also provide a fallback image if the original image is null */
        // Using resizeMode here so every image fits it's container perfectly without
        // being cut off at the edges.
        // Using asChild in our link here so that our component skips rendering the 
        // link and just renders the Pressable so that our styles don't get messed up 
        // here.
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    source={{ uri: product.image || defaultPizzaImage }}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </Pressable>
        </Link>
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
        flex: 1,
        maxWidth: '50%'
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
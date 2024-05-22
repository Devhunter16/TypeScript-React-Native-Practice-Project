import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/src/constants/Colors';

export default function ProductListItem({ product }: any) {
    return (
        // A view is a container similar to a <div> that helps us group together JSX 
        // elements
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
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
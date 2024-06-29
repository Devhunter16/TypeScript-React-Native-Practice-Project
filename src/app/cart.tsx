import { StatusBar } from 'expo-status-bar';
import { Platform, View, Text } from 'react-native';
import { useContext } from 'react';
import { CartContext } from '@providers/CartProvider';

const CartScreen = () => {
    const { items } = useContext(CartContext);

    return (
        <View>
            <Text>Cart items length: {items.length}</Text>

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
};

export default CartScreen;
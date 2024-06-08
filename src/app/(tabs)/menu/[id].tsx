import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function ProductDetailsScreen() {
    // useLocalSearchParams is a hook imported from expo-router.
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{ title: `Details: ${id}` }} />
            <Text>ProductDetailsScreen for id: {`${id}`}</Text>
        </View>
    );
};
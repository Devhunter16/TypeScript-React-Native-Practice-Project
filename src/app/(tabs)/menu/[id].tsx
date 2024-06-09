import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function ProductDetailsScreen() {
    // useLocalSearchParams is a hook imported from expo-router that is used to extract
    // dymaic data passed via the URL to a spefici screen or component.
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{ title: `Details: ${id}` }} />
            <Text>ProductDetailsScreen for id: {`${id}`}</Text>
        </View>
    );
};
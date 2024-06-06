import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function ProductDetailsScreen() {
    // useLocalSearchParams is a hook imported from expo-router.
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>ProductDetailsScreen for id: {`${id}`}</Text>
        </View>
    );
};
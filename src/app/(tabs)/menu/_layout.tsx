/* A stack navigator is a type of navigation where screens are stacked on top of 
each other, and you can navigate forward to new screens or backward to previous 
screens, mimicking the navigation stack behavior commonly found in mobile 
applications. */
import Colors from '@constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';

// A _layout.tsx component file wraps around the child components in the same folder.
// It is also a good place to use data or context providers etc.

/* Stack Navigator: Manages a stack of screens, allowing users to navigate between 
them. Each screen is pushed onto the stack when navigated to, and popped off when 
navigating back.

Our MenuStack function defines a stack navigator using the Stack component.

Stack.Screen Component: Represents a single screen within the stack navigator. Each
Stack.Screen component specifies a route and a component that should be rendered 
for that route. */

// Stack.Screen here targets our index file (name="index") in the same folder and
// changes the header title to "Menu" rather than just "index" so we see that in
// our app.
export default function MenuStack() {
    return (
        <Stack
            screenOptions={{
                headerRight: () => (
                    <Link href="/modal" asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <FontAwesome
                                    name="info-circle"
                                    size={25}
                                    color={Colors.light.tint}
                                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                />
                            )}
                        </Pressable>
                    </Link>)
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Menu' }} />
        </Stack>
    );
};
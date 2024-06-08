import { Stack } from 'expo-router';

// A _layout.tsx component file wraps around the child components in the same folder.
// It is also a good place to use data or context providers etc.

// Stack.Screen here targets our index file (name="index") in the same folder and
// changes the header title to "Menu" rather than just "index" so we see that iin
// our app.
export default function MenuStack() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Menu' }} />
        </Stack>
    );
};
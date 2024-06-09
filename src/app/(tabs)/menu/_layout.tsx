/* A stack navigator is a type of navigation where screens are stacked on top of 
each other, and you can navigate forward to new screens or backward to previous 
screens, mimicking the navigation stack behavior commonly found in mobile 
applications. */
import { Stack } from 'expo-router';

// A _layout.tsx component file wraps around the child components in the same folder.
// It is also a good place to use data or context providers etc.

// Stack.Screen here targets our index file (name="index") in the same folder and
// changes the header title to "Menu" rather than just "index" so we see that in
// our app.
export default function MenuStack() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Menu' }} />
        </Stack>
    );
};
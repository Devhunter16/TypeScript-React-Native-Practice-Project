import { Redirect } from 'expo-router';

// Created this file because the "index" file in the tabs folder is the first one to
// show up when the app fires up. We actually want to redirect to the _layout file in
// our menu folder so users see that first, so that is what we're specifying here.

export default function TabIndex() {
    return <Redirect href={'/menu/'} />;
};
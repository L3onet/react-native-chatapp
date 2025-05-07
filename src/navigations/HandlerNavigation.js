import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AuthNavigation } from './stacks';
import { AppNavigation } from './AppNavigation';
import { useAuth } from '../hooks';

export function HandlerNavigation() {
    const { user } = useAuth();

    return user ? <AppNavigation /> : <AuthNavigation />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

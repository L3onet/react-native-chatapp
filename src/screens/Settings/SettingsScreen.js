import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../hooks';
import { UserInfo, Options } from '../../components/Settings';

export function SettingsScreen() {
    const { logout, user, accessToken, updateUser } = useAuth();

    return (
        <SafeAreaView>
            <UserInfo user={user} />
            <Options 
            accessToken={accessToken} 
            updateUser={updateUser} 
            logout={logout} />
        </SafeAreaView>
    )
}
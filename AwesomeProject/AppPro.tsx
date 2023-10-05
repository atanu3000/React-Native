import React from 'react';

import { 
    View,
    Text,
    StyleSheet,
    useColorScheme,
 } from "react-native";

function AppPro() : JSX.Element{
    const isDarkMode = useColorScheme() === "dark";
    return(
        <View style={[styles.container, isDarkMode ? {backgroundColor: '#222'} : {backgroundColor: '#fff'}]}>
            <Text style={[styles.textStyle, isDarkMode ? styles.whiteText: styles.darkText]}>Say, hello 👋</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    whiteText: {
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
        
    }
    
})

export default AppPro;
import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'; //imrn shortcut (import react-native)

//rsf shortcut (react stateless functional)
function AppText({children}) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

//rns (react native style)
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})

export default AppText;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ListItemDeleteAction(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons 
            name="trash-can"
            size={35}
            color={colors.white}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width:100,
        justifyContent: "center",
        alignContent: "center"
    }
})

export default ListItemDeleteAction;
import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({title, subTitle, image, onPress, renderRightActions }) => {
    return ( 
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light} 
        onPress={ onPress }>
        <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View>
            <AppText style={styles.title} >{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
     );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row", //layout components horizontally 
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "500"
    }
})
 
export default ListItem;
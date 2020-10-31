import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({title, subTitle, image, ImageComponent, onPress, renderRightActions }) => {
    return ( 
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={ onPress }>
        <View style={styles.container}>
            {ImageComponent}
            {image && <Image source={image} style={styles.image} />}
        <View style={styles.detailsContainer}>
            <AppText style={styles.title} >{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
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
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "500"
    }
})
 
export default ListItem;
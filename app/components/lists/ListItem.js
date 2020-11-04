import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../Text';
import colors from '../../config/colors'; 

const ListItem = ({title, subTitle, image, IconComponent, onPress, renderRightActions }) => {
    return ( 
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={ onPress }>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2} >{subTitle}</AppText>}
        </View>
        <MaterialCommunityIcons colors={colors.medium} name="chevron-right" size={25} />
        </View>
        </TouchableHighlight>
        </Swipeable>
     );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center", //puts chevron in middle of cross axis
        flexDirection: "row", //layout components horizontally 
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
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
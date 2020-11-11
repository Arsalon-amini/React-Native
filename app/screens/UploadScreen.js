import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import * as Progress from 'react-native-progress'; 
import { color } from 'react-native-reanimated';

function UploadScreen({ progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <Progress.Bar 
                    color={color.primary} 
                    progress={progress} 
                    width={200}
                />
            </View>
        </Modal>
 );
}

const styles = StyleSheet.create({
   container: {
       alignItems: 'center',
       justifyContent: 'center',
       flex: 1
   }

})

export default UploadScreen;
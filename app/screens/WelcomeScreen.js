import React from 'react';
import { Image, ImageBackground, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import Text from '../components/Text'; 

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
        blurRadius= {8}
        style={styles.background}
        source = {require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}> 
                <Image style = {styles.logo}source={require('../assets/logo-red.png')} />
                <Text style={styles.tagLine}> Sell What You Don't Need </Text>
            </View>
            <View style={styles.buttonsContainer}>
            <Button title="login" onPress={()=> navigation.navigate("Login")}/>
            <Button 
            title="register" 
            color="secondary" 
            onPress={()=>navigation.navigate("Register")}
            />
            </View>
        </ImageBackground>
    );
}
    const styles = StyleSheet.create({
        background: {
            flex: 1, 
            justifyContent: "flex-end",
            alignItems: "center"
        },
        buttonsContainer: {
            padding: 20,
            width: "100%",
        },
        logo:{
            width: 100,
            height: 100,
        },
        logoContainer: {
            position: "absolute",
            top: 70,
            alignItems: "center"
        },
        tagLine: {
            fontSize: 25,
            fontWeight: "600",
            paddingVertical: 20
        }
    });


export default WelcomeScreen;


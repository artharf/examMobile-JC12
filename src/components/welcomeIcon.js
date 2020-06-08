import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';


const welcomeIcon = () => {
    return(
        <View style={styles.logo}>
            <Icon type="material-community" name="android-debug-bridge" size={100} color="#3DDC84"></Icon>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        display: 'flex',
        
    },
    logotxt: {
        justifyContent : "center",
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
    }

})

export default welcomeIcon;
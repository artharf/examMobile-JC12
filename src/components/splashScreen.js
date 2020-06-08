import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const SplashScreen = () => {
    return (
    <View style={styles.logo}>
        <Icon type="material-community" name="android-debug-bridge" size={100} color="#3DDC84"></Icon>
    </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "fff",
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: { 
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 50,
    },
    logoText: {
      fontSize: 50,
      fontWeight: "bold",
      color: "#fff",
    }
});
  export default SplashScreen;
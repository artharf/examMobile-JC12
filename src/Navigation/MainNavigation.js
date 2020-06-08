import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../screens';
import Center from '../support/helper/Center';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { KeepLogin } from '../redux/actions/authAction';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import TabNav from './TabNav';
import { splashScreen } from '../components';





const MainNavigation = () => {
    
    const [splashScreen, setSplashScreen] = usetState(false);

    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.username);

    const openSplash = () => {
        setTimeout(() => {
            setSplashScreen(true);
        }, 2000);
        closeSplash();
    };

    const closeSplash = () => setSplashScreen(false);

    useEffect(() => {
        openSplash(closeSplash);

        dispatch(KeepLogin());
    }, []);
    
    
    return(
        <NavigationContainer>
      { !splashScreen 
        ? <splashScreen /> 
        : username ? <TabNav /> : <Login />}
    </NavigationContainer>
    )
};

export default MainNavigation;
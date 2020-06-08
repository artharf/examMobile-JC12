import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import {ChangeDPAction} from '../Redux/Action/authAction'

const Detail = () => {
    
    const images = useSelector(state => state.data.images)
    
    return(
        <View>
            <Image
            source={{images}}
            style={styles.image}
            />

        <Button 
          title="SET AS DISPLAY PICTURE?"
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonColor}
          onPress={() => dispatch(ChangeDPAction(displayPicture))}
        />

        </View>
    )
};

const styles = StyleSheet.create({
    image: {
      height: 200, 
      width: "100%",
    },
    containerText: {
      display: "flex",
    },
    groupText: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonStyle: {
        width: "90%",
        marginHorizontal: 20,
        marginVertical: 30,
      },
      buttonColor: {
        backgroundColor: "3DDC84",
      },
  });

export default Detail;
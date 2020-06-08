import React from 'react';
import { View, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


const Feed = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data.images);
  
    useEffect(() => {
      dispatch(FetchData());
    }, []);
  
    const handlePress = images => {
      dispatch(GetDetail(images));
      navigation.navigate("Detail");
    };
  

    return (
        <View>
            <FlatList
                    data={data}
                    renderItem={({item}) => (
                      <TouchableWithoutFeedback onPress={() => handlePress(item.images)}>
                        <View style={{ width: "50%", height: 250 }}>
                          <KocengCard data={item.images} />
                        </View>
                      </TouchableWithoutFeedback>
                    )}
                    keyExtractor={item => item.images.name}
                    style={{ width: "100%" }}
                    numColumns={2}
            />
        </View>
    )

};

export default Feed;
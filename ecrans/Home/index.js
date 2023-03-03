import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import dashboardStyles from './style';
import { FakeActivity } from '../../fakeData/fakeActivity';
import SVG_HOSPITAL from '../../assets/images/svg/medecine.svg';
import ActivityItem from '../../composantes/activityItem';

const Home = () => {
    return (
        <ScrollView>
            {/* Début du header */}
            <View style={dashboardStyles.header}>
                <Text style={dashboardStyles.userName}>John Doe</Text>
                <Image source={require('../../assets/woman.jpg')} style={dashboardStyles.userImage} />
            </View>
            {/* Fin du header */}

            {/* Début des activités*/}

            <FlatList
                style={dashboardStyles.scrolableList}
                data={FakeActivity}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <ActivityItem item={item} />;
                }}
            />

            {/* Fin des activités*/}
        </ScrollView>
    );
};

export default Home;

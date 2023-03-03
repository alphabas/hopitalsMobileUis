import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import SVG_HOSPITAL from './../../assets/images/svg/medecine.svg';
import activityStyles from './style';

const ActivityItem = ({ item }) => {
    return (
        <TouchableOpacity style={activityStyles.scrolableListItem}>
            <SVG_HOSPITAL width={60} height={60} />
            <Text style={activityStyles.mainText}>{item.mainText}</Text>
            <Text style={activityStyles.subText}>{item.subText}</Text>
        </TouchableOpacity>
    );
};

export default ActivityItem;

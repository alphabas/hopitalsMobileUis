import { StyleSheet } from 'react-native';
import { PADDING } from '../../outils/constantes';

const dashboardStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white'
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    userName: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    scrolableList: {
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal
    },
    scrolableListItem: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        elevation: 1,
        backgroundColor: 'white'
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    subText: {
        marginTop: 10,
        fontSize: 12
    }
});

export default dashboardStyles;

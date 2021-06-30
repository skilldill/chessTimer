import {StyleSheet} from "react-native";

export const timerGroundStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
        padding: 20
    },

    controls: {
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 100
    },

    control: {
        transform: [{rotate: '90deg'}]
    }
});
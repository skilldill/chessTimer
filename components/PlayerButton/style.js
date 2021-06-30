import {StyleSheet} from "react-native";

export const playerButtonStyle = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#505050',
        borderRadius: 15
    },

    buttonText: {
        fontSize: 80,
        transform: [{ rotate: '90deg' }],
        color: '#e0e0e0'
    }
})
import React, { useCallback } from "react";
import {TouchableOpacity, Text} from "react-native";

import {playerButtonStyle} from "./style";

export const PlayerButton = (props) => {
    const {time, onPress} = props;

    const handlePress = useCallback(() => {
        onPress();
    }, [onPress])

    return (
        <TouchableOpacity style={playerButtonStyle.button} onPress={handlePress}>
            <Text style={playerButtonStyle.buttonText}>{time}</Text>
        </TouchableOpacity>
    )
}
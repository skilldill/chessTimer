import React, {useCallback, useMemo} from "react";
import {TouchableOpacity, Text} from "react-native";

import {timerButtonStyle} from "./style";

export const TimerButton = (props) => {
    // type = 'default' | 'success' | 'danger'
    const {title, onPress, type} = props;

    const handlePress = useCallback(() => {
        !!onPress && onPress();
    }, [onPress])

    const colorMap = {
        'default': '#e0e0e0',
        'success': '#0f0',
        'danger': '#f00'
    }

    const buttonColor = useMemo(() => !!type ? colorMap[type] : colorMap.default ,[type])

    return (
        <TouchableOpacity style={timerButtonStyle.button} onPress={handlePress}>
            <Text style={[timerButtonStyle.buttonText, {color: buttonColor}]}>{title}</Text>
        </TouchableOpacity>
    )
}
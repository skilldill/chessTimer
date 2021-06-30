import React, { useMemo, useState } from "react";
import {View} from "react-native";

import {timerGroundStyle} from "./style";
import {PlayerButton, TimerButton} from "../";
import {PlayerTimer} from "../../services";

const GAME_TIME = 600; 

export const TimerGround = () => {
    const firstTimer = useMemo(() => new PlayerTimer(GAME_TIME), []);
    const secondTimer = useMemo(() => new PlayerTimer(GAME_TIME), []);

    const [firstTimerSeconds, setFirstTimerSeconds] = useState(GAME_TIME);
    const [secondTimerSeconds, setSecondTimerSeconds] = useState(GAME_TIME);

    const startFirstTimer = () => {
        firstTimer.start(setFirstTimerSeconds);
        secondTimer.stop();
    }

    const startSecondTimer = () => {
        secondTimer.start(setSecondTimerSeconds);
        firstTimer.stop();
    }


    const restart = () => {
        firstTimer.restart(GAME_TIME);
        setFirstTimerSeconds(GAME_TIME);

        secondTimer.restart(GAME_TIME);
        setSecondTimerSeconds(GAME_TIME);
    }

    const stop = () => {
        firstTimer.stop();
        secondTimer.stop();
    }

    return (
        <View style={timerGroundStyle.container}>
            <PlayerButton time={PlayerTimer.getTimeWithMinutes(firstTimerSeconds)} onPress={startSecondTimer}/>

            <View style={timerGroundStyle.controls}>
                <View style={[timerGroundStyle.control, {marginRight: 90}]}>
                    <TimerButton title="Stop" onPress={stop} />
                </View>
                <View style={timerGroundStyle.control}>
                    <TimerButton title="Restart" onPress={restart} />
                </View>
            </View>
            
            <PlayerButton time={PlayerTimer.getTimeWithMinutes(secondTimerSeconds)} onPress={startFirstTimer}/>
        </View>
    )
}
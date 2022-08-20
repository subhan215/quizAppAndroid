import React, { useState, useEffect } from 'react'
import { StyleSheet, Text } from 'react-native';

function Timer() {
    const [initialMin, initialSec] = [7, 0];
    const [min, setMin] = useState(initialMin);
    const [sec, setSec] = useState(initialSec);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (sec > 0) {
                setSec(sec - 1);
            }
            if (sec === 0) {
                if (min === 0) {
                    clearInterval(myInterval);
                }
                else {
                    setMin(min - 1);
                    setSec(59)
                }
            }

        }, 1000)
        return () => clearInterval(myInterval)
    })

    return <Text style={styles.timerText}>{min}   : {(sec < 10) ? `0${sec}` : sec} </Text>


}
export default Timer
const styles = StyleSheet.create({
    timerText: {
        marginTop: 0,
        marginRight: 5,
        marginBottom: 16,
        marginLeft: 0,
        fontWeight: "bold",
        backgroundColor: "darkkhaki",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 8,
        paddingLeft: 8,
        borderRadius: 10 , 
        fontFamily: "cursive" , 
        fontSize : 20
     }
})
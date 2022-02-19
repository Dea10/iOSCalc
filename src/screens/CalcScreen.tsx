import React from 'react';
import { Text, View } from 'react-native';
import { useCalc } from '../hooks/useCalc';
import MyButton from '../components/MyButton';
import { styles } from '../theme/appTheme';

const CalcScreen = () => {

    const {
        baseNumber,
        lastResult,
        cleanAll,
        toggleMinusPlus,
        deleteLast,
        concatToBaseNumber,
        concatDecimalPoint,
        div,
        product,
        substraction,
        addition,
        equals
    } = useCalc();

    return (
        <View style={ styles.calcContainer }>
            {
                lastResult !== '0' && <Text style={ styles.prevResult } >{ lastResult }</Text>
            }
            <Text numberOfLines={1} adjustsFontSizeToFit style={ styles.mainResult } >{ baseNumber }</Text>

            <View style={ { flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 } } >
                <MyButton label='C' buttonColor='#9b9b9b' fontColor='black' action={ cleanAll } />
                <MyButton label='+/-' buttonColor='#9b9b9b' fontColor='black' action={ toggleMinusPlus } />
                <MyButton label='del' buttonColor='#9b9b9b' fontColor='black' action={ deleteLast } />
                <MyButton label='/'buttonColor='#FF9427' action={ div } />
            </View>
            <View style={ { flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 } } >
                <MyButton label='7' action={ concatToBaseNumber } />
                <MyButton label='8' action={ concatToBaseNumber } />
                <MyButton label='9' action={ concatToBaseNumber } />
                <MyButton label='X'buttonColor='#FF9427' action={ product } />
            </View>
            <View style={ { flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 } } >
                <MyButton label='4' action={ concatToBaseNumber } />
                <MyButton label='5' action={ concatToBaseNumber } />
                <MyButton label='6' action={ concatToBaseNumber } />
                <MyButton label='-'buttonColor='#FF9427' action={ substraction } />
            </View>
            <View style={ { flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 } } >
                <MyButton label='1' action={ concatToBaseNumber } />
                <MyButton label='2' action={ concatToBaseNumber } />
                <MyButton label='3' action={ concatToBaseNumber } />
                <MyButton label='+'buttonColor='#FF9427' action={ addition } />
            </View>
            <View style={ { flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 } } >
                <MyButton label='0' expandButton action={ concatToBaseNumber } />
                <MyButton label='.' action={ concatDecimalPoint } />
                <MyButton label='='buttonColor='#FF9427' action={ () => equals(true) } />
            </View>
        </View>
    );
}

export default CalcScreen;
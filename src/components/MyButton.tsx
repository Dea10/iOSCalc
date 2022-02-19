import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    label: string;
    buttonColor?: string;
    fontColor?: string;
    expandButton?: boolean;
    action: ( input: string ) => void; 
}

const MyButton = ({ label, buttonColor='#2D2D2D', fontColor='white', expandButton=false, action } : Props ) => {
    return (
        <TouchableOpacity onPress={ () => action(label) } >
            <View style={ {...styles.myButton, backgroundColor: `${buttonColor}`, width: (expandButton ? 176 : 80), paddingLeft: (expandButton ? 30 : 0) } } >
                <Text style={ {...styles.myButtonText, color: `${fontColor}`, textAlign: (expandButton ? 'left' : 'center') } } >{ label }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    myButton: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        borderRadius: 40,
        marginHorizontal: 8,
        color: 'white',
    },
    myButtonText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white'
    }
});

export default MyButton;
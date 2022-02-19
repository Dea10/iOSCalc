import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'black',
    }, 
    calcContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    prevResult: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: "right"
    },
    mainResult: {
        color: 'white',
        fontSize: 60,
        textAlign: "right"
    }
});

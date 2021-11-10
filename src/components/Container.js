import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { green, blue } from '../utils';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export const Container = ({ children }) => {
    return (
        <LinearGradient
            colors={[blue, green]}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        height: height,
        width: width,
    }
});
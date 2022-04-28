import React from "react";
import {StyleSheet, Text, View} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <></>
            </View>
            <Text>{props.text}</Text>

        </View>

    )
}

const styles = StyleSheet.create({

});

export default Task;
import { StyleSheet, View, Text } from 'react-native'

function GoalItems(props) {
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
    </View>
}

export default GoalItems;


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 17,

    },
    goalText: {
        color: '#fff'
    }
})
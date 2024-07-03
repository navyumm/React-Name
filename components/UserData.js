import { StyleSheet, Text, View } from "react-native";

export const UserData = (props) => {
  const { item } = props.item;
  return (
    <View style={style.box}>
      <Text style={style.item}>{item.name}</Text>
      <Text style={style.item}>{item.email}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  item: {
    fontSize: 20,
    margin: 10,
    flex: 1,
    margin: 2,
    backgroundColor: 'orange',
    textAlign: 'center'

  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    width: 100,
    marginBottom: 10
  }
})
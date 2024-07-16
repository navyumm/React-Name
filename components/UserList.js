import { StyleSheet, Text, View } from 'react-native'
import { getUserList } from './redux/action'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.reducer)

  useEffect(() => {
    dispatch(getUserList())
  }, []);
  console.warn("In component", userList);

  return (
    <View style={styles.container}>
      <Text>User List screen</Text>
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
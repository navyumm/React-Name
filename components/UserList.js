import { StyleSheet, Text, View } from 'react-native'
import { getUserList } from './redux/action'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList())
  }, []);

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
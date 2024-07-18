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
      {
        userList.length?
        userList.map((item) => <Text style={{fontSize:18}}>name</Text>) : null
      }
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
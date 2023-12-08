import { StyleSheet, Text, View,TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Screen1() {
    const [email, setEmail]  = useState();
    const [pass, setPass] = useState();
    const state = useSelector((state) => state.user)
    // const dispatch = useDispatch();
    // const [dataList, setData] = useState([])
    // const APIurl = `https://6555d54484b36e3a431e6fc2.mockapi.io/apick1`

    //fetch data from API
    // const fetchData= async()=>{
    //     try{
    //       const response = await fetch(APIurl, {
    //         method:'GET',
    //         headers:{
    //           'Content-Type':'application/json'
    //         }
    //       })
    //       if(!response.ok){
    //         throw new Error('fetch fail')
    //       }
    //       const data = await response.json();
    //       console.log(data)
    //       setData(data)
    //     }catch(error){
    //       throw new Error('Error',error)
    //     }
    //   }

    //   const viewList=async()=>{
    //     fetchData();
    //   }



  return (
    <View style={styles.container}>
      {/* input */}
      <View>
        <View>
          <Text>email:</Text>
          <TextInput
            placeholder='nhap email'
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View>
          <Text>Pass:</Text>
          <TextInput
            placeholder='nhap password'
            onChangeText={setPass}
            style={styles.input}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.txtBtn}>LOGIN</View>
          </TouchableOpacity>
        </View>
      </View>
      {/* renderApi */}
      <View>
        <ScrollView>
          <FlatList
            data={state}
            
          />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:10
  },
  input:{
    width:300,
    borderWidth:1,
    borderRadius: 10,
    padding: 10,
    backgroundColor:'gray'
  },
  btn:{
    width:100,
    height:40,
    backgroundColor: 'pink',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems:'center'
  },
  txtBtn:{
    fontSize: 18,
    fontWeight: 'bold'
  }
})
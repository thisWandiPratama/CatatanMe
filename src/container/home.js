import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert, ToastAndroid } from 'react-native';
import DatePicker from 'react-native-date-picker'
import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          title: "Belajar React Native sds fs df sdf s werewrwerwerwerwerewrwerwerwerwerwe",
          deadline: "05/08/2022",
          alarm: "09:90",
          lokasi: "Prabumulih",
          prioritas: 2,
          checklist: false,
        }
      ],
      modalVisible: false,
      isloading: true,
      id: 0,
      // data
      title: "",
      deadline: new Date(),
      alarm: new Date(),
      lokasi: "",
      prioritas: "",
      checklist: false,
      opendeadline: false,
      openalarm: false,
      datalist: ["Sangat Penting", "Penting", "Biasa", "Ugrent"]
    };
  }

  updateChecklist = (checklist, id) => {
    // data filter berdasar id 
    const data = this.state.todos.map(obj => {
      if (obj.id === id) {
        // merubah nilai checklist jadi navigasi awal  
        return { ...obj, checklist: !checklist };
      }
      return obj;
    });

    // update hasil data ke state todos
    this.setState({
      todos: data
    })

    // data simpan ulang ke async storage (cache hp)
    // const jsonValue = JSON.stringify(data)
    // await AsyncStorage.setItem('@todos', jsonValue)

    // notif
    ToastAndroid.show("Success Update Checklist !", ToastAndroid.LONG, ToastAndroid.CENTER);
  }


  deleteData = (id) => {
    // data filter berdasar id 
    const data = this.state.todos.filter(obj => obj.id !== id)

    // update hasil data ke state todos
    this.setState({
      todos: data
    })

    // data simpan ulang ke async storage (cache hp)
    // const jsonValue = JSON.stringify(data)
    // await AsyncStorage.setItem('@todos', jsonValue)
    // notif
    ToastAndroid.show("Success Delete Todo!", ToastAndroid.LONG, ToastAndroid.CENTER);
  }


  renderList = () => {
    return this.state.todos.map((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => Alert.alert("Detail", value.title)}
          onLongPress={() => this.deleteData(value.id)}
          style={{ height: 100, width: "90%", backgroundColor: "#fff", marginTop: 10 }}>
          <Text style={{
            fontSize: 20,
            color: "#000",
            fontWeight: "bold"
          }}>{value.deadline}</Text>
          <View style={{
            flexDirection: "row"
          }}>
            <View style={{
              width: "70%",
              flexDirection: "row",
            }}>
              <View style={{
                height: 60,
                width: 10,
                backgroundColor: value.prioritas == 0 ? "red" : value.prioritas == 1 ? "orange" : value.prioritas == 2 ? "green" : "#54FFDF"
              }} />
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 10
                }}
              >{value.title.length > 40 ? value.title.slice(0, 40) + "..." : value.title}</Text>
            </View>
            <View style={{
              width: "30%",
              flexDirection: "row",
              alignItems: "center",
            }}>
              <TouchableOpacity
                onPress={() => this.updateChecklist(value.checklist, value.id)}
              >
                {value.checklist ?
                  <Image
                    source={{
                      uri: "https://i.ibb.co/7yqJy3h/check-mark-black-outline-2.png"
                    }}
                    style={{
                      height: 40,
                      width: 40
                    }}
                  />
                  :
                  <Image
                    source={{
                      uri: "https://i.ibb.co/WxLYc41/check-mark-black-outline-1.png"
                    }}
                    style={{
                      height: 40,
                      width: 40
                    }}
                  />
                }
              </TouchableOpacity>
              <Text
                style={{
                  marginLeft: 10
                }}
              >{value.alarm}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{
          fontSize: 30,
          color: "#000",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 5
        }}> What's ToDo </Text>
        <View style={{ flex: 1, marginTop: 10, alignItems: 'center' }}>
          {this.renderList()}
        </View>
        <TouchableOpacity
          onPress={() => this.setModalVisible()}
          style={{
            height: 80,
            width: 80,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 39,
            position: "absolute",
            bottom: 20,
            left: "43%"
          }}>
          <Text style={{ fontSize: 50, color: "#fff", fontWeight: "bold", textAlign: "center" }}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert, ToastAndroid, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker'
import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
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
      datalist: ["Sangat Penting", "Penting", "Biasa", "Ugrent","/DAY"]
    };

    console.log("satu")
  }
  
  async componentDidMount() {
    try {
      const jsonValue = await AsyncStorage.getItem('@todos')
      if (jsonValue != null) {
        this.setState({
          todos: JSON.parse(jsonValue)
        })
      }

    } catch (e) {
    }
    setTimeout(() => {
      this.setState({
        isloading: false
      })
    }, 5000);
  }


  updateChecklist = async (checklist, id) => {
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
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem('@todos', jsonValue)

    // notif
    ToastAndroid.show("Success Update Checklist !", ToastAndroid.LONG, ToastAndroid.CENTER);
  }


  deleteData = async (id) => {
    // data filter berdasar id 
    const data = this.state.todos.filter(obj => obj.id !== id)

    // update hasil data ke state todos
    this.setState({
      todos: data
    })

    // data simpan ulang ke async storage (cache hp)
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem('@todos', jsonValue)
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

  save = async () => {
    if (this.state.title.length == 0 || this.state.lokasi.length == 0 || this.state.prioritas.length == 0) {
      alert("Semua data bersifat wajib diisi")
    } else {
      var datainputan = {
        "id": this.state.todos.length + 1,
        "title": this.state.title,
        "deadline": `${this.state.deadline.getDate()}/${this.state.deadline.getMonth()}/${this.state.deadline.getFullYear()}`,
        "alarm": `${this.state.alarm.getHours() < 10 ? "0" + this.state.alarm.getHours() : this.state.alarm.getHours()}:${this.state.alarm.getMinutes() < 10 ? "0" + this.state.alarm.getMinutes() : this.state.alarm.getMinutes()}`,
        "lokasi": this.state.lokasi,
        "prioritas": this.state.prioritas,
        "checklist": false
      }
      this.setState({ todos: [...this.state.todos, datainputan], title: "", lokasi: "", prioritas: "" })

      const save = [...this.state.todos, datainputan]
      const jsonValue = JSON.stringify(save)
      await AsyncStorage.setItem('@todos', jsonValue)
      this.setState({
        modalVisible: !this.state.modalVisible
      })
    }
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
          onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
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

        {/* Modal untuk tambah data */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: !this.state.modalVisible })
          }}
        >
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text style={{ fontSize: 30, color: "#000", fontWeight: "bold", marginTop: 20 }}> What's ToDo </Text>
            <View style={{ marginLeft: 20, marginRight: 20, width: "90%", height: 300, backgroundColor: "#aeaeae", borderRadius: 15 }}>
              <TextInput
                placeholder='Masukan Tugas Baru di Sini'
                multiline={true}
                style={{
                  height: 300,
                  width: "90%",
                  textAlignVertical: "top",
                  fontSize: 15
                }}
                onChangeText={title => this.setState({ title: title })}
              />
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              marginRight: 20,
              marginLeft: 20,
              flexDirection: "row",
              height: 50,
              borderBottomColor: "#aeaeae",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <View style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "#aeaeae",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 5,
                  borderRadius: 10
                }}>
                  <Text style={{
                    fontSize: 20,
                    color: "white",
                    fontWeight: "bold"
                  }}>31</Text>
                </View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Batas Waktu</Text>
              </View>
              <DatePicker
                modal
                mode={"date"}
                open={this.state.opendeadline}
                date={this.state.deadline}
                onConfirm={(date) => {
                  this.setState({ opendeadline: !this.state.opendeadline, deadline: date })
                  console.log(date)
                }}
                onCancel={() => {
                  this.setState({ opendeadline: !this.state.opendeadline })
                }}
              />
              <TouchableOpacity onPress={() => this.setState({ opendeadline: !this.state.opendeadline })} style={{ height: 30, width: 100, backgroundColor: "#aeaeae", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <Text>{this.state.deadline.getDate()}/{this.state.deadline.getMonth()}/{this.state.deadline.getFullYear()}</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              width: "90%",
              flexDirection: "row",
              height: 50,
              borderBottomColor: "#aeaeae",
              borderBottomWidth: 1,
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 20,
              marginLeft: 20,
            }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <View style={{
                  height: 30,
                  width: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 5,
                  borderRadius: 10
                }}>
                  <Image
                    source={{
                      uri: "https://i.ibb.co/WxLYc41/check-mark-black-outline-1.png"
                    }}
                    style={{
                      height: 30,
                      width: 30
                    }}
                  />

                </View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Waktu dan Pengingat</Text>
              </View>
              <DatePicker
                modal
                mode={"time"}
                open={this.state.openalarm}
                date={this.state.alarm}
                onConfirm={(date) => {
                  this.setState({ openalarm: !this.state.openalarm, alarm: date })
                  console.log(date)
                }}
                onCancel={() => {
                  this.setState({ openalarm: !this.state.openalarm })
                }}
              />
              <TouchableOpacity onPress={() => this.setState({ openalarm: !this.state.openalarm })} style={{ height: 30, width: 100, backgroundColor: "#aeaeae", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <Text>{this.state.alarm.getHours() < 10 ? <Text>0{this.state.alarm.getHours()}</Text> : this.state.alarm.getHours()}:{this.state.alarm.getMinutes() < 10 ? <Text>0{this.state.alarm.getMinutes()}</Text> : this.state.alarm.getMinutes()}</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              width: "90%",
              flexDirection: "row",
              height: 50,
              borderBottomColor: "#aeaeae",
              borderBottomWidth: 1,
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 20,
              marginLeft: 20,
            }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <View style={{
                  height: 30,
                  width: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 5,
                  borderRadius: 10
                }}>
                  <Image
                    source={{
                      uri: "https://i.ibb.co/WxLYc41/check-mark-black-outline-1.png"
                    }}
                    style={{
                      height: 30,
                      width: 30
                    }}
                  />
                </View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Lokasi</Text>
              </View>
              <View style={{ height: 50, width: "50%", backgroundColor: "#aeaeae", borderRadius: 10 }}>
                <TextInput
                  placeholder='Masukan lokasi'
                  onChangeText={(lokasi) => this.setState({ lokasi: lokasi })}
                  style={{
                    textAlign: "left"
                  }}
                />
              </View>
            </View>
            <View style={{
              width: "90%",
              flexDirection: "row",
              height: 60,
              borderBottomColor: "#aeaeae",
              borderBottomWidth: 1,
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 20,
              marginLeft: 20,
            }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <View style={{
                  height: 30,
                  width: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 5,
                  borderRadius: 10
                }}>
                  <Image
                    source={{
                      uri: "https://i.ibb.co/WxLYc41/check-mark-black-outline-1.png"
                    }}
                    style={{
                      height: 30,
                      width: 30
                    }}
                  />
                </View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Prioritas</Text>
              </View>
              <View style={{ height: 60, width: "50%", borderRadius: 10, marginRight: 24, justifyContent: "center" }}>
                <SelectDropdown
                  data={this.state.datalist}
                  onSelect={(selectedItem, index) => {
                    this.setState({
                      prioritas: index
                    })
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                  style={{
                    marginRight: 20
                  }}
                />
              </View>
            </View>
            <View style={{ width: "100%", height: 200, justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity onPress={() => this.save()} style={{ height: 50, width: "60%", justifyContent: "center", alignItems: "center", backgroundColor: "#aeaeae", borderRadius: 20 }}>
                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Simpan</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({modalVisible:!this.state.modalVisible})} style={{ height: 50, width: "60%", justifyContent: "center", alignItems: "center", backgroundColor: "#aeaeae", borderRadius: 20, marginTop:20 }}>
                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Home;

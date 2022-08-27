import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert, } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: 0
        };
    }

    GoToHome = () => {
        if (this.state.phone == 0) {
            Alert.alert("Wajib", "Phone wajib diisi")
        } else {
            this.props.navigation.navigate("Home")
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{ flex: 1, backgroundColor: "#aeaeae", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ height: "50%", width: "80%", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: "bold"
                        }}> What's ToDo </Text>
                        <Image
                            source={{ uri: "https://i.ibb.co/kqk7YW7/check-1.png" }}
                            style={{
                                height: 100,
                                width: 100
                            }}
                        />
                        <View
                            style={{
                                width: "100%",
                                height: 150,
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <TextInput
                                placeholder='Enter your phone number'
                                style={{
                                    height: 50,
                                    width: "80%",
                                    backgroundColor: "white",
                                    borderRadius: 20
                                }}
                                onChangeText={(phone) => this.setState({ phone: phone })}
                            />
                            <TouchableOpacity
                                onPress={() => this.GoToHome()}
                                style={{
                                    height: 50,
                                    width: "80%",
                                    backgroundColor: "red",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20
                                }}>
                                <Text style={{
                                    fontSize: 25,
                                    color: "#fff",
                                    fontWeight: "bold"
                                }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;

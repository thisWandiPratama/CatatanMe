// import React from 'react'
// import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

// class App extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             btn1:"Jogging Test",
//             btn2:"Play Guitar test",
//             btn3:"Pointing test",
//         }
//     }

//     render() {
//         return (
//             <View style={styles.main}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Selamat Datang</Text>
//                     <Text style={styles.subtitle}>Di aplikasi CatatanMe</Text>
//                 </View>
//                 <ScrollView>
//                     <View style={styles.content}>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>{this.state.btn1}</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>{this.state.btn2}</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>{this.state.btn3}</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Party</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Shopping</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Gaming</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Party</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Shopping</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Gaming</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Party</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Shopping</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Gaming</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Party</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Shopping</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Gaming</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Party</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Shopping</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxContent}>
//                             <Image
//                                 source={{
//                                     uri: "https://i.ibb.co/PWgcsBF/jogging.png"
//                                 }}
//                                 style={styles.icon}
//                             />
//                             <Text style={styles.textIcon}>Gaming</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>
//                 <View style={styles.footer}>
//                     <TouchableOpacity style={styles.btnStart}>
//                         <Text style={styles.textBtn}>Get Started</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
// }

// export default App


// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: "white"
//     },
//     title: {
//         fontSize: 30,
//         color: "red",
//         fontWeight: "bold",
//     },
//     subtitle: {
//         fontSize: 16
//     },
//     header: {
//         width: "100%",
//         height: 100,
//         alignItems: "center"
//     },
//     content: {
//         height: "100%",
//         width: "100%",
//         flexDirection: "row",
//         flexWrap: "wrap"
//     },
//     boxContent: {
//         height: 180,
//         width: Dimensions.get('window').width / 3.2,
//         alignItems: "center",
//         justifyContent: "center",
//         margin: 5,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 1,
//         },
//         shadowOpacity: 0.20,
//         shadowRadius: 1.41,

//         elevation: 2,
//         backgroundColor:"white",
//         borderRadius:10
//     },
//     icon: {
//         height: 100,
//         width: 100,
//         resizeMode: "contain"
//     },
//     textIcon: {
//         fontSize: 22,
//         fontWeight: "bold",
//         color: "#000"
//     },
//     btnStart: {
//         height: 50,
//         width: "80%",
//         backgroundColor: "blue",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 10
//     },
//     footer: {
//         height: 100,
//         width: "100%",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "absolute",
//         bottom: 0
//     },
//     textBtn: {
//         fontSize: 23,
//         color: "white",
//         fontWeight: "bold"
//     }
// })



import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRoute from './src/route';

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <StackRoute />
            </NavigationContainer>
        );
    }
}

export default App;

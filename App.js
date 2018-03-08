import React, { Component } from 'react';
import {
  AppRegistry,
  //StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class VolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      tinggi: 0,
      volume: 0,
      lebar: 0,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F3E5F5' }}>
        <View style={{ padding: 10, backgroundColor: '#E91E63' }}>
           <Text style={{ padding: 4, fontSize: 22, color: 'white', textAlign: 'center' }} >
           {'\n'}
            Menghitung Volume Balok
            {'\n'}
            Widhi Adnyani
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#EC407A' }}>
            <TextInput
                style={{ height: 40 }}
              placeholder=" Masukkan Panjang Balok "
              onChangeText={(panjang) => this.setState({ panjang })}
            />
            <TextInput
                  style={{ height: 40 }}
              placeholder="Masukkan Lebar Balok"
              onChangeText={(lebar) => this.setState({ lebar })}
            />
            <TextInput
                style={{ height: 40 }}
              placeholder="Masukkan Tinggi Balok"
              onChangeText={(tinggi) => this.setState({ tinggi })}
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.panjang * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#EC407A' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Panjang = { this.state.panjang} {'\n'}{'\n'}
              Lebar = { this.state.lebar} {'\n'}{'\n'}
              Tinggi = { this.state.tinggi} {'\n'}{'\n'}
              Volume = {this.state.volume}
          </Text>
         </View>

         </View>

    ); //tutup return
  } //tutup render
} //tutup class

AppRegistry.registerComponent('AppForm2', () => VolumeBalok);

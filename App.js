import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Video } from 'expo';

export default class App extends React.Component {
  playerRef = undefined
  async componentDidMount() {
    try {
      console.log('calling loadAsync')
      await this.playerRef.loadAsync(
        {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
        {shouldPlay: true}
      )
      console.log('load async success')
    }
    catch(e){
      console.log('load async failed')
      console.log(e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Video
          // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
          ref={(ref) => {this.playerRef = ref}}
        />
        <Button onPress={() => {this.componentDidMount()}} title={'call loadAsync'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

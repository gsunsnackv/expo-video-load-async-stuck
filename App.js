import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Video } from 'expo';

class PlayerSection extends React.Component {
  playerRef = undefined
  async componentDidMount() {
    try {
      console.log('component did mount calling loadAsync')
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
  componentWillUnmount() {
    console.log('unmount')
  }

  async onPress() {
    try {
      console.log('onPress calling loadAsync')
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
        <Button onPress={() => {this.onPress()}} title={'call loadAsync'} />
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

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      key: 1
    }
  }
  remountComponent() {
    this.setState({
      key: this.state.key + 1
    })
  }
  render() {
    const show = this.state.key %2 == 1
    return (
      <View style={styles.container}>
        {show
        ?<PlayerSection />
        :undefined}
        <Button onPress={() => {this.remountComponent()}} title={'remount component'} />
      </View>
    )
  }
}
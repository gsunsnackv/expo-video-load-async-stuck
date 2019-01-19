import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Video } from 'expo';

class VideoPart extends React.Component {
  videos = [
  "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "https://d301468hdcm00e.cloudfront.net/a4de002b375d79781a8d60f4fda38e6e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/459e06d07a0ea39ac87d9a10b7c357e4_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/5d1b000b0154f68c982de394cb32908a_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2226fa14a51982f411eb3f6e7707b092_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/9cc032b05e7368b18e72f0ebede3d163_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/5143b21e18c1db9b3ca01f2148312a4e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/254c978b2c06481a87849e89902a8bf3_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/f1273873a1b2658bea0fa45569841d7e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/b59b6520b94ab25c33f3c81aa03b1a06_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/7feaf60b754476f18c62bb7b5d3e4f6f_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2a210b9b2bda8bb4224084625bada35e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/d387730b9c38efb727a6125d9f8a6e2e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/068da8a77aff0a4d61e929bac08e01dc_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2927fbcf59c7aa24bbc3465b7bc9a560_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/d34d3fc9e2635db655e8f75794f60282_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/453eb6e6d92541727b958ddb791a3bfe_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/27b092c69ee1668efd9a1867e5e0c7be_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/6409c5c9506b74f16deef81e32993cea_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/0c935335b6ddfbf8f1fa3abff69297c4_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/f923370a50dcb58550e79d7808d07b13_video-file.mp4",
  ]
  playerRef = undefined
  current = 0
  async componentDidMount() {
    console.log('component did mount')
    // try {
    //   console.log('component did mount calling loadAsync')
    //   await this.playerRef.loadAsync(
    //     {uri: this.videos[this.current]},
    //     {shouldPlay: true}
    //   )
    //   console.log('load async success')
    // }
    // catch(e){
    //   console.log('load async failed')
    //   console.log(e)
    // }
  }
  async componentWillUnmount() {
    console.log('unmount')
    if (this.playerRef) {
      try {
        await this.playerRef.unloadAsync()
        console.log('unload sucess')
      }
      catch(e){
        console.log('unload failed')
      }
    }
  }

  // async onPress() {
  //   this.current = this.current + 1
  //   try {
  //     console.log('onPress calling loadAsync')
  //     await this.playerRef.loadAsync(
  //       {uri: this.videos[this.current]},
  //       {shouldPlay: true}
  //     )
  //     console.log('load async success')
  //   }
  //   catch(e){
  //     console.log('load async failed')
  //     console.log(e)
  //   }
  // }
  render() {
    const uri = this.videos[this.props.loadedTimes]
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! {this.props.loadedTimes}</Text>
        <Video
          // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          source={{ uri: uri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
          ref={(ref) => {this.playerRef = ref}}
        />
        {/* <Button onPress={() => {this.onPress()}} title={'call loadAsync'} /> */}
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
    this.state={
      key:0
    }
  }
  onPress(){
    this.setState({
      key: this.state.key + 1
    })
  }
  render() {
    
    return(
      <View style={styles.container}>
        <VideoPart key={this.state.key} loadedTimes={this.state.key}/>
        <Button title="re-mount" onPress={() => this.onPress()} />
      </View>
    )
  }
}
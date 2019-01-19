import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Video } from 'expo';

class PlayerSection extends React.Component {
  videos = ["https://d301468hdcm00e.cloudfront.net/dd8437e8dbbb6146c43d8463b5cf9ee1_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/0937aa473f2100a91efebe52cf76653b_video-file.mp4",
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
  "https://d301468hdcm00e.cloudfront.net/2d61110fc496167702b3dfc4c3b30b9a_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/0ba8243f346e2ea7acd7382ee8ffa57f_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/051d70ef912737b63da7a24e7f582adb_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/a8089d408c157d74cfba4201614d384e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2e69dff58ec592ae9d4acf3e044c7457_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/23f9b8107d93b3ab69c3cbcb62039492_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/ae406f9d0cfe1385967f9c69703d9e90_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/8831902940b8773b59dbcae3bf35b4e4_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/ab566f7706f187a7213777c077aec4bf_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/75ee6accb7f7f584346a3cb27b8d827e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/a5cb17803142a47745f96f80123aa4e6_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/ce6a95a119694c6934aac7b683999338_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/c3501a9d1c92306770bd0ec33349c0b6_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/52ff01a329ede3aa779dd7046149f42a_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/292a1f350e2345aed5852cbb74f43cf8_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/96dbdf3927ac650946123e69e797b8ee_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/466275127df73f33747f35cd18a3cfe7_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/4bac51466401993d1c3bbf82c71b3975_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/d951bae9815ff34e52771629d2676ac8_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/b037702bbc2722ab12ae368aca43dd21_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/c179b7e0c9a77a92e5f75d9cf2bd919f_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/82c892e6ab662ae0d8f45e6fed448e76_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/4f03d83c9f72d90fee689d1002407596_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/818fbe91695f33fcebac83406c8d990d_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/1dfbc29ac5e69ac699d21308ade09e5f_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/bd56626153e6f8ccfeb14cff4522226e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/0a79d8cadfaf084cf93b50bf2cd58f5b_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/f397038ef97aff7eabed818dfcf5fae1_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/3cd6e99271f5a87978152130a651aa13_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/4b690dd38c0e6c1a436910870a6983de_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/723cac3d7db2109fb4a89535060e0418_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/e125567c40b6c94c1b0eb4379d989f1c_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/65813ea8e702e5eaab03d251599af287_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/dc89c23427bf66cfa65f85eca3f1d98f_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/f94ad441e7725d40994b58d3e00f6818_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/5108154a76e1ca3694ef980893b911a7_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/0c00e87cd41f1ad1b9f41ccc6e0694ba_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/37ca1cd7c9b81b0c5e981e1f0ce2ce8b_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/999da00063f5a398fca132353297c3f4_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/70d948005071bb518d3686b42ce20bbb_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/e1632ec21020a248946d2effaf5076da_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2112d59d74ea0f3a233cbecd22b7c4dc_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/569b49f74b049a4781a03920036d3a0a_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/47dbebf90194a28c65a6b9f9c0d57bbd_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/a6a2de650bde00887857180db9896f44_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/21f0c02f954dc9478995cbe3a3beae6c_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2c8ec2d99c540293d32ddf5d76e5f9e4_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/dfb81125d56016f80f80a1acf16f4865_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/d8e247407b4bcca0313e7bb7ccba6f67_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/70c95ff982dff97089a8d8aff8bd57f0_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/13e895c9192a7375a57458cea0c94c1b_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/0ac49e0900f9c9aba5814d6871c14b12_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/f48b451152a16605a658ff0f977d39bb_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/c1738d98a5be97f879d53ef9f5007e80_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/0536a2ae120eb1f0303720695c1118f0_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/9e6f37331f844b6cf22e56f33f52d122_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/4b0fde71151156863ea9c15b5cc32338_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/87b954af9172c5b040da823b5eaf3bfb_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/9db587b7e12037c366cda43acef9b20f_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/3a2f2d0ada7c6880e91342f742719305_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/8dc0ab385db9cda31525fd36672e4867_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/f3a0d03c4d968505d6c99f38cb2b3bd7_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/3a96b4c42a55c0ac200e535f61bf3035_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/22eb5916b11796cd6325f4994f12ff56_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/b9208f1a4940668f266601c3ac3d1184_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/7dbc3d788ddbc07806e3385d13d1f098_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/97d638f5004068f2f1cf175126a5a4ae_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/71d2bbc337391bb9ea765337191cbdaa_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/413c6157575b74c921e4802335cb5792_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2fcc825a9276040288f523df0ef3cfc0_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/20fdce90a2f6b6343a5b13a25381e547_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/443ce4145194cb3f6349be5346ab03be_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/cb37924b2547786559c7b9f74b7a3c97_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/61fddf18c61456ecfed34b545d487bff_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/1adbc77018fe7b5ec58db39c602721fe_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/a2322f1d357067bd222a40616ec9665a_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/85fc67aa536126859268fa50321fc3de_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/f7ee38e11fcf585bbfd73f3262584eed_video-file.mp4",
  ]
  playerRef = undefined
  current = 0
  async componentDidMount() {
    try {
      console.log('component did mount calling loadAsync')
      await this.playerRef.loadAsync(
        {uri: this.videos[this.current]},
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
    this.current = this.current + 1
    try {
      console.log('onPress calling loadAsync')
      await this.playerRef.loadAsync(
        {uri: this.videos[this.current]},
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
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页111'
  }

  componentWillMount () { }

  componentDidMount () {console.log(111)}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick(url) {
    // console.log(url)
    Taro.navigateTo({
      url: url
    })
  }

  render () {
    return (
      <View className='index'>
        <Text onClick={this.handleClick.bind(this, '/pages/index2/index')}>Hello world!111</Text>
      </View>
    )
  }
}


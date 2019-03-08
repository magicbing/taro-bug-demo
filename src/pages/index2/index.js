import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页222'
  }

  componentWillMount () { }

  componentDidMount () {console.log(222)}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick(url) {
    Taro.navigateTo({
      url: url
    })
  }

  render () {
    return (
      <View className='index'>
        <Text onClick={this.handleClick.bind(this, '/pages/index/index')}>Hello world!222</Text>
      </View>
    )
  }
}


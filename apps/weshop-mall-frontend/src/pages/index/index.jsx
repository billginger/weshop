import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.less'

class Index extends Component {
	config = {
		navigationBarTitleText: '首页'
	}
	render () {
		return (
			<View className='index'>
				<Button className='add_btn' onClick={this.props.add}>+</Button>
				<Button className='dec_btn' onClick={this.props.dec}>-</Button>
				<Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
				<View><Text>{this.props.counter.num}</Text></View>
				<View><Text>Hello, World</Text></View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	counter: state.counter
});

const mapDispatchToProps = dispatch => ({
	add: () => dispatch(add()),
	dec: () => dispatch(minus()),
	asyncAdd: () => dispatch(asyncAdd())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);

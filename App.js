import React from 'react';
import {getPrice} from './api/cryptoCompare';

import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: ''
    }
  }

  async componentDidMount() {
    try {
      const data = await getPrice();
      this.setState({data})
    } catch (e) {
      console.log(e);
    }
  }


  emit() {
    this.setState(prevState => {
      open: !prevState.open
    })
  }

  render() {
    const {data} = this.state;
    console.log(data)
    return (
      <View style={styles.container}>
        <Text>{`BTC: $${data.USD}`}</Text>
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

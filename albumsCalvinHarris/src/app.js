import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import CardSection from './components/CardSection';

class App extends Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Header headerText={'Albums'}/> 
        <Card>
          <CardSection>
              <Text> section</Text>
          </CardSection>
          <CardSection>
              <Text> helloworld </Text>
          </CardSection>
        </Card>
      </View>
      );
  };
};
export default App;

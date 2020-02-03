import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import AppHeader from '../components/AppHeader';
export default class Favorites extends Component {
  render() {
    return (
      <Container>
        <AppHeader isHome={true} navigation={this.props.navigation}/>
        <Content style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0}}>
          <Card style={{flexBasis: '50%', backgroundColor: 'powderblue'}} >
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
            <Card style={{flexBasis: '50%',  backgroundColor: 'skyblue'}}>
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
            <Card style={{flexBasis: '50%',  backgroundColor: 'steelblue'}}>
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
            <Card style={{flexBasis: '50%',  backgroundColor: 'blue'}}>
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
            <Card style={{flexBasis: '50%',  backgroundColor: 'powderblue'}}>
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
            <Card style={{flexBasis: '50%',  backgroundColor: 'steelblue'}}>
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
        </Content>
      
      </Container>
    );
  }
}


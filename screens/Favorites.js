import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import AppHeader from '../components/AppHeader';
export default class Favorites extends Component {
  render() {
    return (
      <Container>
        <AppHeader isHome={true} navigation={this.props.navigation}/>
        <Content>
          <Card>
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    //Your text here
                  </Text>
                </Body>
              </CardItem>
           
            </Card>
            <Card>
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


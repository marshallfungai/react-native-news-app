import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import AppHeader from '../components/AppHeader';

import NewsList from '../components/NewsList';
import {getAllNews} from '../services/newsData';
export default class Favorites extends Component {
  render() {
    return (
      <Container>
        <AppHeader isHome={true} navigation={this.props.navigation}/>
        <Content style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0}}>
            {/* <NewsList articles ={this.state.topheadlines} category ='top-headlines' navigation={this.props.navigation}/> /> */}
        </Content>
      
      </Container>
    );
  }
}


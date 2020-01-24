import React, { Component } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs, ScrollableTab  } from 'native-base';
import AppHeader from '../components/AppHeader';
import NewsList from '../components/NewsList';

export default class FeedScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
         <AppHeader hastabs='true' title="News Feed" isHome={true} navigation={this.props.navigation}/>
          <Content padder={false}>
          
        
            <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="TopStories" tabStyle={{backgroundColor:'#3a5475'}} activeTabStyle={{backgroundColor:'#cc232a'}}>
                 <NewsList category ='top-headlines' navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="Economy" tabStyle={{backgroundColor:'#3a5475'}} activeTabStyle={{backgroundColor:'#cc232a'}}>              
                <NewsList category ='economy' navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="Sports" tabStyle={{backgroundColor:'#3a5475'}} activeTabStyle={{backgroundColor:'#cc232a'}}>
                <NewsList category ='sports' navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="International" tabStyle={{backgroundColor:'#3a5475'}} activeTabStyle={{backgroundColor:'#cc232a'}}>
                 <NewsList category ='international' navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="Magazine" tabStyle={{backgroundColor:'#3a5475'}} activeTabStyle={{backgroundColor:'#cc232a'}}>
                <NewsList category ='magazine' navigation={this.props.navigation}/>
            </Tab>
            </Tabs>
      
        </Content>
       
      </> 
    );
  }
}
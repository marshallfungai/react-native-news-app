import React, { Component } from 'react';
import { Image } from 'react-native';
import  propTypes from 'prop-types';
import { Container, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

export default class AppHeader extends Component {
  
  constructor(props) {
    super(props);
  }

  handleModalClose() {
    return this.props.onModalClose();
  }
 
  render() {

    let {title, isHome, isModal, hastabs} = this.props;
    
    return (

        <Header hasTabs={hastabs}  style={{backgroundColor:'#3a5475'}}>
           <Left>
            {
              isHome?
              <Button transparent onPress= {this.props.navigation.openDrawer}>
                <Icon name='menu' />
              </Button>:
               isModal?
              <Button transparent onPress={this.handleModalClose}>
                <Icon name='close' />
                </Button>:
              <Button transparent >
                <Icon name='arrow-back' />
              </Button>

            }
            
          </Left>
          
          <Body  >
              <Image  style={{marginTop:10}}  source={require('../assets/img/haberci-logo.png')} />

          </Body>
          <Right></Right>
       
        </Header>
  
    );
  }
}

AppHeader.PropTypes = {
  hastabs: propTypes.bool,
};

AppHeader.defaultProps = {
   hastabs: false,
};
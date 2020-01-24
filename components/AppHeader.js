import React, { Component } from 'react';
import { Image } from 'react-native';
import  PropTypes from 'prop-types';
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
     console.log('has tabs:: ' + hastabs);

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
             {/* <Image style={{width: 400, height: 300}} source={{ uri: 'https://www.kibrisnehaber.com/wp-content/uploads/2017/03/site-logo.png' }} /> */}
             <Image  style={{marginTop:10}}  source={require('../assets/img/haberci-logo.png')} />
             <Title>News App</Title>
          </Body>
       
        </Header>
  
    );
  }
}

AppHeader.PropTypes = {
  hastabs: PropTypes.bool,
};

AppHeader.defaultProps = {
   hastabs: false,
};
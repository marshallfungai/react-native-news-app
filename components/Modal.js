import React, { Component } from 'react';
import { Dimensions, Modal, Share, Image, StyleSheet} from 'react-native';
import { AppHeader } from './AppHeader';
import Time from './Time';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left,Right, Body, Title, View} from 'native-base';
import Toast from 'react-native-simple-toast';



export default class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.handleModalClose = this.handleModalClose.bind(this);
       
    }
    handleModalClose() {
        return this.props.onClose();
    }

    addToFavorites() {
        console.log('Trying to add to favorites');
        Toast.show('Added to favorites...', Toast.LONG);
    }

  
    render() {

        const { showModal, newsData } = this.props;
        const { title, content, urlToImage, publishedAt } = newsData;
        const placeholder_url = 'https://via.placeholder.com/300x200';
        const {height, width} = Dimensions.get('window');
        

        return (
            <Modal
                animationType='slide'
                transparent
                visible={showModal}
                onRequestClose={this.handleModalClose}
            >
                <Container style={{ margin:0, padding:0,  marginBottom: 0 }}>
                    <Header>
                        <Left>

                            <Button transparent onPress={this.handleModalClose}>
                                <Icon name='close' />
                            </Button>
                        </Left>
                        <Body>
                            {/* <Title>{title}</Title> */}
                        </Body>
                        <Right>

                        </Right>
                    </Header>
                    <View style={{ height: 200, width: width, flex: 1, margin: 0, padding: 0, textAlign:'center' }}>
                       
                        <Image source={{ uri: urlToImage }} style={{ height: 200, width: width, flex: 1, margin: 0, padding: 0 }} />
                         <Title numberOfLines={4} style={s.headerTitle}>{title}</Title>
                        <View style={s.overlay}></View>
                    </View>
                    <Content padder>
                    
                        <Card style={{ flex: 0 }}>
                            <CardItem>
                                
                                <Body>
                                    
                                    <Text>
                                        {content}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent textStyle={{ color: '#87838B' }}>
                                      
                                        <Time time={publishedAt} />
                                        
                                    </Button>
                                    <View style={{ display:'flex', flexDirection:'row', alignItems:'center'}} >
                                            <Icon style={{color:'#3a5475', marginRight: 5}} name='ios-heart'  onPress={this.addToFavorites}/> 
                                            <Text style={{fontSize: 10 }}>Add To Favorites</Text>
                                </View>
                                </Left>
                            </CardItem>
                        </Card>
                    </Content>

                </Container>
            </Modal>
        );
    }
}

const s = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    headerTitle: {
      fontSize: 20,
      zIndex: 5,
      position:'absolute', 
      color:'#fff', 
      bottom:0,  marginLeft:30, margin:30     
    
    },
 
    overlay: {
      flex: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.5,
      backgroundColor: ' linear-gradient(45deg, rgba(39,162,184,1) 0%, rgba(39,162,184,0.6) 19%, rgba(188,147,161,0) 47%, rgba(241,142,153,0) 57%);',

    }  
  });


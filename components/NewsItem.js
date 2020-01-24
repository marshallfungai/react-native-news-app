import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, List, ListItem, Text, Left, Body, Right, Button, View } from 'native-base';
import Time from './Time';

export default class NewsItem extends Component {

    constructor(props) {
        super(props);
       // this.newsItem = props.newsData;
        this.state = {
            newsItem: props.newsData
        }
        this.handleDisplayNews = this.handleDisplayNews.bind(this);
    }

    handleDisplayNews() {
       
        const {title, content, urlToImage, publishedAt} = this.props.newsData;
        const placeholder_main = 'https://via.placeholder.com/300x200';
        urlToImage != null ? urlToImage : placeholder_main;
        this.props.onPressData({  title, content, urlToImage, publishedAt });
    }

    render() {

        const placeholder_url = 'https://via.placeholder.com/150';
        return (


            <ListItem avatar onPress={this.handleDisplayNews}>
                <Left>
                    <Thumbnail square source={{ uri: this.state.newsItem.urlToImage != null ? this.state.newsItem.urlToImage : placeholder_url }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.state.newsItem.title}</Text>

                    <Text note numberOfLines={3}>{this.state.newsItem.description} . .</Text>
                    <View style={{ marginTop: 5, borderTopColor: '#ccc' }}>
                        <Time time={this.state.newsItem.publishedAt} />
                    </View>
                   
                </Body>
                
            </ListItem>


        );
    }
}
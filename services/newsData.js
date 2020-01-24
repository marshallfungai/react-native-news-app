import {newsAPI, api_url, country_target, api_key} from '../config/restAPIConfig';

export async function getNews(cat) {


    const news_cat = cat ==='top-headlines'?'':cat;  /// catergories
    const fetch_API = newsAPI +'&category='+ news_cat; //webservice constuct
  
    try {

        let data = await fetch(fetch_API);
        let news = await data.json();
        
        return news.articles;
    }catch(error) {
        throw error;
    }
}
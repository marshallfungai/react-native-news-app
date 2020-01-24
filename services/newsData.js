import {newsAPI, api_url, country_target, api_key} from '../config/restAPIConfig';

export async function getNews(cat) {

    console.log(cat);
   // const newsAPI = 'https://newsapi.org/v2/top-headlines?' +'country='+ country_target +'&' +'apiKey='+api_key;


    const news_cat = cat ==='top-headlines'?'':cat;  /// catergories
    console.log(news_cat);

    const fetch_API = newsAPI +'&category='+ news_cat; //webservice constuct
    console.log('News data :: ' + fetch_API)

    console.log('requested API ::' + fetch_API);
    try {

        let data = await fetch(newsAPI);
        let news = await data.json();
     //   console.log(news.articles);
        
        return news.articles;
    }catch(error) {
        throw error;
    }
}
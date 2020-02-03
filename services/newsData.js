import {newsAPI, api_url, country_target, api_key} from '../config/restAPIConfig';

/**
 * @Desc => get single category news
 * @param {*} cat 
 * @returns [{}] news
 */
 async function getNews(cat) {


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

/**
 * @Desc => get multiple category news
 * @param {*} => categories 
 * @returns { [], [], [] ... }  news
 */
function getAllNews(categories) {

 
   
    try {

           const newsFeeds =  categories.map((cat)=> { 
                cat = cat =='top-headlines'? '': cat;
                               
                let fetch_API = newsAPI +'&category='+ cat;
                console.log(fetch_API);
                return fetch(fetch_API).then(value => value.json())
            });
     
        return Promise.all(newsFeeds).then(data => data).catch(err=> err);    
        
    }
    catch(error) {
        console.log(error);
        throw (error);

    }
}

export {
    getNews,        //single category news
    getAllNews      //mulitple category news
}
import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    //document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`;
    
    const capitalizeFirstLetter = (value) =>{
        console.log(typeof value);
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
    }

    const updateNews = async () => {
        props.setProgress(0);
        let url = `${props.baseUrl}?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true);
        
        props.setProgress(30);
        let response = await fetch(url);        
        props.setProgress(70);

        let data = await response.json();

        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);

        props.setProgress(100);
    }

    useEffect(() => {
      updateNews();
      document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`
    }, [])
    
    
    const handlePrevClick = async () => {
        setPage(page-1);
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page+1);
        updateNews();
    }

    const fetchMoreData = async () => {
        let url = `${props.baseUrl}?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

        setPage(page+1);
        let response = await fetch(url);
        let data = await response.json();
        setArticles(articles.concat(data.articles));
        setTotalResults(data.totalResults);
    }

    return (
        <>
            <h2 style={{ textAlign: 'center' , margin:'30px 0px' , marginTop: '90px'}}> News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={totalResults !== articles.length}
                loader={<Spinner/>}
            >

                <div className='container'>
                    <div className='row'>
                        {
                            articles.map((article) => {
                                return <div className='col-md-3' key={article.url}>
                                    <NewsItem title={article.title ? article.title.slice(0, 40) : ""}
                                        description={article.description ? article.description.slice(0, 100) : ""}
                                        imageUrl={article.urlToImage ? article.urlToImage : "https://i.ytimg.com/vi/BZjnlrGlKLg/maxresdefault.jpg"}
                                        newsUrl={article.url}
                                        author={article.author}
                                        publishedAt={article.publishedAt}
                                        source={article.source ? article.source.name : ""} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </InfiniteScroll>     
        </>
    );
}



News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string,
    category: PropTypes.string
};

export default News;
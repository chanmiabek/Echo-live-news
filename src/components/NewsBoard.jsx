import  { useEffect, useState } from 'react';
import NewsItem from '../components/NewsItems';

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1ec1c0f98260447fbd95c07fcc5192ea`
        );
        const data = await res.json();
        
        setArticles(Array.isArray(data.articles) ? data.articles : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">No articles found.</p>
      )}
    </div>
  );
};

export default NewsBoard;

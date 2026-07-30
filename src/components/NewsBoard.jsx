import  { useEffect, useState } from 'react';
import NewsItem from '../components/NewsItems';

const apiKey = import.meta.env.VITE_API_KEY;

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        if (!apiKey) {
          throw new Error('VITE_API_KEY is not configured');
        }

        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
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
    <main>
      <h2 className="text-center news-heading">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : articles.length > 0 ? (
          <div className="news-grid">
            {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
            ))}
          </div>
      ) : (
        <p className="text-center">No articles found.</p>
      )}
    </main>
  );
};

export default NewsBoard;

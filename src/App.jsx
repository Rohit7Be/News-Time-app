import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './components/NewsItem';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async (query = '') => {
    try {
      let url;
      if (query) {
        // Fetch news based on search query
        url = `https://newsapi.org/v2/everything?q=${query}&apiKey=93a50df0d6b442f2a7cedc321176c531`;
      } else {
        // Fetch top headlines based on category
        url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=93a50df0d6b442f2a7cedc321176c531`;
      }
      const response = await axios.get(url);
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setLoading(true);
    setSearchQuery(''); // Clear search query when switching categories
    fetchNews();
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setLoading(true);
      fetchNews(searchQuery);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <div className="row mb-3">
          <div className="col-md-6 offset-md-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-success" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col text-center">
            <div className="btn-group">
              <button
                className={`btn ${category === 'general' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => handleCategoryChange('general')}
              >
                General
              </button>
              <button
                className={`btn ${category === 'business' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => handleCategoryChange('business')}
              >
                Business
              </button>
              <button
                className={`btn ${category === 'technology' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => handleCategoryChange('technology')}
              >
                Technology
              </button>
              <button
                className={`btn ${category === 'sports' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => handleCategoryChange('sports')}
              >
                Sports
              </button>
              <button
                className={`btn ${category === 'health' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => handleCategoryChange('health')}
              >
                Health
              </button>
              <button
                className={`btn ${category === 'entertainment' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => handleCategoryChange('entertainment')}
              >
                Entertainment
              </button>
            </div>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {articles.map((article, index) => (
              <NewsItem
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
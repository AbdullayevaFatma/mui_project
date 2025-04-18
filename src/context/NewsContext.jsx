import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);

  const getNews = async () => {
    setLoading(true);
    try {
      const base = import.meta.env.VITE_NEWS_API_BASE;
      const key = import.meta.env.VITE_API_KEY;
      const url = `${base}?q=apple&from=2025-04-15&to=2025-04-15&sortBy=popularity&apiKey=${key}`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
      setFilteredArticles(response.data.articles);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{ articles, loading, setFilteredArticles, filteredArticles }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);

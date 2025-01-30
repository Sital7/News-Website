import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Newsapp.css";
import logo from '../assets/news.png'

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      const filteredData = jsonData.articles.slice(0, 10);
      setNewsData(filteredData);
    } catch (error) {
      console.error("Failed to fetch news data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (event) => {
    setSearch(event.target.value);
    getData();
  };

  return (
    <div>
      <nav>
      <header className='App-header'>
      <img src={logo} alt="logo" className="App-logo" />
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul className="nav-links">
          <a href="#" className="nav-link">
            All News
          </a>
          <a href="#" className="nav-link">
            Trending
          </a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button className="btn" onClick={getData}>Search</button>
        </div>
        </header>
      </nav>
      <div>
        <p className="head">Stay Updated with TrendyNews</p>
      </div>
      <div className="categoryBtn">
        {["sports", "politics", "entertainment", "health", "fitness"].map(
          (category) => (
            <button
              key={category}
              onClick={handleCategory}
              value={category}
              className="categoryButton"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          )
        )}
      </div>
      <div>
        {newsData ? <Card data={newsData} /> : <p>Loading news...</p>}
      </div>
    </div>
  );
};

export default Newsapp;

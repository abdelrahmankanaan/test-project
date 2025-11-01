import { useState } from 'react';
import { articles } from '../data/articles';
import { Article } from '../types/article';
import './SearchBox.css';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  const handleSearch = (term: string): void => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    const results = articles.filter(article => 
      article.title.toLowerCase().includes(term.toLowerCase()) ||
      article.content.toLowerCase().includes(term.toLowerCase()) ||
      article.author.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  const highlightText = (text: string, highlight: string): (string | JSX.Element)[] => {
    if (!highlight.trim()) return [text];

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="highlight">{part}</mark>
      ) : (
        part
      )
    );
  };

  const displayedArticles = searchTerm ? searchResults : articles;

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="search-header-top">
          <h1 className="search-title">Search</h1>
          <div className="results-count">
            {displayedArticles.length} posts were found.
          </div>
        </div>
        
        <div className="search-input-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="search-results">
        {displayedArticles.map((article) => (
          <article key={article.id} className="article-card">
            <h2 className="article-title">
              {highlightText(article.title, searchTerm)}
            </h2>
            
            <div className="article-date">
              {article.date}
            </div>
            
            <p className="article-content">
              {highlightText(
                article.content.length > 200 
                  ? article.content.substring(0, 200) + '...' 
                  : article.content, 
                searchTerm
              )}
            </p>
            
            <div className="author-info">
              <div className="author-name">{highlightText(article.author, searchTerm)}</div>
              <div className="author-details">{article.authorInfo}</div>
              <div className="author-stats">{article.stats}</div>
            </div>
          </article>
        ))}
        
        {searchTerm && searchResults.length === 0 && (
          <div className="no-results">
            No results found for "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
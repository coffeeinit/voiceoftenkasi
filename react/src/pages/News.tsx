import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Search, Filter, TrendingUp } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'breaking', name: 'Breaking News' },
    { id: 'local', name: 'Local News' },
    { id: 'politics', name: 'Politics' },
    { id: 'sports', name: 'Sports' },
    { id: 'business', name: 'Business' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'health', name: 'Health' },
    { id: 'education', name: 'Education' },
    { id: 'environment', name: 'Environment' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Major Infrastructure Project Announced for Tenkasi District",
      excerpt: "State government allocates ₹500 crores for road expansion and public facility improvements across the district.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Infrastructure",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      readTime: "5 min read",
      isBreaking: true
    },
    {
      id: 2,
      title: "Tenkasi Farmers Adopt Sustainable Agriculture Practices",
      excerpt: "Local farmers see increased yields and reduced costs through innovative organic farming techniques.",
      image: "https://images.pexels.com/photos/1872905/pexels-photo-1872905.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Agriculture",
      author: "Priya Sharma",
      date: "2024-01-14",
      readTime: "7 min read",
      isBreaking: false
    },
    {
      id: 3,
      title: "New Healthcare Center Opens in Rural Tenkasi",
      excerpt: "State-of-the-art medical facility brings advanced healthcare services to underserved communities.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Healthcare",
      author: "Dr. Meera Nair",
      date: "2024-01-13",
      readTime: "4 min read",
      isBreaking: false
    },
    {
      id: 4,
      title: "Educational Innovation Program Launched in Local Schools",
      excerpt: "Technology-based learning initiatives aim to improve student engagement and academic performance.",
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Education",
      author: "Arun Patel",
      date: "2024-01-12",
      readTime: "6 min read",
      isBreaking: false
    },
    {
      id: 5,
      title: "Environmental Conservation Efforts Show Positive Results",
      excerpt: "Community-led tree planting and waste management programs contribute to cleaner environment.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Environment",
      author: "Suresh Babu",
      date: "2024-01-11",
      readTime: "5 min read",
      isBreaking: false
    },
    {
      id: 6,
      title: "Local Sports Team Wins State Championship",
      excerpt: "Tenkasi's cricket team brings home the trophy after defeating teams from across Tamil Nadu.",
      image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sports",
      author: "Kavitha Rajan",
      date: "2024-01-10",
      readTime: "3 min read",
      isBreaking: false
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           article.category.toLowerCase() === selectedCategory ||
                           (selectedCategory === 'breaking' && article.isBreaking);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h1>
            <p className="text-lg text-gray-600">Stay informed with the latest updates from Tenkasi and beyond</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No news articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {article.isBreaking && (
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                        BREAKING
                      </span>
                    )}
                    <span className="bg-gray-900 bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                  {article.isBreaking && (
                    <div className="absolute top-4 right-4">
                      <TrendingUp className="h-5 w-5 text-red-600" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                    <Link to={`/article/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Load More Button */}
      <div className="text-center pb-12">
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default News;
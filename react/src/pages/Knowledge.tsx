import React from 'react';
import { BookOpen, Video, FileText, Download, Search, Filter, Clock, User } from 'lucide-react';

const Knowledge = () => {
  const resources = [
    {
      id: 1,
      title: "Introduction to Web Development",
      type: "Course",
      category: "Programming",
      duration: "8 weeks",
      level: "Beginner",
      description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Tech Team",
      downloads: 245,
      featured: true
    },
    {
      id: 2,
      title: "Digital Marketing Essentials",
      type: "Video Series",
      category: "Marketing",
      duration: "4 hours",
      level: "Intermediate",
      description: "Master the basics of digital marketing including SEO, social media, and content marketing.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Marketing Team",
      downloads: 189,
      featured: false
    },
    {
      id: 3,
      title: "Entrepreneurship Guide",
      type: "E-book",
      category: "Business",
      duration: "2 hours read",
      level: "Beginner",
      description: "Complete guide to starting and running a successful business in rural areas.",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Business Team",
      downloads: 312,
      featured: false
    },
    {
      id: 4,
      title: "Modern Agriculture Techniques",
      type: "Workshop",
      category: "Agriculture",
      duration: "6 hours",
      level: "Intermediate",
      description: "Learn about sustainable farming practices and modern agricultural technologies.",
      image: "https://images.pexels.com/photos/1872905/pexels-photo-1872905.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Agriculture Team",
      downloads: 156,
      featured: false
    },
    {
      id: 5,
      title: "Financial Literacy Basics",
      type: "Course",
      category: "Finance",
      duration: "5 weeks",
      level: "Beginner",
      description: "Understanding personal finance, banking, and investment basics for rural communities.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Finance Team",
      downloads: 278,
      featured: false
    },
    {
      id: 6,
      title: "Career Development Roadmap",
      type: "Guide",
      category: "Career",
      duration: "1 hour read",
      level: "All Levels",
      description: "Step-by-step guide to building a successful career in technology and innovation.",
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Career Team",
      downloads: 423,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: 6 },
    { id: 'programming', name: 'Programming', count: 1 },
    { id: 'marketing', name: 'Marketing', count: 1 },
    { id: 'business', name: 'Business', count: 1 },
    { id: 'agriculture', name: 'Agriculture', count: 1 },
    { id: 'finance', name: 'Finance', count: 1 },
    { id: 'career', name: 'Career', count: 1 }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Course':
        return BookOpen;
      case 'Video Series':
        return Video;
      case 'E-book':
      case 'Guide':
        return FileText;
      case 'Workshop':
        return User;
      default:
        return BookOpen;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Knowledge Center</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Access our comprehensive library of courses, guides, and resources designed to 
              empower your learning journey and career development.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
                <option value="">All Types</option>
                <option value="course">Courses</option>
                <option value="video">Video Series</option>
                <option value="ebook">E-books</option>
                <option value="workshop">Workshops</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Downloads</h3>
              <div className="space-y-3">
                {resources.slice(0, 3).map((resource) => (
                  <div key={resource.id} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
                      <Download className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">{resource.title}</p>
                      <p className="text-xs text-gray-500">{resource.downloads} downloads</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="lg:col-span-3">
            {/* Featured Resource */}
            {resources.filter(resource => resource.featured).map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        FEATURED
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {resource.type}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{resource.title}</h2>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {resource.duration}
                      </span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {resource.author}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(resource.level)}`}>
                        {resource.level}
                      </span>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Access Resource
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Other Resources */}
            <div className="grid md:grid-cols-2 gap-6">
              {resources.filter(resource => !resource.featured).map((resource) => {
                const TypeIcon = getTypeIcon(resource.type);
                return (
                  <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {resource.type}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <TypeIcon className="h-4 w-4 text-gray-700" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(resource.level)}`}>
                          {resource.level}
                        </span>
                        <span className="text-sm text-gray-500">{resource.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Download className="h-4 w-4 mr-1" />
                          {resource.downloads}
                        </div>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                          Access
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">Request new resources or suggest topics you'd like us to cover</p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Request Resource
          </button>
        </div>
      </section>
    </div>
  );
};

export default Knowledge;
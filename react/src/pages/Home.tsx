import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Lightbulb, Heart, BookOpen, Briefcase, Stethoscope, GraduationCap, Star, Award, TrendingUp } from 'lucide-react';

const Home = () => {
  const majorActivities = [
    {
      id: 1,
      title: "Startup Initiatives",
      description: "Fostering a culture of innovation and entrepreneurship. Providing a platform for startups to thrive in a supportive ecosystem.",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "Jobs4Life",
      description: "Bridging the gap between job seekers and opportunities. Creating sustainable employment opportunities for the local community.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Briefcase,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Tech Education",
      description: "Empowering the youth through cutting-edge technology education. Preparing the workforce for the challenges and opportunities of the digital age.",
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: BookOpen,
      color: "from-green-400 to-green-600"
    },
    {
      id: 4,
      title: "Empowering Farmers",
      description: "Implementing sustainable agricultural practices. Enhancing the livelihoods of farmers through technology-driven solutions.",
      image: "https://images.pexels.com/photos/1872905/pexels-photo-1872905.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Users,
      color: "from-emerald-400 to-emerald-600"
    },
    {
      id: 5,
      title: "Free Education Initiatives",
      description: "We believe education is the key to unlocking one's potential. Our foundation actively engages in providing free education activities, with a special focus on spoken English.",
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: GraduationCap,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 6,
      title: "Career Building for Graduates",
      description: "Recognizing the challenges that graduates face as they enter the workforce, Voice of Tenkasi Foundation is dedicated to facilitating their career growth.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Target,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      id: 7,
      title: "Health is Happiness",
      description: "We strongly believe that health is the foundation of a happy and fulfilling life. Our foundation is actively involved in promoting health and well-being within the community.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Stethoscope,
      color: "from-red-400 to-red-600"
    },
    {
      id: 8,
      title: "What Next After High School",
      description: "Guiding and mentoring students on the various paths available after high school is a crucial aspect of our educational initiatives.",
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: GraduationCap,
      color: "from-pink-400 to-pink-600"
    }
  ];

 
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Transforming Tenkasi into a Global Tech Hub by 2032</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="block">Empowering Lives</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Enriching Futures
              </span>
              <span className="block text-3xl md:text-4xl mt-4 text-blue-200">of Tenkasi</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Witness the evolution of Tenkasi rural into a global tech hub of India by 2032. 
              We strive to be the beacon of hope and support for families seeking to navigate 
              the journey from high school to a fulfilling tech career.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/what-we-do"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg"
              >
                Explore Our Programs
              </Link>
              <Link
                to="/join-us"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg"
              >
                Join Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to "Voice of Tenkasi" and witness the evolution of Tenkasi rural into a global tech hub of India by 2032. 
              We strive to be the beacon of hope and support for families seeking to navigate the journey from high school to a fulfilling tech career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empower the Community</h3>
              <p className="text-gray-600 leading-relaxed">Through accessible education and innovative learning programs that bridge the digital divide.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Foster Innovation</h3>
              <p className="text-gray-600 leading-relaxed">In key sectors like AI, semiconductors, IT, manufacturing and agriculture through research and development.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Establish Tenkasi</h3>
              <p className="text-gray-600 leading-relaxed">As a global technological powerhouse by creating sustainable economic opportunities and infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission and Vision</h2>
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Educate, Innovate, Transform
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To elevate Tenkasi rural into a developed, well-connected and self-reliant region through 
                the use of technology, education and sustainable initiatives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="text-gray-700 font-medium">Empowering Lives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700 font-medium">Enriching Futures</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl text-white">
              <blockquote className="text-2xl italic text-center leading-relaxed">
                "We are a community in pursuit of realizing a developed Tenkasi region."
              </blockquote>
              <div className="text-center mt-6">
                <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Major Activities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Major Activities</h2>
            <p className="text-xl text-gray-600">
              Comprehensive programs designed to transform lives and build futures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {majorActivities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className={`bg-gradient-to-r ${activity.color} p-3 rounded-xl shadow-lg`}>
                      <activity.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600">Measuring our success through the lives we've transformed</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Students Trained</div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Jobs Placed</div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Startups Supported</div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-100 to-red-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-10 w-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Programs Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of the transformation. Help us build a brighter future for Tenkasi and create lasting impact in our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/join-us"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg"
            >
              Get Involved Today
            </Link>
            <Link
              to="/donate"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg"
            >
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
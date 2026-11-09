import React from 'react';
import { Globe, Users, Award, Target, Heart, Shield, Eye, Zap, BookOpen, Lightbulb, Star, TrendingUp } from 'lucide-react';

const About = () => {
  const foundationValues = [
    {
      icon: BookOpen,
      title: "Education First",
      description: "We believe education is the foundation for all development and progress in rural communities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and methods to solve rural challenges and create opportunities."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We prioritize community needs and grassroots development for sustainable impact."
    },
    {
      icon: Target,
      title: "Sustainable Impact",
      description: "We work towards long-term, sustainable solutions for rural development and growth."
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "500+ Students Trained",
      organization: "Technology and Skill Development Programs",
      icon: Users,
      color: "from-blue-400 to-blue-600"
    },
    {
      year: "2022",
      title: "50+ Startups Supported",
      organization: "Entrepreneurship Development Initiative",
      icon: Lightbulb,
      color: "from-purple-400 to-purple-600"
    },
    {
      year: "2021",
      title: "Community Impact Award",
      organization: "Tamil Nadu Rural Development Council",
      icon: Award,
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  const patrons = [
    {
      name: "Sridhar Vembu",
      title: "CEO, Zoho Corporation",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Sridhar Vembu, the visionary founder and CEO of Zoho Corporation, has transformed rural India into tech hubs, emphasizing the future of offices in villages. From a middle-class background, he earned a Ph.D. from Princeton before founding Zoho, a highly successful bootstrapped company, with a reported revenue of over $1 billion. Vembu's commitment extends beyond business, with initiatives like Zoho Schools and Zoho University, aiming to train youth in underprivileged areas and addressing India's unemployment crisis. Awarded the Padma Shri, he exemplifies a grounded, nationalist leader, urging entrepreneurs to build products for the world and to practice simple living."
    },
    {
      name: "Ananthan Ayyasamy",
      title: "Semiconductor Expert & Rural Advocate",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ananthan Ayyasamy, a semiconductor expert turned rural advocate, left a successful career at Intel in the US to revitalize Tenkasi. His dedication stems from personal struggles, inspiring his focus on education, tech, and entrepreneurship. Through 'Startup Tenkasi' and infrastructural dreams, he aims for economic growth and tech innovation. Holding degrees from NIT Trichy and ASU, with patents in semiconductor design, he's now a BJP leader and a catalyst for rural education and community development. Ananthan's journey, from farm laborer to changemaker, fuels hope and progress in Tenkasi, driving Voice of Tenkasi Foundation's impactful initiatives for community welfare and growth."
    }
  ];

  const volunteers = [
    "Siddharthan", "Jagaveera Rama Pandian", "Modi Kannan", "K M Manikandan", "V Gopi", 
    "Kannan Shanmugavel", "Sankar", "Subburaja", "Sankarasubramanian", "Poopathi Raja",
    "Viswanathan Chithambaram", "A mari Selvam", "S Vengadachalapathy", "R Ayyalgurunthan",
    "M Sairamkumar", "Karthik", "Karthi", "Muthuraj", "M praburaj", "A Marikannan"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Transforming Communities Since 2020</span>
            </div>
            <Globe className="h-20 w-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Voice of Tenkasi Foundation</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Empowering lives and enriching futures through education, innovation, and community development since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Beginning</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Voice of Tenkasi Foundation was born from a vision to transform rural Tenkasi into a global tech hub by 2032. 
                  We recognized the immense potential in our youth and the need for accessible, quality education and career guidance.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Starting with a small group of passionate educators and technologists, we began our journey to bridge the gap 
                  between rural talent and global opportunities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl">
                <blockquote className="text-2xl italic text-blue-800 text-center leading-relaxed">
                  "We are a community in pursuit of realizing a developed Tenkasi region."
                </blockquote>
                <div className="text-center mt-6">
                  <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patrons Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Patrons</h2>
            <p className="text-xl text-gray-600">Visionary leaders guiding our mission</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {patrons.map((patron, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={patron.image}
                    alt={patron.name}
                    className="w-24 h-24 rounded-full object-cover mr-6 border-4 border-blue-100 shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{patron.name}</h3>
                    <p className="text-blue-600 font-semibold text-lg">{patron.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{patron.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To elevate Tenkasi rural into a developed, well-connected and self-reliant region through 
                the use of technology, education and sustainable initiatives. We empower communities by providing 
                education, resources, leadership training, and support for their initiatives.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-xl">
              <Heart className="h-12 w-12 text-purple-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To witness the evolution of Tenkasi rural into a global tech hub of India by 2032. We envision 
                a thriving ecosystem where every individual has access to quality education, meaningful employment, 
                and the opportunity to contribute to technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to community development focuses on three key areas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empower the Community</h3>
              <p className="text-gray-600 leading-relaxed">Through accessible education and innovative learning programs that bridge the digital divide.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Foster Innovation</h3>
              <p className="text-gray-600 leading-relaxed">In key sectors like AI, semiconductors, IT, manufacturing and agriculture through research and development.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Establish Tenkasi</h3>
              <p className="text-gray-600 leading-relaxed">As a global technological powerhouse by creating sustainable economic opportunities and infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Voice of Tenkasi Foundation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foundationValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-blue-100">Measuring our success through the lives we've transformed</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">500+</div>
              <div className="text-blue-200 text-lg">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">150+</div>
              <div className="text-blue-200 text-lg">Jobs Placed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">50+</div>
              <div className="text-blue-200 text-lg">Startups Supported</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">25+</div>
              <div className="text-blue-200 text-lg">Programs Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Award className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to community development has been recognized by various organizations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.organization}</p>
                <p className="text-sm text-gray-500 font-semibold">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Volunteers</h2>
            <p className="text-xl text-gray-600">The dedicated individuals who make our mission possible</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {volunteers.map((volunteer, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{volunteer}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Join Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Foundation Office</h3>
              <p className="text-blue-100 leading-relaxed">
                6/281A, Bharathi Thenvadal St<br />
                Viswanathaperi, Sivagiri Tk<br />
                Tenkasi Dt, 627757<br />
                India
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact</h3>
              <p className="text-blue-100 leading-relaxed">
                Phone: 87782 00402<br />
                Email: info@voiceoftenkasi.org<br />
                Volunteer: volunteer@voiceoftenkasi.org
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get Involved</h3>
              <p className="text-blue-100 leading-relaxed">
                Join our mission to transform Tenkasi into a global tech hub. 
                Volunteer, donate, or partner with us to make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
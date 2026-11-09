import React from 'react';
import { BookOpen, Users, Lightbulb, Heart, Target, Briefcase, Stethoscope, GraduationCap, ArrowRight, CheckCircle, Star } from 'lucide-react';

const WhatWeDo = () => {
  const programs = [
    {
      id: 1,
      title: "Startup Initiatives",
      description: "Fostering a culture of innovation and entrepreneurship. Providing a platform for startups to thrive in a supportive ecosystem with mentorship, funding guidance, and networking opportunities.",
      icon: Lightbulb,
      features: ["Business Mentorship", "Funding Guidance", "Networking Events", "Innovation Labs"],
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-yellow-400 to-orange-500",
      stats: { beneficiaries: "50+", success: "85%" }
    },
    {
      id: 2,
      title: "Jobs4Life",
      description: "Bridging the gap between job seekers and opportunities. Creating sustainable employment opportunities for the local community through comprehensive career development programs.",
      icon: Briefcase,
      features: ["Career Counseling", "Skill Development", "Job Placement", "Industry Connections"],
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-400 to-blue-600",
      stats: { beneficiaries: "150+", success: "92%" }
    },
    {
      id: 3,
      title: "Tech Education",
      description: "Empowering the youth through cutting-edge technology education. Preparing the workforce for the challenges and opportunities of the digital age with hands-on learning.",
      icon: BookOpen,
      features: ["Coding Bootcamps", "AI & ML Training", "Digital Literacy", "Tech Workshops"],
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-400 to-green-600",
      stats: { beneficiaries: "500+", success: "88%" }
    },
    {
      id: 4,
      title: "Empowering Farmers",
      description: "Implementing sustainable agricultural practices. Enhancing the livelihoods of farmers through technology-driven solutions and modern farming techniques.",
      icon: Users,
      features: ["Smart Farming", "Market Access", "Technology Training", "Sustainable Practices"],
      image: "https://images.pexels.com/photos/1872905/pexels-photo-1872905.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-emerald-400 to-emerald-600",
      stats: { beneficiaries: "200+", success: "90%" }
    },
    {
      id: 5,
      title: "Free Education Initiatives",
      description: "We believe education is the key to unlocking one's potential. Our foundation actively engages in providing free education activities, with a special focus on spoken English and digital literacy.",
      icon: GraduationCap,
      features: ["Free Classes", "Scholarship Programs", "Learning Materials", "Online Resources"],
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-400 to-purple-600",
      stats: { beneficiaries: "300+", success: "95%" }
    },
    {
      id: 6,
      title: "Career Building for Graduates",
      description: "Recognizing the challenges that graduates face as they enter the workforce, Voice of Tenkasi Foundation is dedicated to facilitating their career growth through professional development.",
      icon: Target,
      features: ["Resume Building", "Interview Prep", "Professional Skills", "Industry Exposure"],
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-indigo-400 to-indigo-600",
      stats: { beneficiaries: "120+", success: "87%" }
    },
    {
      id: 7,
      title: "Health is Happiness",
      description: "We strongly believe that health is the foundation of a happy and fulfilling life. Our foundation is actively involved in promoting health and well-being within the community.",
      icon: Stethoscope,
      features: ["Health Camps", "Wellness Programs", "Preventive Care", "Health Education"],
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-red-400 to-red-600",
      stats: { beneficiaries: "1000+", success: "93%" }
    },
    {
      id: 8,
      title: "What Next After High School",
      description: "Guiding and mentoring students on the various paths available after high school is a crucial aspect of our educational initiatives. We provide comprehensive career guidance.",
      icon: GraduationCap,
      features: ["Career Guidance", "College Prep", "Skill Assessment", "Future Planning"],
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-pink-400 to-pink-600",
      stats: { beneficiaries: "250+", success: "89%" }
    }
  ];

  const additionalPrograms = [
    {
      title: "Education Programs",
      description: "Enabling access to quality education for children and adults through scholarships, school development projects, and skill-building programs.",
      icon: BookOpen,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Healthcare Initiatives", 
      description: "Promoting well-being by supporting healthcare facilities, organizing medical camps, and creating awareness about preventive healthcare.",
      icon: Stethoscope,
      color: "from-green-400 to-green-600"
    },
    {
      title: "Sustainable Development",
      description: "Implementing projects that contribute to the sustainable development of Tenkasi, including clean energy initiatives, waste management, and environmental conservation.",
      icon: Target,
      color: "from-purple-400 to-purple-600"
    }
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
              <span className="text-sm font-medium">Comprehensive Community Development Programs</span>
            </div>
            <BookOpen className="h-20 w-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">What We Do</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive programs designed to transform lives and build sustainable futures 
              for the Tenkasi community through education, innovation, and empowerment.
            </p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Major Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each program is designed with specific goals to address community needs and create lasting impact
            </p>
          </div>
          
          <div className="grid gap-16">
            {programs.map((program, index) => (
              <div key={program.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex justify-between items-end">
                        <div className={`bg-gradient-to-r ${program.color} p-4 rounded-xl shadow-lg`}>
                          <program.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-white text-right">
                          <div className="text-2xl font-bold">{program.stats.beneficiaries}</div>
                          <div className="text-sm opacity-90">Beneficiaries</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mr-6 shadow-lg`}>
                        <program.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{program.title}</h2>
                        <div className="flex items-center mt-2">
                          <div className="text-green-600 font-semibold mr-2">{program.stats.success} Success Rate</div>
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4">Program Features:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting comprehensive community development through specialized programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalPrograms.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <program.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Measuring success through the lives we've transformed and the futures we've built
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
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

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our programs and be part of the transformation. Together, we can build a brighter future for Tenkasi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              Apply Now
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
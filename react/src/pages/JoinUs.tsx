import React, { useState } from 'react';
import { Users, Heart, Target, Lightbulb, Mail, Phone, MapPin, Send } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    experience: '',
    availability: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      experience: '',
      availability: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const volunteerRoles = [
    {
      id: 1,
      title: "Tech Mentor",
      description: "Guide students in programming, web development, and technology skills.",
      icon: Lightbulb,
      commitment: "4-6 hours/week",
      skills: ["Programming", "Teaching", "Patience"]
    },
    {
      id: 2,
      title: "Community Outreach Coordinator",
      description: "Help organize events and connect with local communities.",
      icon: Users,
      commitment: "6-8 hours/week",
      skills: ["Communication", "Organization", "Local Knowledge"]
    },
    {
      id: 3,
      title: "Career Counselor",
      description: "Provide career guidance and job placement support to graduates.",
      icon: Target,
      commitment: "3-5 hours/week",
      skills: ["Career Guidance", "Industry Knowledge", "Counseling"]
    },
    {
      id: 4,
      title: "Content Creator",
      description: "Create educational content, videos, and documentation for programs.",
      icon: Heart,
      commitment: "5-7 hours/week",
      skills: ["Writing", "Video Editing", "Design"]
    }
  ];

  const benefits = [
    {
      title: "Skill Development",
      description: "Enhance your leadership, communication, and technical skills through hands-on experience."
    },
    {
      title: "Community Impact",
      description: "Make a real difference in the lives of rural youth and contribute to regional development."
    },
    {
      title: "Networking",
      description: "Connect with like-minded individuals, professionals, and industry experts."
    },
    {
      title: "Recognition",
      description: "Receive certificates and recognition for your valuable contributions to the community."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Join Our Mission</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Be part of the transformation. Help us empower lives and enrich futures 
              in the Tenkasi community through your skills, passion, and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Voice of Tenkasi?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When you join us, you become part of a movement that's transforming rural communities 
              through education, innovation, and empowerment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600">
              Choose a role that matches your skills and interests
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerRoles.map((role) => (
              <div key={role.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <role.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                    <p className="text-sm text-gray-600">{role.commitment}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{role.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, index) => (
                      <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Apply for This Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Application</h2>
              <p className="text-lg text-gray-600">
                Fill out this form to start your journey with us
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    >
                      <option value="">Select an area</option>
                      <option value="tech-mentor">Tech Mentor</option>
                      <option value="community-outreach">Community Outreach</option>
                      <option value="career-counselor">Career Counselor</option>
                      <option value="content-creator">Content Creator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Relevant Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    >
                      <option value="">Select experience level</option>
                      <option value="none">No prior experience</option>
                      <option value="some">Some experience</option>
                      <option value="experienced">Experienced</option>
                      <option value="expert">Expert level</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    >
                      <option value="">Select availability</option>
                      <option value="weekends">Weekends only</option>
                      <option value="evenings">Weekday evenings</option>
                      <option value="flexible">Flexible schedule</option>
                      <option value="full-time">Full-time availability</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join us? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-vertical"
                    placeholder="Tell us about your motivation and how you'd like to contribute..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Submit Application</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Have questions about volunteering? We're here to help!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">volunteer@voiceoftenkasi.org</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">87782 00402</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Tenkasi, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
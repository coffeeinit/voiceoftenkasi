import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      location: "Tenkasi Community Center",
      description: "Annual summit bringing together tech leaders, entrepreneurs, and students to discuss the future of technology in rural development.",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technology",
      attendees: 200,
      featured: true
    },
    {
      id: 2,
      title: "Career Guidance Workshop",
      date: "2024-02-20",
      time: "2:00 PM - 6:00 PM",
      location: "Government Higher Secondary School",
      description: "Interactive workshop for high school students exploring career opportunities in technology and entrepreneurship.",
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Education",
      attendees: 150,
      featured: false
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "2024-02-28",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Hub, Tenkasi",
      description: "Young entrepreneurs present their innovative ideas to a panel of investors and industry experts.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Entrepreneurship",
      attendees: 100,
      featured: false
    },
    {
      id: 4,
      title: "Digital Literacy Training",
      date: "2024-03-05",
      time: "9:00 AM - 12:00 PM",
      location: "Village Community Hall",
      description: "Basic computer and internet skills training for rural community members of all ages.",
      image: "https://images.pexels.com/photos/1181375/pexels-photo-1181375.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Digital Skills",
      attendees: 80,
      featured: false
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Agricultural Technology Fair",
      date: "2024-01-15",
      description: "Showcasing modern farming techniques and technology solutions for local farmers.",
      attendees: 300,
      highlights: ["Smart irrigation demos", "Drone technology showcase", "Organic farming workshops"]
    },
    {
      id: 6,
      title: "Women in Tech Conference",
      date: "2023-12-10",
      description: "Empowering women in technology with inspiring talks and networking opportunities.",
      attendees: 180,
      highlights: ["Inspiring keynote speakers", "Networking sessions", "Skill development workshops"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Calendar className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Events</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join us for inspiring events, workshops, and conferences that drive innovation 
              and community development in Tenkasi.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Event */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      FEATURED EVENT
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{event.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-3 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="h-5 w-5 mr-3 text-blue-600" />
                      <span>{event.attendees} Expected Attendees</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Past Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                  <Users className="h-4 w-4 ml-4 mr-2" />
                  <span>{event.attendees} Attendees</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Event Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="h-3 w-3 mr-2 text-blue-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Our Events</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter to receive event notifications and updates</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
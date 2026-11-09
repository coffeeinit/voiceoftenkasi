import React from 'react';
import { Briefcase, GraduationCap, Users, Target, Clock, MapPin, ArrowRight } from 'lucide-react';

const Opportunities = () => {
  const jobOpportunities = [
    {
      id: 1,
      title: "Software Developer",
      company: "TechStart Innovations",
      location: "Tenkasi",
      type: "Full-time",
      experience: "1-3 years",
      skills: ["React", "Node.js", "Python", "MongoDB"],
      description: "Join our growing team to develop innovative software solutions for rural development.",
      posted: "2024-01-10",
      deadline: "2024-02-15"
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      company: "Voice of Tenkasi Foundation",
      location: "Tenkasi",
      type: "Part-time",
      experience: "0-2 years",
      skills: ["Social Media", "Content Creation", "SEO", "Analytics"],
      description: "Help us spread awareness about our programs and initiatives through digital channels.",
      posted: "2024-01-08",
      deadline: "2024-02-10"
    },
    {
      id: 3,
      title: "Agricultural Technology Consultant",
      company: "AgriTech Solutions",
      location: "Tenkasi District",
      type: "Contract",
      experience: "2-5 years",
      skills: ["Agriculture", "IoT", "Data Analysis", "Farming Technology"],
      description: "Support farmers in adopting modern agricultural technologies and sustainable practices.",
      posted: "2024-01-05",
      deadline: "2024-02-20"
    }
  ];

  const scholarships = [
    {
      id: 1,
      title: "Tech Excellence Scholarship",
      amount: "₹50,000",
      eligibility: "High school graduates pursuing engineering or computer science",
      deadline: "2024-03-31",
      description: "Supporting bright students from rural backgrounds to pursue technology education.",
      requirements: ["Minimum 85% in 12th grade", "Family income below ₹3 lakhs", "Tenkasi district resident"]
    },
    {
      id: 2,
      title: "Women in STEM Scholarship",
      amount: "₹75,000",
      eligibility: "Female students in STEM fields",
      deadline: "2024-04-15",
      description: "Empowering women to excel in science, technology, engineering, and mathematics.",
      requirements: ["Female candidate", "Pursuing STEM degree", "Academic excellence", "Leadership potential"]
    },
    {
      id: 3,
      title: "Rural Innovation Grant",
      amount: "₹1,00,000",
      eligibility: "Young entrepreneurs with innovative ideas",
      deadline: "2024-05-30",
      description: "Funding innovative projects that can benefit rural communities.",
      requirements: ["Age 18-30", "Innovative business idea", "Rural impact potential", "Detailed project plan"]
    }
  ];

  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      duration: "3 months",
      stipend: "₹15,000/month",
      skills: ["Programming", "Web Development", "Database Management"],
      description: "Hands-on experience in software development with mentorship from industry experts."
    },
    {
      id: 2,
      title: "Community Outreach Intern",
      duration: "6 months",
      stipend: "₹12,000/month",
      skills: ["Communication", "Project Management", "Social Work"],
      description: "Work directly with communities to implement development programs and initiatives."
    },
    {
      id: 3,
      title: "Digital Content Intern",
      duration: "4 months",
      stipend: "₹10,000/month",
      skills: ["Content Writing", "Video Editing", "Social Media"],
      description: "Create engaging content to promote our programs and document success stories."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Briefcase className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Opportunities</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover career opportunities, scholarships, and internships that can help you 
              build a successful future in technology and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Job Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Job Opportunities</h2>
          </div>
          <div className="grid gap-6">
            {jobOpportunities.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900 mr-3">{job.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Target className="h-4 w-4 mr-1" />
                        {job.experience}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        Deadline: {new Date(job.deadline).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <GraduationCap className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Scholarships & Grants</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.title}</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">{scholarship.amount}</div>
                  <p className="text-sm text-gray-600">{scholarship.eligibility}</p>
                </div>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {scholarship.requirements.map((req, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="h-3 w-3 mr-2 text-green-600" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-3">
                    Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                  </p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Users className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Internship Programs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship) => (
              <div key={internship.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h3>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <span>{internship.duration}</span>
                    <span>•</span>
                    <span className="font-semibold text-purple-600">{internship.stipend}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Skills You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, index) => (
                      <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to apply for any opportunity
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Opportunity</h3>
              <p className="text-gray-600">Browse and select the opportunity that matches your interests and skills.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prepare Documents</h3>
              <p className="text-gray-600">Gather required documents including resume, certificates, and portfolio.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete the online application form with all required information.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600">Participate in the selection process and await confirmation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Don't miss out on these amazing opportunities to grow your career</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Our Career Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;
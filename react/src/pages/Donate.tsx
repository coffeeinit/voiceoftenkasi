import React, { useState } from 'react';
import { Heart, Target, Users, BookOpen, CreditCard, Smartphone, Building, Gift } from 'lucide-react';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [selectedCause, setSelectedCause] = useState('general');

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const causes = [
    {
      id: 'general',
      title: 'General Fund',
      description: 'Support all our programs and initiatives',
      icon: Heart,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'education',
      title: 'Education Programs',
      description: 'Fund scholarships and educational resources',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'technology',
      title: 'Technology Training',
      description: 'Support tech education and skill development',
      icon: Target,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'community',
      title: 'Community Development',
      description: 'Help build stronger communities',
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const impactStats = [
    {
      amount: '₹500',
      impact: 'Provides learning materials for 1 student for a month'
    },
    {
      amount: '₹1,000',
      impact: 'Sponsors a student for a basic computer course'
    },
    {
      amount: '₹2,500',
      impact: 'Funds a complete skill development workshop'
    },
    {
      amount: '₹5,000',
      impact: 'Supports a student\'s education for 3 months'
    },
    {
      amount: '₹10,000',
      impact: 'Sponsors a complete career development program'
    }
  ];

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Secure payment via card'
    },
    {
      id: 'upi',
      name: 'UPI Payment',
      icon: Smartphone,
      description: 'Pay using UPI apps'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building,
      description: 'Direct bank transfer'
    }
  ];

  const handleDonate = () => {
    if (!donationAmount) {
      alert('Please enter a donation amount');
      return;
    }
    alert(`Thank you for your generous donation of ₹${donationAmount}! Redirecting to payment...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Make a Difference</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Your donation helps us empower lives and enrich futures in the Tenkasi community. 
              Every contribution, no matter the size, makes a meaningful impact.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Donation Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Make Your Donation</h2>
                
                {/* Donation Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`p-3 rounded-lg border-2 transition-colors ${
                        donationType === 'one-time'
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      One-time Donation
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`p-3 rounded-lg border-2 transition-colors ${
                        donationType === 'monthly'
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      Monthly Donation
                    </button>
                  </div>
                </div>

                {/* Cause Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Choose a Cause</label>
                  <div className="grid grid-cols-2 gap-3">
                    {causes.map((cause) => (
                      <button
                        key={cause.id}
                        onClick={() => setSelectedCause(cause.id)}
                        className={`p-3 rounded-lg border-2 transition-colors text-left ${
                          selectedCause === cause.id
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${cause.color}`}>
                            <cause.icon className="h-3 w-3" />
                          </div>
                          <span className="font-semibold text-sm">{cause.title}</span>
                        </div>
                        <p className="text-xs text-gray-600">{cause.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Donation Amount (₹)</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount.toString())}
                        className={`p-3 rounded-lg border-2 transition-colors ${
                          donationAmount === amount.toString()
                            ? 'border-red-500 bg-red-50 text-red-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                  />
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <input
                          type="radio"
                          id={method.id}
                          name="payment"
                          className="mr-3"
                          defaultChecked={method.id === 'card'}
                        />
                        <div className="flex items-center space-x-3">
                          <method.icon className="h-5 w-5 text-gray-600" />
                          <div>
                            <label htmlFor={method.id} className="font-medium text-gray-900 cursor-pointer">
                              {method.name}
                            </label>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleDonate}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Donate {donationAmount ? `₹${donationAmount}` : 'Now'}</span>
                </button>
              </div>

              {/* Impact Information */}
              <div className="space-y-8">
                {/* Your Impact */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Impact</h3>
                  <div className="space-y-4">
                    {impactStats.map((stat, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <Gift className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-red-600">{stat.amount}</div>
                          <div className="text-sm text-gray-600">{stat.impact}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Donate */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Your Donation Matters</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Education Access</h4>
                        <p className="text-sm text-gray-600">Providing quality education and skill development to rural youth.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Career Development</h4>
                        <p className="text-sm text-gray-600">Creating pathways to sustainable employment and entrepreneurship.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Community Growth</h4>
                        <p className="text-sm text-gray-600">Building stronger, more resilient communities for the future.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax Benefits */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-2">Tax Benefits</h3>
                  <p className="text-sm text-green-700">
                    Your donation is eligible for tax deduction under Section 80G of the Income Tax Act. 
                    You will receive a tax-deductible receipt for your contribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Help</h2>
            <p className="text-lg text-gray-600">
              Can't donate right now? There are other ways to support our mission
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Volunteer</h3>
              <p className="text-gray-600 mb-4">Share your skills and time to directly impact lives in our community.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More</button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spread the Word</h3>
              <p className="text-gray-600 mb-4">Help us reach more people by sharing our mission on social media.</p>
              <button className="text-green-600 hover:text-green-800 font-semibold">Share Now</button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Corporate Partnership</h3>
              <p className="text-gray-600 mb-4">Partner with us to create larger impact through corporate social responsibility.</p>
              <button className="text-purple-600 hover:text-purple-800 font-semibold">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
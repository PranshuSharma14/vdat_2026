"use client";

import React, { useState } from 'react';
import { Award, Users, FileText, Trophy, Filter } from 'lucide-react';

const AwardeesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const awardeesData = [
    {
      category: 'Accelerator',
      submissionId: '1',
      paperTitle: 'An Area-Efficient Hardware Architecture and Implementation of Back-Propagation Algorithm-based Training Accelerator for Convolutional Neural Network',
      authors: 'Rahul Shrestha and Nitesh Kumar Saini'
    },
    {
      category: 'Analog Mixed Signal and RF',
      submissionId: '126',
      paperTitle: 'An Audio 0.85-V 130-μW ΔΣ Modulator',
      authors: 'Mohd Asim Saeed, Sumit Soin and Devash Minal Das'
    },
    {
      category: 'Emerging Devices',
      submissionId: '172',
      paperTitle: 'Prediction of Reverse Bias Leakage Current in Al0.3Ga0.7N/GaN HEMT Devices via Machine Learning and Ensemble Modeling',
      authors: 'Akshat Mudgal, Devansh Khanna, Harsh Kumar Dixit, Rishev Singh Chaudhary, Shivansh Mishra, Kanchan Manna and Apurba Chakraborty'
    },
    {
      category: 'FPGA and Embedded System',
      submissionId: '184',
      paperTitle: 'Quantized Residual CNN on FPGA for Real-Time Driver Attention Detection Using lis4ml',
      authors: 'Joel Dan Philip, Asif Muhammed, Nalesh S and Kala S'
    },
    {
      category: 'Digital',
      submissionId: '301',
      paperTitle: 'A Strassen-Inspired Hardware-Efficient Parallel Architecture for Approximate DCT',
      authors: 'Anurag Sharma and srinivasu bodapati'
    },
    {
      category: 'Memory',
      submissionId: '414',
      paperTitle: 'Low-Power NBTI Resilient 12T SRAM Cell with Enhanced Reliability',
      authors: 'Vipul Sahu, ARYAN KANNAUJIYA, Pranjal Verma and Ambika Prasad Shah'
    }
  ];

  const categories = ['All', ...new Set(awardeesData.map(item => item.category))];

  const filteredAwardees = selectedCategory === 'All' 
    ? awardeesData 
    : awardeesData.filter(item => item.category === selectedCategory);

  const categoryColors = {
    'Accelerator': 'bg-purple-100 text-purple-800 border-purple-200',
    'Analog Mixed Signal and RF': 'bg-blue-100 text-blue-800 border-blue-200',
    'Emerging Devices': 'bg-green-100 text-green-800 border-green-200',
    'FPGA and Embedded System': 'bg-orange-100 text-orange-800 border-orange-200',
    'Digital': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Memory': 'bg-pink-100 text-pink-800 border-pink-200'
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              VDAT 2025 Awardees
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating outstanding research contributions in VLSI Design and Test
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap gap-2 max-w-4xl">
            <Filter className="w-5 h-5 text-gray-500 self-center ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center shadow-lg">
            <Award className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">{awardeesData.length}</div>
            <div className="text-purple-100">Total Awards</div>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6 rounded-xl text-center shadow-lg">
            <FileText className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">{categories.length - 1}</div>
            <div className="text-indigo-100">Categories</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center shadow-lg">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">
              {awardeesData.reduce((total, item) => {
                return total + item.authors.split(' and ').length;
              }, 0)}
            </div>
            <div className="text-blue-100">Authors</div>
          </div>
        </div>

        {/* Awardees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {filteredAwardees.map((awardee, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${categoryColors[awardee.category] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                    {awardee.category}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <FileText className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">ID: {awardee.submissionId}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 leading-tight line-clamp-3 mb-2">
                  {awardee.paperTitle}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Authors</h4>
                    <div className="flex flex-wrap gap-2">
                      {awardee.authors.split(' and ').map((author, authorIndex) => (
                        <span
                          key={authorIndex}
                          className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium border border-purple-100"
                        >
                          {author.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Award Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-yellow-400 text-yellow-900 p-2 rounded-full shadow-lg">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredAwardees.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No awardees found</h3>
            <p className="text-gray-500">Try selecting a different category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Congratulations to All Awardees!</h3>
            <p className="text-purple-100 text-lg">
              Your innovative research contributions are advancing the field of VLSI Design and Test.
              We look forward to seeing the continued impact of your work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardeesSection;
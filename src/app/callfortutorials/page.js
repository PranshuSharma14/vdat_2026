'use client'
import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';
import { ChevronRight, Calendar, FileText, ExternalLink, Strikethrough } from 'lucide-react';

const handleLinkClick = () => {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSf1uVsPhajRPqSo7Oodi_y2XllweQmoskxxYMvZENGymHVeqA/viewform", "_blank");
};

const handlePDFClick = () => {
  window.open("../pdfs/VDAT2025- Call for Tutorial.pdf", "_blank");
}

const Tutorials = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="bg-black">
        <Navbar />
      </div>
      
      <header
        className="text-center text-white py-20 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-violet-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">CALL FOR TUTORIALS</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <ContentSection />
      </main>

      <Footer />
    </div>
  );
};

const ContentSection = () => {
  return (
    <>
      <ImportantDatesSection
        title="Important Dates"
        isAlternate={true}
      />

      <ParagraphSection
        title="VDAT 2025 Tutorial Proposals"
        content={`The Organizing Committee of the VDAT 2025 invites proposals for tutorials to be presented at the conference, scheduled for 7-Aug-2025 in Chandigarh.
        
Tutorials are a cornerstone of the VDAT Conference, providing a unique opportunity for experts to share their knowledge on cutting-edge research, emerging technologies, and practical applications in the field of VLSI design and related areas. We welcome proposals for 90 minutes (1.5 hours) and half-day (3 hours) tutorials covering both academic and industrial topics. Proposals can range from established areas of research to emerging trends, providing fresh insights or novel solutions that will benefit attendees from academia and industry alike. The topics for the tutorials can be in-line with the theme and tracks of the VDAT2025 conference but need not be limited to them.`}
        isAlternate={false}
      />

      <ListSection
        title="Submission Guidelines"
        items={[
          "Submit a single PDF containing all the information listed below.",
          "Title : Title of the tutorial, limited to 20 words",
          "Duration: 1.5 hours/ 3 hours",
          "Name of the Speaker(s)",
          "Format of the Tutorial: Presentation/Workshop/Demo/Discussion/Other",
          "Abstract: Clearly outlining the intent of the tutorial (Between 600 and 1000 words)",
          "Domain of the Tutorial: Does it align with any track in the conference. Please note that the tutorial need not be limited by the tracks listed.",
          "Keywords: Provide at least 5 keywords",
          "Learning Outcomes: Please list at least 3 major learnings for attendees.",
          "Target audience: Does it cater to any particular group of attendees like students, or corporates with certain Experience level.",
          "Prerequisite knowledge of the audience (If any): Does the attendee need to have any prior knowledge to understand this tutorial?",
          "Speaker's Biography: Qualification, experience, other conference presentations or publications in similar domains showcasing speaker's expertise. Please provide a biography of each speaker (limiting to a maximum of 300 words each). 1.5 Hour format tutorial can have a maximum of 4 speakers.",
          "Basic Structure of the Tutorial: Topics and Subtopics with time allocated to each topic, also indicating the portions covered by each presenter.",
          "Any IT or other requirement for conducting the tutorial.",
        ]}
        isAlternate={true}
      />
    </>
  );
};

const ImportantDatesSection = ({ title, isAlternate }) => (
  <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-50' : 'bg-white'} shadow-lg rounded-xl mb-8`}>
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          {title}
        </h2>
        <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <div className="flex items-center mb-3">
              <Calendar className="text-purple-600 w-5 h-5 mr-2" />
              <h3 className="font-semibold text-gray-800">Submission Timeline</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-baseline">
                <ChevronRight className="text-purple-500 w-4 h-4 mr-2 flex-shrink-0" />
                <span><strong>Submissions Open:</strong> March 3, 2025</span>
              </li>
              <li className="flex items-baseline">
                <ChevronRight className="text-purple-500 w-4 h-4 mr-2 flex-shrink-0" />
                <span><strong>Deadline for submission:</strong> <strike>April 24, 2025</strike> May 15, 2025 (Hard) </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
            <div className="flex items-center mb-3">
              <Calendar className="text-indigo-600 w-5 h-5 mr-2" />
              <h3 className="font-semibold text-gray-800">Acceptance Timeline</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-baseline">
                <ChevronRight className="text-indigo-500 w-4 h-4 mr-2 flex-shrink-0" />
                <span><strong>Deadline for acceptance:</strong> June 15, 2025</span>
              </li>
              <li className="flex items-baseline">
                <ChevronRight className="text-indigo-500 w-4 h-4 mr-2 flex-shrink-0" />
                <span><strong>Deadline for camera-ready:</strong> July 5, 2025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out flex items-center justify-center"
            onClick={handleLinkClick}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            <strike>Submit Proposal</strike>
          </button>
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200 ease-in-out flex items-center justify-center"
            onClick={handlePDFClick}
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ParagraphSection = ({ title, content, isAlternate }) => (
  <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-50' : 'bg-white'} shadow-lg rounded-xl mb-8`}>
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          {title}
        </h2>
        <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  </section>
);

const ListSection = ({ title, items, isAlternate }) => (
  <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-50' : 'bg-white'} shadow-lg rounded-xl mb-8`}>
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          {title}
        </h2>
        <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1 group-hover:bg-purple-200 transition-colors">
                <span className="text-purple-600 font-semibold">{index + 1}</span>
              </div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Tutorials;
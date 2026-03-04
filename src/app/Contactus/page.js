import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../footer/footer';
import { Mail, Phone, MapPin, Users, BookOpen, GraduationCap, Lightbulb, Heart, HelpCircle, Building } from "lucide-react";

const ContactUsPage = () => {
  const contactSections = [
    {
      title: "Technical Program Committee (TPC)",
      email: "vdat2025@iitrpr.ac.in",
      description: "For technical program queries, paper submissions, and conference content",
      icon: Users,
      color: "blue"
    },
    {
      title: "Tutorials",
      email: "vdat2025tutorial@gmail.com",
      description: "Information about tutorials, workshop sessions, and educational content",
      icon: BookOpen,
      color: "green"
    },
    {
      title: "Ph.D. Forum",
      email: "dpsahoo@iitbbs.ac.in",
      description: "Doctoral research presentations, PhD student activities, and academic discussions",
      icon: GraduationCap,
      color: "purple"
    },
    {
      title: "CIRCUITPRENEUR",
      email: "vdat2025startup@gmail.com",
      description: "Startup competitions, entrepreneurship activities, and industry collaborations",
      icon: Lightbulb,
      color: "orange"
    },
    {
      title: "Fellowship",
      email: "fellowship.vdat2025@gmail.com",
      description: "Fellowship applications, student support, and financial assistance queries",
      icon: Heart,
      color: "red"
    },
    {
      title: "Sponsorship",
      email: "vdat2025sponsorship@gmail.com",
      description: "Corporate partnerships, sponsorship opportunities, and exhibition queries",
      icon: Building,
      color: "indigo"
    },
    {
      title: "General Queries",
      email: "vdat2025@iitrpr.ac.in",
      description: "Any other questions, general information, and conference details",
      icon: HelpCircle,
      color: "gray"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-700",
        titleColor: "text-blue-800",
        emailBg: "bg-blue-600 hover:bg-blue-700",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        iconColor: "text-green-700",
        titleColor: "text-green-800",
        emailBg: "bg-green-600 hover:bg-green-700",
        border: "border-green-200"
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-700",
        titleColor: "text-purple-800",
        emailBg: "bg-purple-600 hover:bg-purple-700",
        border: "border-purple-200"
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-700",
        titleColor: "text-orange-800",
        emailBg: "bg-orange-600 hover:bg-orange-700",
        border: "border-orange-200"
      },
      red: {
        bg: "bg-red-50",
        iconBg: "bg-red-100",
        iconColor: "text-red-700",
        titleColor: "text-red-800",
        emailBg: "bg-red-600 hover:bg-red-700",
        border: "border-red-200"
      },
      indigo: {
        bg: "bg-indigo-50",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-700",
        titleColor: "text-indigo-800",
        emailBg: "bg-indigo-600 hover:bg-indigo-700",
        border: "border-indigo-200"
      },
      gray: {
        bg: "bg-gray-50",
        iconBg: "bg-gray-100",
        iconColor: "text-gray-700",
        titleColor: "text-gray-800",
        emailBg: "bg-gray-600 hover:bg-gray-700",
        border: "border-gray-200"
      }
    };
    return colorMap[color];
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="bg-black">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <header 
        className="text-center text-white py-40 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto font-light">Get in touch with the VDAT 2025 organizing team</p>
        </div>
      </header>

      {/* Contact Information */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 uppercase relative inline-block">
            Get In Touch
            <div className="h-1 w-24 bg-blue-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the appropriate contact based on your query to ensure faster response times
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {contactSections.map((section, index) => {
            const colors = getColorClasses(section.color);
            const IconComponent = section.icon;
            
            return (
              <div 
                key={index} 
                className={`${colors.bg} ${colors.border} border-2 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`${colors.iconBg} p-4 rounded-full mb-4`}>
                    <IconComponent size={32} className={colors.iconColor} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold ${colors.titleColor} mb-3`}>
                    {section.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {section.description}
                  </p>
                  
                  {/* Email Button */}
                  <a 
                    href={`mailto:${section.email}`}
                    className={`${colors.emailBg} text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center text-sm`}
                  >
                    <Mail size={16} className="mr-2" />
                    {section.email}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Conference Venue Information */}
      

      {/* Quick Contact Summary */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Need Quick Help?</h2>
          <p className="text-xl mb-6">
            For immediate assistance or urgent queries, reach out to our main contact
          </p>
          
          <div className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
            <Mail size={24} className="mr-3" />
            <a href="mailto:vdat2025@iitrpr.ac.in">vdat2025@iitrpr.ac.in</a>
          </div>
          
          <p className="text-blue-100 mt-4">
            We typically respond within 24-48 hours during business days
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactUsPage;
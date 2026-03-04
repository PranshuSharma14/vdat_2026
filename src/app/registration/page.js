import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";
import {
  CheckCircle,
  Building,
  Hash,
  MapPin,
  Smartphone,
} from "lucide-react";
import {
  Calendar,
  Clock,
  FileDown,
  CreditCard,
  User,
  UserPlus,
  Users,
  BookOpen,
  ExternalLink,
  Star,
  Cpu,
  Zap,
  Layers,
  CircuitBoard,
  Microscope,
  Award,
  Globe,
  Target,
} from "lucide-react";



const registrationFees = [
  {
    type: "VSI member",
    earlyFee: "Rs 7500/ $150",
    lateFee: "Rs 9000/ $200",
  },
  {
    type: "Working Professionals/Academicians & Authors Full Registration for accepted papers",
    earlyFee: "Rs 8500/ $175",
    lateFee: "Rs 10000/ $225",
  },
  {
    type: "Students(Research Scholars/UG/PG)",
    earlyFee: "Rs 5000/ $125",
    lateFee: "Rs 6000/ $150",
  },
];

const registrationNotes = [
  "18% tax on all transactions (as per Gov of India)",
  "Registration fee includes three days of cutting-edge VLSI sessions, lunch/tea on all days, conference dinner and exclusive VDAT kit",
  "Every accepted paper requires minimum one full registration for presentation",
  "Access to exclusive VLSI design tools and software demonstrations",
];

const registrationIncludes = [
  {
    item: "Access to all VLSI design & test technical sessions",
    icon: <CircuitBoard size={20} className="text-violet-600 mr-2" />,
  },
  {
    item: "VDAT conference materials and premium tech kit",
    icon: <FileDown size={20} className="text-violet-600 mr-2" />,
  },
  {
    item: "Networking lunch & innovation coffee breaks",
    icon: <Users size={20} className="text-violet-600 mr-2" />,
  },
  {
    item: "Welcome reception & VLSI excellence dinner",
    icon: <Award size={20} className="text-violet-600 mr-2" />,
  },
  {
    item: "Hands-on VLSI tool workshops & tutorials",
    icon: <Cpu size={20} className="text-violet-600 mr-2" />,
  },
  {
    item: "Industry showcase & technology exhibitions",
    icon: <Microscope size={20} className="text-violet-600 mr-2" />,
  },
];

const vlsiHighlights = [
  {
    title: "Next-Gen VLSI Design",
    description: "Explore cutting-edge semiconductor innovations",
    icon: <Layers className="text-blue-500" size={32} />,
  },
  {
    title: "Advanced Testing Methods",
    description: "Latest in VLSI testing and verification",
    icon: <Zap className="text-yellow-500" size={32} />,
  },
  {
    title: "Industry Leaders",
    description: "Connect with top VLSI professionals worldwide",
    icon: <Globe className="text-green-500" size={32} />,
  },
];

const RegistrationDetails = () => (


  <section className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-20"></div>
    {/* Floating Icons */}
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute top-10 left-10 animate-float">
        <CreditCard size={120} className="text-white" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float delay-1000">
        <Hash size={100} className="text-white" />
      </div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      {/* Registration Process */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <CheckCircle
            className="text-yellow-300 mr-4 animate-pulse"
            size={48}
          />
          <h2 className="text-5xl font-extrabold text-white uppercase tracking-wide">
            Registration Process
          </h2>
        </div>
        <ol  style={{color: "black"}} className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-6">
          <li className="flex items-start">
            <span className="text-yellow-500 mr-3 mt-1 font-bold text-xl">
              1.
            </span>
            <p>Choose the right registration as per your category.</p>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mr-3 mt-1 font-bold text-xl">
              2.
            </span>
            <p>Make an online transfer of money to the bank given below. You can
              also do a UPI transfer using the bank QR code.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mr-3 mt-1 font-bold text-xl">
              3.
            </span>
            <p>
              Once you complete the payment, please register using the following
              link (you need to upload the payment proof to complete the
              registration)
            </p>
          </li>
        </ol>
      </div>

      {/* Bank Details */}
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
        <div className="flex items-center mb-6">
          <Building className="text-blue-600 mr-3" size={32} />
          <h3 className="text-2xl font-bold text-gray-800">Bank Details</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="space-y-4">
            <p>
              <strong>Account Name:</strong> VLSI SOCIETY OF INDIA
            </p>
            <p>
              <strong>Account No.:</strong> 166605000613
            </p>
            <p>
              <strong>IFSC Code:</strong> ICIC0001666
            </p>
            <p>
              <strong>Branch Name:</strong> ICICI Bank, Jayanagar
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <strong>Branch Code:</strong> 001666
            </p>
            <p>
              <strong>Swift Code:</strong> ICICINBBNRI
            </p>
            <p>
              <strong>MICR Code:</strong> 560229045
            </p>
            <div className="flex items-center">
              <Smartphone className="text-green-600 mr-2" size={20} />
              <span>UPI payments accepted via bank QR code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const RegistrationPage = () => {
  // Replace this with your actual Google Form link
  const GOOGLE_FORM_LINK = "https://forms.gle/5EDPziJ8CRHtourk8";

  return (
    <div className="bg-black to-white min-h-screen">
      <Navbar />

      {/* Hero Section with VLSI Circuit Animation */}
      <header
        className="text-center text-white py-20 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-violet-900/85"></div>

         
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <CircuitBoard size={64} className="text-cyan-300" />
          </div>
          <div className="absolute top-3/4 right-1/4 animate-pulse delay-1000">
            <Cpu size={48} className="text-green-300" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-pulse delay-500">
            <Layers size={56} className="text-purple-300" />
          </div>
        </div>

        <div className="relative z-10 px-4 py-16">
          <div className="flex items-center justify-center mb-6">
            <Cpu className="text-cyan-300 mr-4 animate-spin" size={48} />
            <h1 className="text-6xl font-extrabold tracking-tight uppercase drop-shadow-lg">
              VDAT-2025
            </h1>
            <CircuitBoard
              className="text-green-300 ml-4 animate-pulse"
              size={48}
            />
          </div>

          <h2 className="text-4xl font-bold mb-4 text-cyan-300 uppercase tracking-wide">
            Registration Portal
          </h2>

          <p className="text-xl max-w-3xl mx-auto font-light mb-8 leading-relaxed">
            Join the premier VLSI Design & Test conference - Where Silicon
            Dreams Meet Reality. Connect with industry pioneers, explore
            breakthrough technologies, and shape the future of semiconductor
            innovation.
          </p>

         
          <div className="mt-8">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider animate-pulse hover:animate-none"
            >
              <Star
                className="mr-3 animate-spin group-hover:animate-none"
                size={28}
              />
              Register for VDAT-2025
              <ExternalLink
                className="ml-3 group-hover:translate-x-1 transition-transform"
                size={24}
              />
               
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-30 blur group-hover:opacity-50 animate-pulse"></div>
            </a>
          </div>

        
          <div className="mt-8 space-y-2">
            <div className="animate-bounce">
              <p className="text-cyan-300 font-bold text-lg flex items-center justify-center">
                <Zap className="mr-2" size={20} />
                🚀 Early Bird - Limited Silicon Seats! 🚀
                <Zap className="ml-2" size={20} />
              </p>
            </div>
            <p className="text-white/90 text-sm">
              Secure your place in the future of VLSI innovation
            </p>
          </div>
        </div>
      </header>

      {/*--------------REMOVE THE COMMENTED PART JUST BELOW AND JUST ABOVE AFTER UPDATING THE GOOGLE FORM LINK
                                                              -By YOURS TRUELY
                                                              AYUSH TYAGI*/}

      {/* Floating Registration Button - VLSI themed */}
      <div className="fixed bottom-6 right-6 z-50">
      
        <a
          href={GOOGLE_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none"
        >
          <Cpu className="mr-2 animate-spin" size={18} />
          <span>Join VDAT</span>
          <ExternalLink
            size={16}
            className="ml-1 group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
      {/* VLSI Highlights Section */}
      <section className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vlsiHighlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center text-white transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-white/80">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADD REGISTRATION PROCESS & BANK DETAILS HERE --- */}
      <RegistrationDetails />
      {/* Prominent VLSI Registration Call-to-Action Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>

         Animated Background Elements 
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 animate-float">
            <CircuitBoard size={120} className="text-white" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float delay-1000">
            <Cpu size={100} className="text-white" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <Layers size={200} className="text-white" />
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Target className="text-yellow-300 mr-4" size={48} />
              <h2 className="text-5xl font-extrabold text-white animate-fadeIn">
                🎯 SECURE YOUR VLSI FUTURE! 🎯
              </h2>
              <Target className="text-yellow-300 ml-4" size={48} />
            </div>

            <p className="text-xl text-white/95 mb-4 leading-relaxed">
              Don't miss VDAT-2025 - India's premier VLSI Design & Test
              conference!
            </p>
            <p className="text-lg text-cyan-200 mb-8 leading-relaxed">
              Join 500+ VLSI professionals, researchers, and industry leaders.
              Experience cutting-edge semiconductor innovations, advanced
              testing methodologies, and next-generation design tools.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-12 py-6 bg-white text-purple-700 font-bold text-2xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide border-4 border-yellow-400"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-50 blur-sm group-hover:opacity-75 animate-pulse"></div>
                <div className="relative flex items-center">
                  <CircuitBoard
                    className="mr-3 text-cyan-600 animate-pulse group-hover:animate-spin"
                    size={32}
                  />
                  REGISTER FOR VDAT
                  <ExternalLink
                    className="ml-3 group-hover:translate-x-2 transition-transform"
                    size={28}
                  />
                </div>
              </a>

              <div className="text-white text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Clock className="mr-2 text-yellow-300" size={24} />
                  <p className="text-lg font-semibold">
                    ⏰ Early Bird Deadline:
                  </p>
                </div>
                <p className="text-3xl font-bold text-yellow-300">
                  14 July 2025, 23:59 PM
                </p>
                <p className="text-sm text-cyan-200 mt-1">
                  Save up to Rs 2000!
                </p>
                <p className="text-sm text-cyan-200 mt-1">
                  No further extensions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Registration Information Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <CircuitBoard className="text-violet-600 mr-3" size={40} />
            <h2 className="text-4xl font-bold text-violet-800 uppercase relative inline-block">
              VDAT Registration Hub
            </h2>
            <Cpu className="text-violet-600 ml-3" size={40} />
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <Microscope className="text-blue-600 mr-3" size={32} />
            <h3 className="text-2xl font-bold text-gray-800">
              Welcome to VDAT-2025
            </h3>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            VDAT-2025 is India's flagship conference on VLSI Design and Test,
            bringing together the brightest minds in semiconductor technology.
            Whether you're advancing nanometer designs, developing next-gen
            testing methodologies, or exploring AI-driven EDA tools, VDAT is
            your gateway to the future of silicon innovation.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl border border-violet-100">
              <div className="flex items-center mb-6">
                <Calendar className="text-violet-700 mr-3" size={28} />
                <h3 className="text-xl font-semibold text-violet-800">
                  Critical Dates
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Zap className="text-yellow-500 mr-3 mt-1" size={18} />
                  <div>
                    <p className="font-bold text-gray-800">
                      Early Bird Registration:
                    </p>
                    <p className="text-violet-700 font-semibold">
                      Ends 14 July 2025, 23:59 PM
                    </p>
                    <p className="text-sm text-gray-600">Save up to Rs 2000!</p>
                    <p className="text-sm text-gray-600">No further extensions!</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="text-blue-500 mr-3 mt-1" size={18} />
                  <div>
                    <p className="font-bold text-gray-800">
                      VDAT-2025 Conference:
                    </p>
                    <p className="text-blue-700 font-semibold">
                      August 7-9, 2025
                    </p>
                    <p className="text-sm text-gray-600">
                      3 days of VLSI excellence
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
              <div className="flex items-center mb-6">
                <Award className="text-blue-700 mr-3" size={28} />
                <h3 className="text-xl font-semibold text-blue-800">
                  VDAT Experience Includes
                </h3>
              </div>
              <ul className="space-y-3">
                {registrationIncludes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    {item.icon}
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item.item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Registration Fees Table */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <CreditCard className="text-violet-600 mr-3" size={40} />
            <h2 className="text-4xl font-bold text-violet-800 uppercase relative inline-block">
              VDAT Registration Fees
            </h2>
            <Layers className="text-violet-600 ml-3" size={40} />
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Invest in your VLSI future with competitive registration rates
            designed for all professionals
          </p>
        </div>

        <div className="overflow-x-auto shadow-2xl rounded-xl">
          <table className="w-full border-collapse bg-white shadow-xl rounded-xl text-left">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 via-violet-700 to-purple-800 text-white">
                <th className="border-r border-blue-500 p-6 uppercase text-sm tracking-wider font-bold">
                  <div className="flex items-center">
                    <Users className="mr-2" size={18} />
                    Category
                  </div>
                </th>
                <th className="border-r border-blue-500 p-6 uppercase text-sm tracking-wider text-center font-bold">
                  <div className="flex items-center justify-center">
                    <Zap className="mr-2 text-yellow-300" size={18} />
                    Early Registration
                  </div>
                </th>
                <th className="p-6 uppercase text-sm tracking-wider text-center font-bold">
                  <div className="flex items-center justify-center">
                    <Clock className="mr-2 text-orange-300" size={18} />
                    Late/Onsite Registration
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {registrationFees.map((fee, index) => (
                <tr
                  key={index}
                  className="odd:bg-gradient-to-r odd:from-gray-50 odd:to-blue-50 even:bg-white border-b hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 transition-all duration-300"
                >
                  <td className="p-6 font-semibold text-gray-700 border-r border-gray-200">
                    <div className="flex items-center">
                      {fee.type.includes("VSI") ? (
                        <Award className="text-gold-500 mr-3" size={20} />
                      ) : fee.type.includes("Student") ? (
                        <BookOpen className="text-green-500 mr-3" size={20} />
                      ) : (
                        <User className="text-blue-500 mr-3" size={20} />
                      )}
                      <div>
                        <div className="font-bold">{fee.type}</div>
                        {fee.type.includes("Student") && (
                          <div className="text-xs text-green-600 font-medium">
                            Special Student Rate
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center border-r border-gray-200">
                    <div className="font-bold text-xl text-green-600">
                      {fee.earlyFee}
                    </div>
                    <div className="text-xs text-green-500 font-medium">
                      SAVE BIG!
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="font-bold text-xl text-blue-600">
                      {fee.lateFee}
                    </div>
                    <div className="text-xs text-gray-500">Standard Rate</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Enhanced Registration Notes */}
        <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-xl shadow-lg mt-10 max-w-5xl mx-auto border border-blue-100">
          <div className="flex items-center mb-6">
            <FileDown className="text-blue-600 mr-3" size={24} />
            <h3 className="text-2xl font-semibold text-gray-800">
              Important VDAT Registration Details:
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              {registrationNotes.slice(0, 2).map((note, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-violet-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {registrationNotes.slice(2).map((note, index) => (
                <li key={index + 2} className="flex items-start">
                  <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    {index + 3}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final VLSI Registration CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl inline-block animate-pulse">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-10 py-5 bg-white text-purple-700 font-bold text-xl rounded-3xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <CircuitBoard
                className="mr-3 text-cyan-600 animate-spin"
                size={28}
              />
              Complete Your VDAT Registration
              <ExternalLink className="ml-3" size={24} />
            </a>
          </div>
          <p className="text-gray-600 mt-4 font-medium">
            Join the VLSI revolution - Register today!
          </p>
        </div>
      </section>

      {/* Footer would go here */}
      <Footer />
    </div>
  );
};

// Note: Add these custom animations to your global CSS file:
/*
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}
*/

export default RegistrationPage;

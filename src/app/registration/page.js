import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";
import {
  CheckCircle,
  Smartphone,
  Link2,
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
  Hash,
  Building,
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

/*coming soon */
const ComingSoon = () => {
  return (
    <section className="bg-black py-32 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
          COMING SOON
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          The VDAT-2026 Registration Portal will be opening soon.
          Stay tuned for updates and prepare to join India's premier
          VLSI Design & Test conference.
        </p>

        <div className="mt-8 text-cyan-400 text-lg animate-pulse">
          🚀 Registration details will be available shortly.
        </div>
      </div>
    </section>
  );
};


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
            <p>
              Choose the right registration as per your category.{" "}
              <a
                href="/Category Document.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
              >
                Category Document →
              </a>
            </p>
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
              Once you complete the payment, please{" "}
              <a
                href="/Registration_Form.docx"
                download
                className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
              >
                download and fill the Registration Form
              </a>
              , then upload the filled form along with your payment proof by submitting it via the{" "}
              <a
                href="https://forms.gle/TLRRNfZ11pqNCJHm9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
              >
                Registration Google Form →
              </a>
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
              <strong>Account Name:</strong> JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY
            </p>
            <p>
              <strong>Account No.:</strong> 0200104000323550
            </p>
            <p>
              <strong>IFSC Code:</strong> IBKL0000200
            </p>
            <p>
              <strong>Branch Name:</strong> SECTOR 63 NOIDA-201307
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <strong>Bank:</strong> IDBI BANK
            </p>
            <div className="flex items-center">
              <Smartphone className="text-green-600 mr-2" size={20} />
              <span>UPI payments accepted via bank QR code</span>
            </div>
            <div className="flex flex-col items-start mt-2">
              <p className="text-gray-600 mb-2 text-sm font-medium">Scan to pay via UPI:</p>
              <img
                src="/images/qr-submission.jpg"
                alt="UPI QR Code for payment"
                className="w-44 h-44 object-contain rounded-xl border-2 border-purple-200 shadow-lg"
              />
              <p className="text-xs text-gray-500 mt-1">Supports PhonePe, GPay, Paytm &amp; all UPI apps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const RegistrationPage = () => {
  // Replace this with your actual Google Form link
  const GOOGLE_FORM_LINK = "https://forms.gle/TLRRNfZ11pqNCJHm9";

  return (
    <div className="bg-black to-white min-h-screen">
      <Navbar />

      {/* Hero Section with VLSI Circuit Animation */}
      <header
        className="text-center text-white py-20 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/jiit5.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-900/85"></div>

         
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
              VDAT-2026
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
              className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r text-white font-bold text-4xl rounded-full shadow-2xl hover:shadow-3xl uppercase tracking-wider "
            >
              <Star
                className="mr-3 animate-spin group-hover:animate-none"
                size={28}
              />
              <p className="!text-white font-bold text-3xl">REGISTER FOR VDAT-2026 </p>
              <ExternalLink
                className="ml-3 group-hover:translate-x-1 transition-transform"
                size={24}
              />
               
              
            </a>
          </div>

        
          <div className="mt-8 space-y-2">
            <div className="animate-bounce">
              <p className="text-cyan-300 font-bold text-lg flex items-center justify-center">
  🚀 Registration Now Open!
</p>
            </div>
            <p className="text-white/90 text-sm">
              Secure your place in the future of VLSI innovation
            </p>
          </div>
        </div>
      </header>
      

      <RegistrationDetails />
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>

         
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
              Don't miss VDAT-2026 - India's premier VLSI Design & Test
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
                  July 20, 2026, 23:59 PM
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

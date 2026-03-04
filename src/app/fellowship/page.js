import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../footer/footer';
import { Calendar, Mail, CheckCircle, BookOpen, Users, AlertCircle, ExternalLink, Download, FileText, DollarSign } from "lucide-react";

const FellowshipPage = () => {
  const importantDates = [
    { event: "Fellowship application open", date: "01 June 2025" },
    { event: "Last date of application", date: "30 June 2025" },
    { event: "Round 1 Fellowship Announcement", date: "07 July 2025" },
    { event: "Acceptance deadline for Round 1", date: "10 July 2025" },
    { event: "Round 2 Fellowship Announcement (if applicable)", date: "15 July 2025" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="bg-black"  > 
      <Navbar />
      </div>
      
      {/* Hero Section */}
      <header 
        className="text-center text-white py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-violet-900/80"></div>
        <div className="relative z-10 px-2 py-8">
          <h1 className="text-5xl font-extrabold tracking-tight uppercase mb-2 drop-shadow-lg">VDAT 2025 Fellowship Program</h1>
          <p className="text-lg max-w-xl mx-auto font-light">Supporting students and faculty in the field of VLSI design</p>
        </div>
      </header>

      {/* About the Fellowship */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 text-violet-800 uppercase relative inline-block">
            About the Fellowship
            <div className="h-1 w-16 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></div>
          </h2>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-violet-100 rounded-full">
              <BookOpen size={32} className="text-violet-700" />
            </div>
          </div>
          
          <div className="space-y-3 text-gray-700 text-base">
            <p className="text-lg leading-relaxed">
              VDAT 2025 invites students and faculty members working in the scope of VDAT to apply for the fellowship program. Over the decades, VDAT has been offering generous fellowships to students and teachers of various Indian academic institutions. This trend continues for VDAT 2025 as well. The fellowship provides complimentary registration to attend the conference.
            </p>
            
            <p className="text-lg leading-relaxed">
              Fellowships are available to Indian students and faculty working in VLSI and related fields. Fellows need to attend the entire 3-day conference, and a record of attendance will be maintained. The fellowship should not be viewed as an honor but as an enabler for students and faculty who lack adequate support.
            </p>
            
            <p className="text-lg leading-relaxed">
              Fellowship entitles you to a lower registration fee/complete registration exemption. The students/Faculty who apply for fellowship must be full time students/regular faculty at the time of the symposium. Identity card will be asked at the registration desk. Fellowships are open to all irrespective of them presenting a paper in VDAT or not. Acceptance of paper is not the eligibility for getting fellowship. However, if your paper is accepted, then the presenter/one author has to register by paying the full amount whereas rest of the authors may apply for Fellowships.
            </p>
            
            <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-400">
              <div className="flex items-start">
                <DollarSign className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-semibold text-violet-800 mb-1">Fellowship Types</h3>
                  <p className="text-violet-700">There are three types of fellowships available based on need and location:</p>
                  <ul className="mt-2 space-y-1 text-violet-700">
                    <li>• <strong>Type A:</strong> Free Registration + Free Stay + Travel Cost</li>
                    <li>• <strong>Type B:</strong> Free Registration + Free Stay</li>
                    <li>• <strong>Type C:</strong> Only Free Registration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fellowship Guidelines */}
      <section className="container mx-auto px-4 py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-violet-800 uppercase relative inline-block">
            Fellowship Guidelines
            <div className="h-1 w-16 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></div>
          </h2>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <AlertCircle size={32} className="text-blue-700" />
            </div>
          </div>
         <div className="space-y-4">
          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">1. Mandatory Attendance</h3>
            <p className="text-gray-700">Fellows must attend the full 3-day conference. Attendance will be recorded throughout the event.</p>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">2. Fellowship Type</h3>
            <p className="text-gray-700">The type of fellowship awarded is indicated next to your name.</p>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">3. Documents Required</h3>
            <p className="text-gray-700">Please bring the original copy of your Letter of Recommendation (for student category) and your valid institute ID card (for both student and faculty).</p>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">4. Security Deposit</h3>
            <ul className="text-gray-700 space-y-2 ml-4">
              <li>• Submit a scanned copy of a Demand Draft (DD) of ₹2500 in favour of <strong>VLSI Society of India</strong> to secure your seat.</li>
              <li>• The hard copy of the DD must be submitted at the registration desk on the first day of the conference.</li>
              <li>• The DD will be returned on the last day of the conference along with any applicable reimbursement.</li>
              <li>• Fellows may be assigned volunteer work during the conference.</li>
            </ul>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">5. Mandatory Submission</h3>
            <p className="text-gray-700">Failure to submit the acceptance form and scanned copy of the DD will lead to cancellation of the fellowship, and the opportunity will be passed on to waitlisted candidates.</p>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">6. Accommodation</h3>
            <p className="text-gray-700">All the selected fellows will be provided accommodation inside the campus. The organizing team intends to arrange accommodation (either double occupancy or dormitory style) close to the event venue.</p>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">7. Travel Support</h3>
            <p className="text-gray-700">Selected candidates may get complimentary partial/full registration support and/or travel allowance to attend the conference. Travel expenses will be reimbursed based on the shortest route of travel upon producing the tickets. Reimbursement will be provided for AC 3-tier train fare or bus fare, up to a maximum of ₹4,000, or the actual cost of travel via the shortest route, whichever is lower. The organizing team will calculate the travel reimbursement amount based on the details provided by the Fellow in the initial fellowship application Google Form.</p>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">8. Additional Information</h3>
            <ul className="text-gray-700 space-y-2 ml-4">
              <li>• In case an applicant is both a faculty member of some institute and a student of another (e.g., a faculty member pursuing part-time higher studies), only one application should be submitted.</li>
              <li>• Please visit the conference website for detailed updates from time to time.</li>
            </ul>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">9. Regulations</h3>
            <p className="text-gray-700">Fellowship awards are subject to the rules and regulations of VDAT.</p>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">10. Cancellation Clause</h3>
            <p className="text-gray-700">Any violation of the stated guidelines will result in cancellation of the fellowship.</p>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">11. Conditional Offer</h3>
            <p className="text-gray-700">The fellowship is provisional and subject to compliance with all terms.</p>
          </div>

          <div className=" border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">12. Paper Registration Policy</h3>
            <p className="text-gray-700">If you are the sole author registering for your paper, you must register as a full delegate. In such cases, the fellowship will be cancelled.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-violet-800 uppercase relative inline-block">
            Application Process
            <div className="h-1 w-16 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></div>
          </h2>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-indigo-100 rounded-full">
              <Users size={32} className="text-indigo-700" />
            </div>
          </div>
          
          <ul className="space-y-2 text-gray-700 text-base">
            {[
              "We will be using an entirely online application process with each applicant filling up the online form and providing relevant details online.",
              "Though some of the questions are optional, applicants are requested to respond to as many questions as relevant.",
              "Since we will be using the provided email address for communication, please ensure that these two details are correctly filled.",
              "The details of recommending authority (Research supervisor/Guide/HoD) are mandatory for the student category. Post submission of your fellowship application form, a verification link will be shared to the recommending authority to complete the verification.",
              "Please submit only one form per applicant. Multiple entries may lead to reject the application."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-1 mr-2 flex-shrink-0">
                  <span className="flex items-center justify-center bg-indigo-600 text-white rounded-full w-4 h-4 text-xs font-bold">
                    {index + 1}
                  </span>
                </div>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          
          {/* Application Form and LOR Template */}
          <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-2 text-center">Fellowship Application Status</h3>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <button 
                disabled
                className="inline-flex items-center bg-gray-400 text-gray-700 px-3 py-2 rounded-lg font-medium cursor-not-allowed opacity-60"
              >
                <ExternalLink size={20} className="mr-2" />
                Apply for Fellowship
              </button>
              
              <a 
                href="/lor-template.docx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md"
              >
                <Download size={20} className="mr-2" />
                Download LOR Template
              </a>
            </div>
            <p className="text-sm text-red-600 text-center mt-3 font-medium">
              <strong>Fellowship Application deadline has ended.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Fellowship Lists Section */}
      <section className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-violet-800 uppercase relative inline-block">
            Fellowship Lists
            <div className="h-1 w-20 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></div>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Round 1 Fellowship Lists */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Round 1 Fellowship Lists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Faculty Fellowship List - Round 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users size={32} className="text-blue-700" />
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">Faculty Fellowship List</h4>
                <p className="text-gray-600 text-center mb-4">List of faculty members awarded fellowship for VDAT 2025 - Round 1</p>
                
                <div className="text-center">
                  <a 
                    href="/pdfs/VDAT2025_Fellowship_list_of_Faculty.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
                  >
                    <Download size={20} className="mr-2" />
                    Download Faculty List
                  </a>
                </div>
              </div>

              {/* Student Fellowship List - Round 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <BookOpen size={32} className="text-purple-700" />
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">Student Fellowship List</h4>
                <p className="text-gray-600 text-center mb-4">List of students awarded fellowship for VDAT 2025 - Round 1</p>
                
                <div className="text-center">
                  <a 
                    href="/pdfs/VDAT2025_Fellowship_list_of_Students.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-md"
                  >
                    <Download size={20} className="mr-2" />
                    Download Student List
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Round 2 Fellowship Lists */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Round 2 Fellowship Lists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Faculty Fellowship List - Round 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <Users size={32} className="text-emerald-700" />
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">Faculty Fellowship List</h4>
                <p className="text-gray-600 text-center mb-4">List of faculty members awarded fellowship for VDAT 2025 - Round 2</p>
                
                <div className="text-center">
                  <a 
                    href="/pdfs/VDAT2025_Fellowship_list_of_Faculty_Round2.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-md"
                  >
                    <Download size={20} className="mr-2" />
                    Download Faculty List
                  </a>
                </div>
              </div>

              {/* Student Fellowship List - Round 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <BookOpen size={32} className="text-teal-700" />
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">Student Fellowship List</h4>
                <p className="text-gray-600 text-center mb-4">List of students awarded fellowship for VDAT 2025 - Round 2</p>
                
                <div className="text-center">
                  <a 
                    href="/pdfs/VDAT25_Fellowship_Student_Round_2.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-md"
                  >
                    <Download size={20} className="mr-2" />
                    Download Student List
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200">
            <div className="flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-indigo-600 mr-2" />
              <p className="text-indigo-700 text-center">
                <strong>Note:</strong> These lists contain the names of selected fellowship recipients from both rounds. Please verify your name in the appropriate list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="container mx-auto px-4 py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-violet-800 uppercase relative inline-block">
            Terms and Conditions
            <div className="h-1 w-20 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></div>
          </h2>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-red-100 rounded-full">
              <FileText size={32} className="text-red-700" />
            </div>
          </div>
          
          <div className="space-y-2 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Eligibility and Application</h3>
              <p>Fellowship is open to Indian students and faculty members actively working in VLSI design and related fields. Applicants must be full-time students or regular faculty at the time of the conference.</p>
            </div>
            
            
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">2. Attendance Requirements</h3>
              <p>All fellowship recipients must attend the complete 3-day conference. Attendance will be monitored and recorded. Partial attendance may result in fellowship cancellation and recovery of benefits.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">3. Travel Support</h3>
              <p>Travel support, where applicable, is limited to a maximum of Rs 4,000/- or actual expenditure, whichever is less. Original receipts must be submitted for reimbursement.</p>
            </div>
                      
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">4. Documentation Requirements</h3>
              <p>Students must submit a Letter of Recommendation (LOR) from their supervisor/guide. All applicants must carry valid institute ID cards during registration. Documents must be in PDF/JPG/PNG format.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">5. Paper Presentation and Registration</h3>
              <p>If your paper is accepted for presentation, at least one author must register with full payment. Other co-authors may apply for fellowship separately.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">6. Cancellation Policy</h3>
              <p>Fellowships may be cancelled if any terms and conditions are violated, if the recipient fails to attend the complete conference, or if false information is provided in the application.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">7. Communication</h3>
              <p>All official communication will be sent to the email address provided in the application form. It is the applicant's responsibility to monitor their email regularly.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">8. Final Authority</h3>
              <p>The VDAT 2025 organizing committee reserves the right to make final decisions on fellowship awards. Their decision will be final and binding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-violet-800 uppercase relative inline-block">
            Important Dates
            <div className="h-1 w-20 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></div>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {importantDates.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="mr-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Calendar size={24} className="text-purple-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.event}</h3>
                    <p className="text-purple-700 font-medium">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-4 rounded-lg shadow-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-3 w-3 text-yellow-600" />
              </div>
              <div className="ml-2">
                <p className="text-lg text-yellow-700">
                  Please note all fellowship applications must be submitted before the deadline. Late applications will not be considered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-lg p-8 max-w-3xl mx-auto text-white">
          <h2 className="text-2xl font-bold mb-3">Have Questions?</h2>
          <p className="text-xl mb-3">Contact us for more information about the fellowship program</p>
          
          <div className="inline-flex items-center justify-center bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            <Mail size={16} className="mr-1" />
            <a href="mailto:fellowship.vdat2025@gmail.com">fellowship.vdat2025@gmail.com</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FellowshipPage;
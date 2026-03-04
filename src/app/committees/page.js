"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";

const committees = [
  {
    title: "Steering Committee Chair",
    members: [
      {
        name: "Dr.Satya Gupta",
        institute: "VLSI Society of India",
        linkedin:
          "https://www.linkedin.com/in/dr-satya-gupta-950787/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        image: ".git./images/satya.jpg",
      },
    ],
  },
  {
    title: "Patrons",
    members: [
      {
        name: "Prof. Rajeev Ahuja",
        institute: "Director, IIT Ropar",
        linkedin:
          "https://www.linkedin.com/in/prof-rajeev-ahuja-6436b3335/?originalSubdomain=in",
        website: "https://www.iitrpr.ac.in/director",
        image: "../images/rajeev.png",
      },
      {
        name: "Prof Laxmidhar Behera",
        institute: "Director, IIT Mandi",
        website: "https://iitmandi.ac.in/institute/director",
        image: "../images/laxmi.png",
      },
      {
        name: "Prof Rajesh Bhatia",
        institute: "Director, PEC Chandigarh",
        linkedin:
          "https://www.linkedin.com/in/rajesh-bhatia-ab5aa235/?originalSubdomain=in",
        website: "https://pec.ac.in/director",
        image: "../images/rajesh.jpg",
      },
      {
        name: "Dr Madhu Chitkara",
        institute: "Pro-Chancellor, Chitkara University",
        linkedin:
          "https://www.linkedin.com/in/dr-madhu-chitkara-97713b185/?originalSubdomain=in",
        website: "https://www.chitkara.edu.in/dr-madhu-chitkara/",
        image: "../images/madhu.jpg",
      },
      {
        name: "Prof. Manpreet Singh Manna",
        institute: "Vice Chancellor, Chandigarh University",
        linkedin: "https://www.linkedin.com/in/drmanna/",
        image: "../images/manpreet.jpg",
      },
    ],
  },
  {
    title: "Advisory Committee",
    members: [
      {
        name: "Sudeb Das Gupta",
        institute: "IIT Roorkee",
        linkedin:
          "https://www.linkedin.com/in/sudeb-dasgupta-2b19b64/?originalSubdomain=in",
        website: "https://ece.iitr.ac.in/sudeb-das-gupta/",
        image: "../images/sudeb.jpg",
      },
      {
        name: "M Balakrishnan",
        institute: "IIT Delhi",
        linkedin:
          "https://www.linkedin.com/in/m-balakrishnan-b3467924/?originalSubdomain=in",
        website: "https://www.cse.iitd.ernet.in/~mbala/",
        image: "../images/MBala.jpg",
      },
      {
        name: "R.K Sharma",
        institute: "NIT Kururkshetra",
        linkedin:
          "https://www.linkedin.com/in/r-k-sharma-21b3792a/?originalSubdomain=in",
        website: "https://nitkkr.ac.in/author/r-k-sharma/",
        image: "../images/rk.jpg",
      },
      {
        name: "Vineet Sahula",
        institute: "MNIT Jaipur",
        linkedin: "https://www.linkedin.com/in/vineet07/?originalSubdomain=in",
        website: "https://mnit.ac.in/dept_ece/profile?fid=Q6w=",
        image: "../images/vineet.jpg",
      },
      {
        name: "Chitra Hariharan",
        institute: "Renesas",
        linkedin:
          "https://www.linkedin.com/in/chitra-hariharan-3a52691/?originalSubdomain=in",
        image: "../images/chit.jpg",
      },
      {
        name: "RAJNISH SHARMA",
        institute: "Chitkara University",
        linkedin: "https://www.linkedin.com/in/rajnish-sharma-39948719/",
        image: "../images/rajnish.jpg",
      },
      {
        name: "Yajvender Pal Verma",
        institute: " UIET Panjab University Chandigarh",
        linkedin:
          "https://www.linkedin.com/in/yajvender-pal-verma-042a5193/?originalSubdomain=in",
        image: "../images/pal.jpg",
      },
    ],
  },
  {
    title: "General Chairs",
    members: [
      {
        name: "Rohit Sharma",
        institute: "IIT Ropar",
        linkedin:
          "https://www.linkedin.com/in/rohit-sharma-9509b5197/?originalSubdomain=in",
        website:
          "https://www.iitrpr.ac.in/ee/profile.faculty.php?mail=rohit%40iitrpr.ac.in",
        image: "../images/rohit.jpg",
      },
      {
        name: "Neeraj Goel",
        institute: "IIT Ropar",
        linkedin:
          "https://www.linkedin.com/in/neerajgoel/?originalSubdomain=in",
        website: "https://sites.google.com/view/neerajgoel",
        image: "../images/neeraj.jpg",
      },
    ],
  },
  {
    title: "Program Chair",
    members: [
      {
        name: "Hitesh Shrimali",
        institute: "IIT Mandi",
        linkedin:
          "https://www.linkedin.com/in/hitesh-shrimali-56183b19/?originalSubdomain=in",
        website: "https://faculty.iitmandi.ac.in/~hitesh/",
        image: "../images/hitesh.png",
      },
      {
        name: "Brajesh Rawat",
        institute: "IIT Ropar",
        linkedin:
          "https://www.linkedin.com/in/brajesh-rawat/?originalSubdomain=in",
        website: "https://www.iitrpr.ac.in/electrical/brajesh",
        image: "../images/brajesh.jpg",
      },
      {
        name: "Shivani Malhotra",
        institute: "Chitkara University",
        linkedin:
          "https://www.linkedin.com/in/shivani-malhotra-6349b659/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        image: "../images/shivani.jpg",
      },
    ],
  },
  {
    title: "Program Track Chair",
    members: [
      {
        name: "Shubham Sahay",
        institute: "IIT Kanpur",
        linkedin:
          "https://www.linkedin.com/in/shubham-sahay-b1580bb0/?originalSubdomain=in",
        website: "https://home.iitk.ac.in/~ssahay/",
        image: "../images/shubham.jpg",
      },
      {
        name: "Saravana",
        institute: "IIT Roorkee",
        linkedin:
          "https://www.linkedin.com/in/saravana-kumar-687a6875/?originalSubdomain=in",
        website: "https://ece.iitr.ac.in/webpages/saravana/",
        image: "../images/saravana.jpg",
      },
      {
        name: "Sneh Saurabh",
        institute: "IIIT Delhi",
        linkedin:
          "https://www.linkedin.com/in/snehsaurabh/?originalSubdomain=in",
        website: "https://iiitd.ac.in/sneh",
        image: "../images/sneh.jpg",
      },
      {
        name: "Amit Kumar",
        institute: "Chitkara University",
        linkedin:
          "https://www.linkedin.com/in/amit-kumar-34228b139/?originalSubdomain=in",
        image: "../images/amit.jpg",
      },
      {
        name: "Anupam Chattopadhyay",
        institute: "NTU Singapore",
        linkedin:
          "https://www.linkedin.com/in/anupamchattopadhyay/?originalSubdomain=sg",
        website: "https://dr.ntu.edu.sg/cris/rp/rp01076",
        image: "../images/anupam.jpg",
      },
      {
        name: "Jai Narayan Tripathi",
        institute: "IIT Jodhpur",
        linkedin:
          "https://www.linkedin.com/in/jai-narayan-tripathi-b189a88/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        website: "http://home.iitj.ac.in/~jai/",
        image: "../images/jai.jpg",
      },
      {
        name: "Aparna Akula",
        institute: "IEEE Chandigarh Subsection & CSIO Chandigarh",
        linkedin: "https://www.linkedin.com/in/anvaparna/",
        website: "https://icsio.csio.res.in/csio.ems/emp_profile.aspx?id=1021",
        image: "../images/aparna.jpeg",
      },
    ],
  },
  {
    title: "Tutorial Chair",
    members: [
      {
        name: "TV Kalyan",
        institute: "IIT Ropar",
        linkedin:
          "https://www.linkedin.com/in/venkata-kalyan-t-29ab28a0/?originalSubdomain=in",
        website: "https://sites.google.com/view/kalyantv",
        image: "../images/tv.jpg",
      },
      {
        name: "Namrta",
        institute: "Aritrak Technologies",
        linkedin: "https://www.linkedin.com/in/namrta-sharma-blr/",
        image: "../images/namrta.jpeg",
      },
    ],
  },
  {
    title: "Local Organising Chair",
    members: [
      {
        name: "Pardeep Duhan",
        institute: "IIT Ropar",
        linkedin:
          "https://www.linkedin.com/in/pardeep-duhan-64262b74/?originalSubdomain=in",
        website: "https://www.iitrpr.ac.in/electrical/pardeepduhan",
        image: "../images/pradeep.jpg",
      },
      {
        name: "Ruchika Gupta",
        institute: "Chandigarh University",
        linkedin:
          "https://www.linkedin.com/in/ruchika-gupta-55bbb764/?originalSubdomain=in",
        website: "https://sites.google.com/view/ruchikagupta/",
        image: "../images/ruchika.jpg",
      },
      {
        name: "Arun Singh",
        institute: "PEC Chandigarh",
        linkedin:
          "https://www.linkedin.com/in/arun-kumar-singh-a5627742/?originalSubdomain=in",
        website: "https://pec.ac.in/ece/faculty/arun-kumar-singh",
        image: "../images/arun.jpg",
      },
    ],
  },
  {
    title: "Finance Chair",
    members: [
      {
        name: "Mahendra Sakare",
        institute: "IIT Ropar",
        linkedin: "https://www.linkedin.com/in/mahendra-sakare-238134b/",
        website: "https://sites.google.com/a/iitrpr.ac.in/mahendra/home",
        image: "../images/mahendra.jpg",
      },
    ],
  },
  {
    title: "Sponsorship Chair",
    members: [
      {
        name: "Alpana Agarwal",
        institute: "Thapar Institute",
        linkedin:
          "https://www.linkedin.com/in/alpana-agarwal-1542b118/?originalSubdomain=in",
        website:
          "https://www.thapar.edu/faculties/view/Dr.-Alpana-Agarwal/MTI5/MTU=",
        image: "../images/alpana.jpg",
      },
      {
        name: "Shonal Chouksey",
        institute: "IIIT Una",
        linkedin:
          "https://www.linkedin.com/in/shonal-chouksey-4a13568b/?originalSubdomain=in",
        website:
          "https://iiitu.ac.in/schools/soe/faculty/667b05e76914b0583f899e13",
        image: "../images/shonal.webp",
      },
      {
        name: "Preet Yadav",
        institute: "NXP",
        linkedin:
          "https://www.linkedin.com/in/preet-yadav/?originalSubdomain=in",
        image: "../images/preet.jpg",
      },
    ],
  },
  {
    title: "Fellowship Chair",
    members: [
      {
        name: "Ambika Shah",
        institute: "IIT Jammu",
        linkedin:
          "https://www.linkedin.com/in/ambika-prasad-shah-ba978a22/?originalSubdomain=in",
        website: "https://www.iitjammu.ac.in/faculty/~ambikaprasadshah",
        image: "../images/ambika.jpg",
      },
      {
        name: "Shruti Jain",
        institute: "JUIT, Solan, Himachal Pradesh",
        linkedin:
          "https://www.linkedin.com/in/dr-shruti-jain-92705b130/?originalSubdomain=in",
        website:
          "https://www.juit.ac.in/faculty.php?id=155&dep=ece&page=1&year1=2021",
        image: "../images/shruti.jpg",
      },
      {
        name: "Balwinder Singh",
        institute: "CDAC",
        linkedin:
          "https://www.linkedin.com/in/dr-balwinder-singh-80a1b316/?originalSubdomain=in",
        website: "http://www.acsd.ac.in/Faculty_Balwinder.aspx",
        image: "../images/balwinders.jpg",
      },
    ],
  },
  {
    title: "Demo and Exhibit Chair",
    members: [
      {
        name: "Rajendra Pratap",
        institute: "HCL Tech",
        linkedin: "https://www.linkedin.com/in/rajendrapratap/",
        image: "../images/rajendra.jpg",
      },
      {
        name: "John Jose",
        institute: "IIT Guwahati",
        linkedin:
          "https://www.linkedin.com/in/john-jose-bb8431106/?originalSubdomain=in",
        website: "https://www.iitg.ac.in/johnjose/",
        image: "../images/john.jpg",
      },
      {
        name: "Mohd Asim Saeed",
        institute: "SCL, Mohali",
        linkedin:
          "https://www.linkedin.com/in/asim-saeed-49097579/?originalSubdomain=in",
        image: "../images/Asim.jpeg",
      },
    ],
  },
  {
    title: "Web Development Team",
    members: [
      {
        name: "TV Kalyan",
        institute: "IIT Ropar",
        linkedin:
          "https://www.linkedin.com/in/venkata-kalyan-t-29ab28a0/?originalSubdomain=in",
        website: "https://sites.google.com/view/kalyantv",
        image: "../images/tv.jpg",
      },
      {
        name: "Nishant Sahni",
        institute: "IIT Ropar",
        linkedin:
          "https://www.linkedin.com/in/nishant-sahni-a7b01130a/?originalSubdomain=in",
        image: "../images/nishant.jpg",
      },
      {
        name: "Aryan Singh",
        institute: "IIT Ropar",
        linkedin: "https://www.linkedin.com/in/aryan-singh-824329287/",
        image: "../images/aryan.jpg",
      },
      {
        name: "Ayush Tyagi",
        institute: "IIT Ropar",
        linkedin:
          "https://www.linkedin.com/in/ayush-tyagi-37154b2a4/?originalSubdomain=in",
        image: "../images/ayush.jpg",
      },
    ],
  },
  {
    title: "Startup Chair",
    members: [
      {
        name: "Gaganpreet Kaur",
        institute: "Thapar University",
        image: "../images/gaganpreet.jpg",
      },
    ],
  },
  {
    title: "PhD Forum Chair",
    members: [
      {
        name: "Debiprasanna Sahoo",
        institute: "IIT Bhubaneswar",
        linkedin: "https://old.iitbbs.ac.in/profile.php/%20dpsahoo/",
        image: "../images/debiprasanna.png",
      },
      {
        name: "Ganesh C. Patil",
        institute: "VNIT Nagpur",
        linkedin:
          "https://www.linkedin.com/in/ganesh-c-patil-79b6306/?originalSubdomain=in",
        website: "https://vnit.ac.in/engineering/cvlsi/dr-ganesh-c-patil/",
        image: "../images/ganesh.jpg",
      },
    ],
  },
  {
    title: "Publication Chair",
    members: [
      {
        name: "Balwinder Raj",
        institute: "NIT Jalandhar",
        linkedin:
          "https://www.linkedin.com/in/balwinderraj/?originalSubdomain=in",
        website:
          "https://departments.nitj.ac.in/dept/ece/Faculty/6430445538bff038a7805bcd",
        image: "../images/balwinder.jpg",
      },
      {
        name: "Sivanantham",
        institute: "VIT Vellore",
        linkedin:
          "https://www.linkedin.com/in/vlsisiva/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        image: "../images/sivanantham.jpg",
      },
    ],
  },
  {
    title: "Publicity and Outreach Chair",
    members: [
      {
        name: "Sagar Juneja",
        institute: "Chitkara University",
        linkedin: "https://www.linkedin.com/in/sagar-juneja/",
        website: "https://curin.chitkara.edu.in/profile/sagar-juneja/",
        image: "../images/sagar.jpg",
      },
      {
        name: "Gaurav Saini",
        institute: "NIT Kurukshetra",
        linkedin:
          "https://www.linkedin.com/in/dr-gaurav-saini-8a09ab18/?originalSubdomain=in",
        website: "https://nitkkr.ac.in/author/gaurav-saini/",
        image: "../images/gaurav.jpg",
      },
      {
        name: "Gargi Khanna",
        institute: "NIT Hamirpur",
        linkedin:
          "https://www.linkedin.com/in/gargi-khanna-9605078/?originalSubdomain=in",
        image: "../images/gargi.jpg",
      },
      {
        name: "Navneet Sehgal",
        institute: "Chandigarh University",
        linkedin:
          "https://www.linkedin.com/in/dr-navneet-sehgal-b090389b/?originalSubdomain=in",
        image: "../images/navneet.jpg",
      },
    ],
  },
  {
    title: "Registration Chair",
    members: [
      {
        name: "Somesh Kumar",
        institute: "IIITM Gwalior",
        linkedin:
          "https://www.linkedin.com/in/dr-somesh-kumar-dahiya-b551a836/?originalSubdomain=in",
        website:
          "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Somesh",
        image: "../images/somesh.jpg ",
      },
      {
        name: "Sharda Vashisth",
        institute: "The NorthCap University, Gurugoan",
        linkedin: "https://www.linkedin.com/in/dr-sharda-vashisth-23a25021/",
        image: "../images/sharda.jpg",
      },
      {
        name: "Simranjit Singh",
        institute: "IEEE Chandigarh Subsection & PEC Chandigarh",
        linkedin: "https://www.linkedin.com/in/simranjitsingh87/",
        website: "https://pec.ac.in/ece/faculty/simranjit-singh",
        image: "../images/simranjit.jpg",
      },
      {
        name: "Ganesh C. Patil",
        institute: "VNIT Nagpur",
        linkedin:
          "https://www.linkedin.com/in/ganesh-c-patil-79b6306/?originalSubdomain=in",
        website: "https://vnit.ac.in/engineering/cvlsi/dr-ganesh-c-patil/",
        image: "../images/ganesh.jpg",
      },
    ],
  },
];

const CommitteeCard = ({ title, members }) => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white text-center my-12 px-4">
      <h2 className="text-4xl font-extrabold text-purple-700 mb-10 relative">
        <span className="relative z-10">{title}</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-purple-500 rounded"></span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="relative group w-52 mb-6 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="bg-gradient-to-b from-purple-100 to-purple-50 p-3 rounded-t-lg">
                <div className="relative mx-auto w-36 h-36 overflow-hidden rounded-full border-4 border-purple-400 shadow-md">
                  <img
                    src={member.image || "/default-avatar.png"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-purple-900 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full text-purple-700 transition-all hover:bg-purple-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {member.website && (
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full text-purple-700 transition-all hover:bg-purple-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-b-lg border-t border-purple-100">
                <h3 className="text-lg font-bold text-purple-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium">
                  {member.institute}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CommitteePage() {
  const [activeCommittee, setActiveCommittee] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-black">
        <Navbar />
      </div>
      <header
        className="text-center text-white py-20 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-violet-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">
            Committees
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light">
            Meet the talented professionals organizing this event
          </p>
        </div>
      </header>

      {/* Custom Tab Navigation */}
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
            {committees.map((committee, index) => (
              <button
                key={committee.title}
                onClick={() => setActiveCommittee(index)}
                className={`px-3 py-2 text-sm md:text-base rounded-md transition-all duration-200 ${
                  activeCommittee === index
                    ? "bg-purple-600 text-white font-medium shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                }`}
              >
                {committee.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {committees
            .filter((_, index) => index === activeCommittee)
            .map((committee) => (
              <CommitteeCard key={committee.title} {...committee} />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

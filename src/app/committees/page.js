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
        institute: "VLSI Society of India,President",
        linkedin:
          "https://www.linkedin.com/in/dr-satya-gupta-950787/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        image: "/images/satya.jpg",
      },
      {
      name: "Dr.Chitra Hariharan",
      institute: "VLSI Society of India,Secretary",
      linkedin: "https://www.linkedin.com/in/chitra-hariharan-3a52691/?originalSubdomain=in",
      image: "/images/chitra.jpg",
    },
    ],
  },
  {
    title: "Patrons",
    members: [
      
      {
        name: "Prof S.C. Saxena",
        institute: "Pro Chancellor, JIIT Noida",
         linkedin:
          "https://www.linkedin.com/in/suresh-saxena-53843440/?originalSubdomain=in",
        website: "https://www.jiit.ac.in/pro-chancellor",
        image: "/images/sc.jpg",
      },
      {
        name: "Sh.Manu Bhaskar Gaur",
        institute: "CEO@Higher Education,Jaypee Group",
        linkedin:
          "https://www.linkedin.com/in/manu-bhaskar-gaur/?originalSubdomain=in",
        image: "/images/manu.jpg",
      },
      {
        name: "Prof. Prateek Sharma",
        institute: "Vice Chancellor, DTU",
        linkedin:
          "https://www.linkedin.com/in/prateek-sharma-736923218/?originalSubdomain=in",
        website: "https://dtu.ac.in/Web/Administrations/Vice-Chancellor.php",
        image: "/images/prateek.jpg",
      },
      {
        name: "Prof.(Dr.) Ajay K Sharma",
        institute: "Director, NIT Delhi",
        website: "https://nitdelhi.ac.in/directors-profile/",
        image: "/images/ajay.jpg",
      },
      {
        name: "Prof.Ranjana Jha",
        institute: "Vice Chancellor, IGDTUW",
        website: "https://www.igdtuw.ac.in/about-us/vice-chancellor",
        image: "/images/ranjana.jpg",
      },
      {
        name: "Prof.Anand Srivastava",
        institute: "Vice Chancellor, NSUT",
        linkedin:
          "https://www.linkedin.com/in/anand-srivastava-a930a262/?originalSubdomain=in",
        website: "https://nsut.ac.in/en/vice-chancellor",
        image: "/images/anand.jpg",
      },
    ],
  },

//   {
//     title: "Advisory Committee",
//     members: [
//       {
//         name: "Sudeb Das Gupta",
//         institute: "IIT Roorkee",
//         linkedin:
//           "https://www.linkedin.com/in/sudeb-dasgupta-2b19b64/?originalSubdomain=in",
//         website: "https://ece.iitr.ac.in/sudeb-das-gupta/",
//         image: "../images/sudeb.jpg",
//       },
//       {
//         name: "M Balakrishnan",
//         institute: "IIT Delhi",
//         linkedin:
//           "https://www.linkedin.com/in/m-balakrishnan-b3467924/?originalSubdomain=in",
//         website: "https://www.cse.iitd.ernet.in/~mbala/",
//         image: "../images/MBala.jpg",
//       },
//       {
//         name: "R.K Sharma",
//         institute: "NIT Kururkshetra",
//         linkedin:
//           "https://www.linkedin.com/in/r-k-sharma-21b3792a/?originalSubdomain=in",
//         website: "https://nitkkr.ac.in/author/r-k-sharma/",
//         image: "../images/rk.jpg",
//       },
//       {
//         name: "Vineet Sahula",
//         institute: "MNIT Jaipur",
//         linkedin: "https://www.linkedin.com/in/vineet07/?originalSubdomain=in",
//         website: "https://mnit.ac.in/dept_ece/profile?fid=Q6w=",
//         image: "../images/vineet.jpg",
//       },
//       {
//         name: "Chitra Hariharan",
//         institute: "Renesas",
//         linkedin:
//           "https://www.linkedin.com/in/chitra-hariharan-3a52691/?originalSubdomain=in",
//         image: "../images/chit.jpg",
//       },
//       {
//         name: "RAJNISH SHARMA",
//         institute: "Chitkara University",
//         linkedin: "https://www.linkedin.com/in/rajnish-sharma-39948719/",
//         image: "../images/rajnish.jpg",
//       },
//       {
//         name: "Yajvender Pal Verma",
//         institute: " UIET Panjab University Chandigarh",
//         linkedin:
//           "https://www.linkedin.com/in/yajvender-pal-verma-042a5193/?originalSubdomain=in",
//         image: "../images/pal.jpg",
//       },
//     ],
//   },
  {
    title: "Advisory Committee",
    members: [
      {
        name: "Prof. Chandra Shekhar",
        institute: "Senior Professor Emeritus, Birla Institute of Technology & Science (BITS), Pilani, India",
        website: "https://www.bits-pilani.ac.in/pilani/chandra-shekhar/",
        image: "/images/chandrashekhar.jpg",
      },
      {
        name: "Prof. J. P. Singh",
        institute: "Professor, Department of Physics, Indian Institute of Technology Delhi (IIT Delhi), New Delhi, India",
        website: "https://web.iitd.ac.in/~jpsingh/member.php",
        image: "/images/jpsingh.jpg",
      },
      {
        name: "Prof. Rajendra Singh",
        institute: "Professor, Department of Physics, Indian Institute of Technology Delhi (IIT Delhi), New Delhi, India",
        website: "https://web.iitd.ac.in/~rsingh/",
        image: "/images/rajendra.jpg",
      },
      {
        name: "Prof. Satyabrata Jit",
        institute: "Professor, Department of Electronics Engineering, Indian Institute of Technology (BHU), Varanasi",
        website: "https://www.iitbhu.ac.in/dept/ece/people/sjitece",
        image: "/images/satyab.jpg",
      },
      {
        name: "Dr. Manoj Singh Gaur",
        institute: "Director IIT Jammu",
        linkedin:
          "https://www.linkedin.com/in/manoj-gaur-8270614/",
        website: "https://iitjammu.ac.in/faculty/~manojsinghgaur",
        image: "/images/manoj.jpg",
      },
      {
        name: "Mr. Hitesh Garg",
        institute: "India Country Manager, NXP",
        linkedin: "https://www.linkedin.com/in/hiteshgarg/",
        image: "/images/hitesh.jpg",
      },
      {
        name: "Mr. Pradip Thaker",
        institute: "Country Head & VP, Engineering",
        linkedin:
          "https://www.linkedin.com/in/pradip-thaker-09b3434/",
        image: "/images/pradip.jpg",
      },
      {
        name: "Sri Vivek Khaneja",
        institute: "Executive Director CDAC Noida",
        linkedin:
          "https://www.linkedin.com/in/vivekkhaneja/?originalSubdomain=in",
        website: "https://www.semiconindia.org/node/6686",
        image: "/images/vivek.jpg",
      },
      {
        name: "Dr. Abhilasha Gaur",
        institute: "CEO - SSC NASSCOM",
        linkedin:
          "https://www.linkedin.com/in/dr-abhilasha-gaur-b99a87a/?originalSubdomain=in",
        image: "/images/abhilasha.jpg",
      },
      {
        name: "Dr. Manish Kumar Hooda",
        institute: "Director (Technology) India Semiconductor Mission",
        linkedin:
          "https://www.linkedin.com/in/dr-manish-kumar-hooda-10081a24/?originalSubdomain=in",
        image: "/images/manishk.jpg",
      },
      {
        name: "Mr. Yogesh Mittal",
        institute: "Director (Technology) India Semiconductor Mission",
        linkedin:
          "https://www.linkedin.com/in/yogesh-mittal-9548421/?originalSubdomain=in",
        image: "/images/yogesh.jpg",
      },
    ],
  },
  {
    title: "General Chairs",
    members: [
      {
        name: "Prof.Shweta Srivastav",
        institute: "Director,JIIT Noida",
        linkedin:
          "https://www.linkedin.com/in/shweta-srivastava-b69356a/?originalSubdomain=in",
        website: "https://www.jiit.ac.in/prof-shweta-srivastava",
        image: "/images/shweta.jpg",
      },
      {
        name: "Prof.Rishu Chaujar",
        institute: "Director,Vinod Dham Centre of Excellence for Semiconductors and Microelectronics",
        linkedin:
          "https://www.linkedin.com/in/prof-rishu-chaujar-7064917/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        website:
          "https://dtu.ac.in/modules/facilities/people/faculty/view.php?uname=rishuChaujar",
        image: "/images/rishu.jpg",
      },
   
      {
        name: "Prof.Sujay Deb",
        institute: "Professor,IIIT Delhi",
        linkedin:
          "https://www.linkedin.com/in/debsujay/?originalSubdomain=in",
        website:
          "https://iiitd.ac.in/sdeb",
        image: "/images/sujay.jpg",
      },
      {
        name: "Prof.Nidhi Goel",
        institute: "Professor,IGDTUW",
        linkedin:
          "https://www.linkedin.com/in/nidhi-goel-7bb48222/?originalSubdomain=in",
        website:
          "https://www.igdtuw.ac.in/profile/details/prof-nidhi-goel",
        image: "/images/nidhi.jpg",
      },
           {
        name: "Prof.Maneesha Gupta",
        institute: "Adjunct Professor,NSUT",
        linkedin:
          "https://www.linkedin.com/in/maneesha-gupta-8701b619/?originalSubdomain=in",
        website:
          "https://www.nsut.ac.in/en/node/263",
        image: "/images/maneesha.jpg",
      },
    ],
  },
  //{
//     title: "Program Chair",
//     members: [
//       {
//         name: "Hitesh Shrimali",
//         institute: "IIT Mandi",
//         linkedin:
//           "https://www.linkedin.com/in/hitesh-shrimali-56183b19/?originalSubdomain=in",
//         website: "https://faculty.iitmandi.ac.in/~hitesh/",
//         image: "../images/hitesh.png",
//       },
//       {
//         name: "Brajesh Rawat",
//         institute: "IIT Ropar",
//         linkedin:
//           "https://www.linkedin.com/in/brajesh-rawat/?originalSubdomain=in",
//         website: "https://www.iitrpr.ac.in/electrical/brajesh",
//         image: "../images/brajesh.jpg",
//       },
//       {
//         name: "Shivani Malhotra",
//         institute: "Chitkara University",
//         linkedin:
//           "https://www.linkedin.com/in/shivani-malhotra-6349b659/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
//         image: "../images/shivani.jpg",
//       },
//     ],
//   },
//   {
//     title: "Program Track Chair",
//     members: [
//       {
//         name: "Shubham Sahay",
//         institute: "IIT Kanpur",
//         linkedin:
//           "https://www.linkedin.com/in/shubham-sahay-b1580bb0/?originalSubdomain=in",
//         website: "https://home.iitk.ac.in/~ssahay/",
//         image: "../images/shubham.jpg",
//       },
//       {
//         name: "Saravana",
//         institute: "IIT Roorkee",
//         linkedin:
//           "https://www.linkedin.com/in/saravana-kumar-687a6875/?originalSubdomain=in",
//         website: "https://ece.iitr.ac.in/webpages/saravana/",
//         image: "../images/saravana.jpg",
//       },
//       {
//         name: "Sneh Saurabh",
//         institute: "IIIT Delhi",
//         linkedin:
//           "https://www.linkedin.com/in/snehsaurabh/?originalSubdomain=in",
//         website: "https://iiitd.ac.in/sneh",
//         image: "../images/sneh.jpg",
//       },
//       {
//         name: "Amit Kumar",
//         institute: "Chitkara University",
//         linkedin:
//           "https://www.linkedin.com/in/amit-kumar-34228b139/?originalSubdomain=in",
//         image: "../images/amit.jpg",
//       },
//       {
//         name: "Anupam Chattopadhyay",
//         institute: "NTU Singapore",
//         linkedin:
//           "https://www.linkedin.com/in/anupamchattopadhyay/?originalSubdomain=sg",
//         website: "https://dr.ntu.edu.sg/cris/rp/rp01076",
//         image: "../images/anupam.jpg",
//       },
//       {
//         name: "Jai Narayan Tripathi",
//         institute: "IIT Jodhpur",
//         linkedin:
//           "https://www.linkedin.com/in/jai-narayan-tripathi-b189a88/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
//         website: "http://home.iitj.ac.in/~jai/",
//         image: "../images/jai.jpg",
//       },
//       {
//         name: "Aparna Akula",
//         institute: "IEEE Chandigarh Subsection & CSIO Chandigarh",
//         linkedin: "https://www.linkedin.com/in/anvaparna/",
//         website: "https://icsio.csio.res.in/csio.ems/emp_profile.aspx?id=1021",
//         image: "../images/aparna.jpeg",
//       },
//     ],
//   },
//   {
//     title: "Tutorial Chair",
//     members: [
//       {
//         name: "TV Kalyan",
//         institute: "IIT Ropar",
//         linkedin:
//           "https://www.linkedin.com/in/venkata-kalyan-t-29ab28a0/?originalSubdomain=in",
//         website: "https://sites.google.com/view/kalyantv",
//         image: "../images/tv.jpg",
//       },
//       {
//         name: "Namrta",
//         institute: "Aritrak Technologies",
//         linkedin: "https://www.linkedin.com/in/namrta-sharma-blr/",
//         image: "../images/namrta.jpeg",
//       },
//     ],
//   },
   {
    title: "Organising Chair",
members: [
{
  name: "Prof. Arti Noor",
  institute: "JIIT Noida, Dean & HOD, ECE",
  designation: "Dean & HOD, ECE",
  linkedin: "https://www.linkedin.com/in/arti-noor-3b20a1125/",
  website: "https://www.jiit.ac.in/prof-arti-noor",
  image: "/images/arti.jpg"
},
{
  name: "Prof. Jitendra Mohan",
  institute: "JIIT Noida, Professor",
  designation: "Professor",
  linkedin: "https://www.linkedin.com/in/jitendra-mohan-67aa7b19/",
  website: "https://www.jiit.ac.in/prof-jitendra-mohan",
  image: "/images/jitendra.jpg"
},

{
  name: "Dr. Inder Kumar Chaudhary",
  institute: "DDTU (VDSemiX), EE, VDSemiX",
  designation: "VDSemiX",
  linkedin: "https://www.linkedin.com/in/dr-inder-chaudhary-34702a30/",
  website: "https://dtu.ac.in/Web/Departments/Electrical/faculty/inderchaudhary.php",
  image: "/images/inder.jpg"
},
{
  name: "Dr. Sumit Kale",
  institute: "DTU (VDSemiX), ECE, VDSemiX",
  designation: "VDSemiX",
  linkedin: "https://www.linkedin.com/in/sumit-kale",
  website: "https://dtu.ac.in/Web/Departments/Electronics/faculty/sumitkale.php",
  image: "/images/sumitkale.jpg"
},
{
  name: "Dr. Rikmantra Basu",
  institute: "NIT Delhi, Head Department of ECE",
  designation: "Head Department of ECE",
  linkedin: "https://www.linkedin.com/in/rikmantra-basu-82074933a/",
  website: "https://nitdelhi.ac.in/faculty/rikmantra-basu",
  image: "/images/rikmantra.jpg"
},
{
  name: "Prof. Tarun Kumar Rawat",
  institute: "NSUT, Delhi, Professor",
  designation: "Professor",
  website: "https://www.nsut.ac.in/en/node/271",
  image: "/images/tarunrawat.jpg"
},
{
  name: "Prof. Jasdeep Kaur Dhanoa",
  institute: "IIGDTUW, Delhi, Professor",
  designation: "Professor",
  linkedin: "https://www.linkedin.com/in/jasdeep-kaur-dhanoa",
  website: "https://www.igdtuw.ac.in/pdfs/faculty/ece/jasdeepkaur.pdf",
  image: "/images/jasdeep.jpg"
},
{
  name: "Prof. Sumit Darak",
  institute: "IIIT Delhi, Professor and Dean Academics",
  designation: "Professor and Dean Academics",
  linkedin: "https://www.linkedin.com/in/sumit-darak",
  website: "https://iiitd.ac.in/sumit",
  image: "/images/darak.jpg"
},
{
  name: "Dr. Kunwar Singh",
  institute: "NSUT, Delhi, Associate Professor",
  designation: "Associate Professor",
  linkedin: "https://www.linkedin.com/in/ksdelhi/",
  website: "https://www.nsut.ac.in/en/node/272",
  image: "/images/kunwar.jpg"
}
]
 },
 {
  title: "Technical Program Chair(s)",
members: [
  {
    name: "Prof. Sudeb Dasgupta",
    institute: "IIT Roorkee, Professor",
    linkedin: "https://www.linkedin.com/in/sudeb-dasgupta-2b19b64/",
    website: "https://ece.iitr.ac.in/sudeb-das-gupta/",
    image: "/images/sudeb.jpg",
  },
  {
    name: "Mr. Preet Yadav",
    institute: "NXP Semiconductors, Head India Innovation Ecosystem at NXP",
    linkedin: "https://www.linkedin.com/in/preet-yadav/",
    image: "/images/preet.jpg",
  },

  {
    name: "Prof. Brijesh Kumar",
    institute: "IGDTUW, Professor",
    website: "https://www.igdtuw.ac.in/faculty/ece/brijesh-kumar.php",
    image: "/images/brijesh.jpg",
  },
  {
    name: "Prof. Neeta Pandey",
    institute: "DTU (VDSemiX), ECE, VDSemiX",
    website: "https://dtu.ac.in/Web/Departments/Electronics/faculty/neetaPandey.php",
    image: "/images/neeta.jpg",
  },
  {
    name: "Dr. Manisha Bharti",
    institute: "NIT Delhi, Associate Professor, Department of ECE",
    website: "https://nitdelhi.ac.in/faculty/manisha-bharti",
    image: "/images/manisha.jpg",
  },

  {
    name: "Dr. Shruti Kalra",
    institute: "JIIT Noida, Associate Professor, ECE",
    website: "https://www.jiit.ac.in/dr-shruti-kalra",
    linkedin: "https://www.linkedin.com/in/dr-shruti-kalra-64a799a7/",
    image: "/images/shruti.jpg",
  },
  {
    name: "Dr. Ajay Kumar",
    institute: "JIIT Noida, Associate Professor, ECE",
    website: "https://www.jiit.ac.in/dr-ajay-kumar",
    image: "/images/ajay1.jpg",
  },
  {
    name: "Dr. M. S. Mehata",
    institute: "DTU (VDSemiX), Assistant Professor, VDSemiX",
    image: "/images/mehata.jpg",
  },

  {
    name: "Dr. Urvashi Bansal",
    institute: "NSUT, Delhi, Assistant Professor",
    website: "http://www.nsut.ac.in/en/faculty/urvashi-bansal",
    image: "/images/urvashi.jpg",
  },
  {
    name: "Dr. Shweta Gautam",
    institute: "NSUT, Assistant Professor",
    website: "http://www.nsut.ac.in/en/faculty/shweta-gautam",
    image: "/images/shweta1.jpg",
  }
],
},
  //{
//     title: "Finance Chair",
//     members: [
//       {
//         name: "Mahendra Sakare",
//         institute: "IIT Ropar",
//         linkedin: "https://www.linkedin.com/in/mahendra-sakare-238134b/",
//         website: "https://sites.google.com/a/iitrpr.ac.in/mahendra/home",
//         image: "../images/mahendra.jpg",
//       },
//     ],
//   },
//   {
//     title: "Sponsorship Chair",
//     members: [
//       {
//         name: "Alpana Agarwal",
//         institute: "Thapar Institute",
//         linkedin:
//           "https://www.linkedin.com/in/alpana-agarwal-1542b118/?originalSubdomain=in",
//         website:
//           "https://www.thapar.edu/faculties/view/Dr.-Alpana-Agarwal/MTI5/MTU=",
//         image: "../images/alpana.jpg",
//       },
//       {
//         name: "Shonal Chouksey",
//         institute: "IIIT Una",
//         linkedin:
//           "https://www.linkedin.com/in/shonal-chouksey-4a13568b/?originalSubdomain=in",
//         website:
//           "https://iiitu.ac.in/schools/soe/faculty/667b05e76914b0583f899e13",
//         image: "../images/shonal.webp",
//       },
//       {
//         name: "Preet Yadav",
//         institute: "NXP",
//         linkedin:
//           "https://www.linkedin.com/in/preet-yadav/?originalSubdomain=in",
//         image: "../images/preet.jpg",
//       },
//     ],
//   },
//   {
//     title: "Fellowship Chair",
//     members: [
//       {
//         name: "Ambika Shah",
//         institute: "IIT Jammu",
//         linkedin:
//           "https://www.linkedin.com/in/ambika-prasad-shah-ba978a22/?originalSubdomain=in",
//         website: "https://www.iitjammu.ac.in/faculty/~ambikaprasadshah",
//         image: "../images/ambika.jpg",
//       },
//       {
//         name: "Shruti Jain",
//         institute: "JUIT, Solan, Himachal Pradesh",
//         linkedin:
//           "https://www.linkedin.com/in/dr-shruti-jain-92705b130/?originalSubdomain=in",
//         website:
//           "https://www.juit.ac.in/faculty.php?id=155&dep=ece&page=1&year1=2021",
//         image: "../images/shruti.jpg",
//       },
//       {
//         name: "Balwinder Singh",
//         institute: "CDAC",
//         linkedin:
//           "https://www.linkedin.com/in/dr-balwinder-singh-80a1b316/?originalSubdomain=in",
//         website: "http://www.acsd.ac.in/Faculty_Balwinder.aspx",
//         image: "../images/balwinders.jpg",
//       },
//     ],
//   },
//   {
//     title: "Demo and Exhibit Chair",
//     members: [
//       {
//         name: "Rajendra Pratap",
//         institute: "HCL Tech",
//         linkedin: "https://www.linkedin.com/in/rajendrapratap/",
//         image: "../images/rajendra.jpg",
//       },
//       {
//         name: "John Jose",
//         institute: "IIT Guwahati",
//         linkedin:
//           "https://www.linkedin.com/in/john-jose-bb8431106/?originalSubdomain=in",
//         website: "https://www.iitg.ac.in/johnjose/",
//         image: "../images/john.jpg",
//       },
//       {
//         name: "Mohd Asim Saeed",
//         institute: "SCL, Mohali",
//         linkedin:
//           "https://www.linkedin.com/in/asim-saeed-49097579/?originalSubdomain=in",
//         image: "../images/Asim.jpeg",
//       },
//     ],
//   },
//   {
//     title: "Web Development Team",
//     members: [
//       {
//         name: "TV Kalyan",
//         institute: "IIT Ropar",
//         linkedin:
//           "https://www.linkedin.com/in/venkata-kalyan-t-29ab28a0/?originalSubdomain=in",
//         website: "https://sites.google.com/view/kalyantv",
//         image: "../images/tv.jpg",
//       },
//       {
//         name: "Nishant Sahni",
//         institute: "IIT Ropar",
//         linkedin:
//           "https://www.linkedin.com/in/nishant-sahni-a7b01130a/?originalSubdomain=in",
//         image: "../images/nishant.jpg",
//       },
//       {
//         name: "Aryan Singh",
//         institute: "IIT Ropar",
//         linkedin: "https://www.linkedin.com/in/aryan-singh-824329287/",
//         image: "../images/aryan.jpg",
//       },
//       {
//         name: "Ayush Tyagi",
//         institute: "IIT Ropar",
//         linkedin:
//           "https://www.linkedin.com/in/ayush-tyagi-37154b2a4/?originalSubdomain=in",
//         image: "../images/ayush.jpg",
//       },
//     ],
//   },
//   {
//     title: "Startup Chair",
//     members: [
//       {
//         name: "Gaganpreet Kaur",
//         institute: "Thapar University",
//         image: "../images/gaganpreet.jpg",
//       },
//     ],
//   },
//   {
//     title: "PhD Forum Chair",
//     members: [
//       {
//         name: "Debiprasanna Sahoo",
//         institute: "IIT Bhubaneswar",
//         linkedin: "https://old.iitbbs.ac.in/profile.php/%20dpsahoo/",
//         image: "../images/debiprasanna.png",
//       },
//       {
//         name: "Ganesh C. Patil",
//         institute: "VNIT Nagpur",
//         linkedin:
//           "https://www.linkedin.com/in/ganesh-c-patil-79b6306/?originalSubdomain=in",
//         website: "https://vnit.ac.in/engineering/cvlsi/dr-ganesh-c-patil/",
//         image: "../images/ganesh.jpg",
//       },
//     ],
//   },
//   {
//     title: "Publication Chair",
//     members: [
//       {
//         name: "Balwinder Raj",
//         institute: "NIT Jalandhar",
//         linkedin:
//           "https://www.linkedin.com/in/balwinderraj/?originalSubdomain=in",
//         website:
//           "https://departments.nitj.ac.in/dept/ece/Faculty/6430445538bff038a7805bcd",
//         image: "../images/balwinder.jpg",
//       },
//       {
//         name: "Sivanantham",
//         institute: "VIT Vellore",
//         linkedin:
//           "https://www.linkedin.com/in/vlsisiva/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
//         image: "../images/sivanantham.jpg",
//       },
//     ],
//   },
//   {
//     title: "Publicity and Outreach Chair",
//     members: [
//       {
//         name: "Sagar Juneja",
//         institute: "Chitkara University",
//         linkedin: "https://www.linkedin.com/in/sagar-juneja/",
//         website: "https://curin.chitkara.edu.in/profile/sagar-juneja/",
//         image: "../images/sagar.jpg",
//       },
//       {
//         name: "Gaurav Saini",
//         institute: "NIT Kurukshetra",
//         linkedin:
//           "https://www.linkedin.com/in/dr-gaurav-saini-8a09ab18/?originalSubdomain=in",
//         website: "https://nitkkr.ac.in/author/gaurav-saini/",
//         image: "../images/gaurav.jpg",
//       },
//       {
//         name: "Gargi Khanna",
//         institute: "NIT Hamirpur",
//         linkedin:
//           "https://www.linkedin.com/in/gargi-khanna-9605078/?originalSubdomain=in",
//         image: "../images/gargi.jpg",
//       },
//       {
//         name: "Navneet Sehgal",
//         institute: "Chandigarh University",
//         linkedin:
//           "https://www.linkedin.com/in/dr-navneet-sehgal-b090389b/?originalSubdomain=in",
//         image: "../images/navneet.jpg",
//       },
//     ],
//   },
//   {
//     title: "Registration Chair",
//     members: [
//       {
//         name: "Somesh Kumar",
//         institute: "IIITM Gwalior",
//         linkedin:
//           "https://www.linkedin.com/in/dr-somesh-kumar-dahiya-b551a836/?originalSubdomain=in",
//         website:
//           "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Somesh",
//         image: "../images/somesh.jpg ",
//       },
//       {
//         name: "Sharda Vashisth",
//         institute: "The NorthCap University, Gurugoan",
//         linkedin: "https://www.linkedin.com/in/dr-sharda-vashisth-23a25021/",
//         image: "../images/sharda.jpg",
//       },
//       {
//         name: "Simranjit Singh",
//         institute: "IEEE Chandigarh Subsection & PEC Chandigarh",
//         linkedin: "https://www.linkedin.com/in/simranjitsingh87/",
//         website: "https://pec.ac.in/ece/faculty/simranjit-singh",
//         image: "../images/simranjit.jpg",
//       },
//       {
//         name: "Ganesh C. Patil",
//         institute: "VNIT Nagpur",
//         linkedin:
//           "https://www.linkedin.com/in/ganesh-c-patil-79b6306/?originalSubdomain=in",
//         website: "https://vnit.ac.in/engineering/cvlsi/dr-ganesh-c-patil/",
//         image: "../images/ganesh.jpg",
//       },
//     ],
//   },
 ];
 const MemberCard = ({ member }) => (
  <div className="relative group w-52 mb-6 transition-all duration-300 hover:-translate-y-2">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="bg-gradient-to-b from-blue-100 to-blue-50 p-3 rounded-t-lg">
        <div className="relative mx-auto w-36 h-36 overflow-hidden rounded-full border-4 border-blue-400 shadow-md">
          <img
            src={member.image || "/default-avatar.png"}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full text-blue-700"
                >
                  in
                </a>
              )}

              {member.website && (
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full text-blue-700"
                >
                  🌐
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-b-lg border-t border-blue-100">
        <h3 className="text-lg font-bold text-blue-900 mb-1 h-[56px] flex items-center justify-center text-center">
          {member.name}
        </h3>

        <p className="text-sm text-blue-600 font-medium h-[60px] flex items-center justify-center text-center">
          {member.institute}
        </p>
      </div>
    </div>
  </div>
);

const CommitteeCard = ({ title, members }) => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white text-center my-12 px-4">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-10">
  {title}
</h2>
      {/* First row (2 members) */}
<div className="flex justify-center gap-8 mb-8">
  {members.slice(0, 2).map((member, index) => (
    <MemberCard key={index} member={member} />
  ))}
</div>

{/* Remaining members */}
<div className="flex flex-wrap justify-center gap-8">
  {members.slice(2).map((member, index) => (
    <MemberCard key={index} member={member} />
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
        style={{ backgroundImage: "url('/images/jiit5.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">
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
                    ? "bg-blue-600 text-white font-medium shadow-md"
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

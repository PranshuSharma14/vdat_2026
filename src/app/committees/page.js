"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";


const committees = [
  {
    title: "Steering Committee Chair(s)",
    members: [
      {
        name: "Dr.Satya Gupta",
        institute: "President, VLSI Society of India",
        linkedin:
          "https://www.linkedin.com/in/dr-satya-gupta-950787/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        image: "/images/satya.jpg",
      },
      {
      name: "Dr.Chitra Hariharan",
      institute: "Secretary, VLSI Society of India",
      linkedin: "https://www.linkedin.com/in/chitra-hariharan-3a52691/?originalSubdomain=in",
      image: "/images/chitra.jpg",
    },
    {
        name: "Mr.Nagi Naganathan",
        institute: "Northrop Grumman",
        linkedin:
          "https://www.linkedin.com/in/dr-satya-gupta-950787/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        image: "/images/Nagi.jpeg",
      },

    ],
  },
  {
    title: "Patrons",
    members: [

      {
        name: "Shri Manoj Gaur Ji (Chief Patron)",
        institute: "Chancellor, Jaypee Institute of Information Technology (JIIT)  Noida.",
        image: "/images/manojgaur.jpeg",
      },
      
      {
        name: "Prof S.C. Saxena",
        institute: "Pro Chancellor, Jaypee Institute of Information Technology, Noida",
         linkedin:
          "https://www.linkedin.com/in/suresh-saxena-53843440/?originalSubdomain=in",
        website: "https://www.jiit.ac.in/pro-chancellor",
        image: "/images/sc.jpg",
      },
      {
        name: "Sh.Manu Bhaskar Gaur",
        institute: "CEO, Jaypee Institute of Information Technology, Noida",
        linkedin:
          "https://www.linkedin.com/in/manu-bhaskar-gaur/?originalSubdomain=in",
        image: "/images/manu.jpg",
      },
      {
        name: "Prof. Prateek Sharma",
        institute: "Vice Chancellor, Delhi Technological University",
        linkedin:
          "https://www.linkedin.com/in/prateek-sharma-736923218/?originalSubdomain=in",
        website: "https://dtu.ac.in/Web/Administrations/Vice-Chancellor.php",
        image: "/images/prateek.jpg",
      },
      {
        name: "Prof.(Dr.) Ajay K Sharma",
        institute: "Director, National Institute of Technology, Delhi",
        website: "https://nitdelhi.ac.in/directors-profile/",
        image: "/images/ajay.jpg",
      },
      {
        name: "Prof.Ranjana Jha",
        institute: "Vice Chancellor, Indira Gandhi Delhi Technical University for Women",
        website: "https://www.igdtuw.ac.in/about-us/vice-chancellor",
        image: "/images/ranjana.jpg",
      },
      {
        name: "Prof.Anand Srivastava",
        institute: "Vice Chancellor, Netaji Subhas University of Technology",
        linkedin:
          "https://www.linkedin.com/in/anand-srivastava-a930a262/?originalSubdomain=in",
        website: "https://nsut.ac.in/en/vice-chancellor",
        image: "/images/anand.jpg",
      },
    ],
  },

  {
    title: "Advisory Committee",
    members: [
      {
        name: "Prof. Chandra Shekhar",
        institute: "Senior Professor Emeritus, Birla Institute of Technology & Science, Pilani, India",
        linkedin:"https://www.linkedin.com/in/chandra-shekhar-22891a166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        image: "/images/chandrashekhar.jpeg",
      },
      {
        name: "Prof. Yogesh Singh Chauhan",
        institute: "Professor, IIT Kanpur (Chair, IEEE UP Section)",
        linkedin:"https://www.linkedin.com/in/yogesh-singh-chauhan-8964b23/?originalSubdomain=in",
        image: "/images/yogeshsc.jpeg",
      },
      {
        name: "Prof. Indranil Sengupta",
        institute: "Professor, Indian Institute of Technology, Kharagpur",
        linkedin:"https://www.linkedin.com/in/indranil-sengupta-7a654520/",
        image: "/images/indranil.jpeg",
      },
      {
        name: "Prof. J. P. Singh",
        institute: "Professor, Department of Physics, Indian Institute of Technology Delhi, New Delhi, India",
        website: "https://web.iitd.ac.in/~jpsingh/member.php",
        image: "/images/jpsingh.jpg",
      },
      {
        name: "Prof. Rajendra Singh",
        institute: "Professor, Department of Physics, Indian Institute of Technology Delhi, New Delhi, India",
        website: "https://web.iitd.ac.in/~rsingh/",
        image: "/images/rajendra.jpg",
      },
      {
        name: "Prof. Satyabrata Jit",
        institute: "Professor, Department of Electronics Engineering, Indian Institute of Technology, Varanasi",
        website: "https://www.iitbhu.ac.in/dept/ece/people/sjitece",
        image: "/images/satyab.jpg",
      },
      {
        name: "Dr. Manoj Singh Gaur",
        institute: "Director, Indian Institute of Technology, Jammu",
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
        name: "Ms. Tal Zigman",
        institute: "Group Director, Global Academics Partnerships, Cadence Design Systems",
        linkedin: "https://www.linkedin.com/in/tal-zigman/",
        image: "/images/talzigman.jpeg",
      },
      {
        name: "Mr. Pradip Thaker",
        institute: "Country Head & VP, Engineering, d-Matrix",
        linkedin:
          "https://www.linkedin.com/in/pradip-thaker-09b3434/",
        image: "/images/pradip.jpg",
      },
      {
        name: "Sri Vivek Khaneja",
        institute: "Executive Director, Centre for Development of Advanced Computing, Noida",
        linkedin:
          "https://www.linkedin.com/in/vivekkhaneja/?originalSubdomain=in",
        website: "https://www.semiconindia.org/node/6686",
        image: "/images/vivek.jpg",
      },
      {
        name: "Prof. Madan Mohan Tripathi",
        institute: "Director General, NIELIT",
        linkedin:
          "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1794652&reg=3&lang=2",
        image: "/images/mmtripathi.jpg",
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
        institute: "Director (Technology), India Semiconductor Mission",
        linkedin:
          "https://www.linkedin.com/in/dr-manish-kumar-hooda-10081a24/?originalSubdomain=in",
        image: "/images/manishk.jpg",
      },
      {
        name: "Mr. Yogesh Mittal",
        institute: "HPC India R&D Head, HPC Engineering@ Renesas Electronics",
        linkedin:
          "https://www.linkedin.com/in/yogesh-mittal-9548421/?originalSubdomain=in",
        image: "/images/yogesh.jpg",
      },
      {
        name: "Mr. Aroop Tyagi",
        institute: "Director Academic Program Asia Pacific at Synopsys Inc",
        linkedin:
          "https://www.linkedin.com/in/aroop-tyagi-809a30b/",
        image: "/images/aroop.jpeg",
      },
    ],
  },
  {
    title: "General Chairs(s)",
    members: [
      {
        name: "Prof.Shweta Srivastava",
        institute: "Director, Jaypee Institute of Information Technology, Noida",
        linkedin:
          "https://www.linkedin.com/in/shweta-srivastava-b69356a/?originalSubdomain=in",
        website: "https://www.jiit.ac.in/prof-shweta-srivastava",
        image: "/images/shweta.jpg",
      },
      {
        name: "Prof.Rishu Chaujar",
        institute: "Director, Vinod Dham Centre of Excellence for Semiconductors and Microelectronics, Delhi Technological University",
        linkedin:
          "https://www.linkedin.com/in/prof-rishu-chaujar-7064917/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        website:
          "https://dtu.ac.in/modules/facilities/people/faculty/view.php?uname=rishuChaujar",
        image: "/images/rishu.jpg",
      },
   
      {
        name: "Prof.Sujay Deb",
        institute: "Professor, Indraprastha Institute of Information Technology, Delhi",
        linkedin:
          "https://www.linkedin.com/in/debsujay/?originalSubdomain=in",
        website:
          "https://iiitd.ac.in/sdeb",
        image: "/images/sujay.jpg",
      },
      {
        name: "Prof.Nidhi Goel",
        institute: "Professor, Indira Gandhi Delhi Technical University for Women",
        linkedin:
          "https://www.linkedin.com/in/nidhi-goel-7bb48222/?originalSubdomain=in",
        website:
          "https://www.igdtuw.ac.in/profile/details/prof-nidhi-goel",
        image: "/images/nidhi.jpg",
      },
           {
        name: "Prof.Maneesha Gupta",
        institute: "Adjunct Professor, Netaji Subhas University of Technology, Delhi",
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
   {
     title: "Tutorial Chair(s)",
      members: [
       {
         name: "Dr. Sankalp Singh",
         institute: "University Program Manager, Synopsys India. Driving SARA initiative of Synopsys Inc. in the region",
         linkedin:
           "https://www.linkedin.com/in/sankalp-singh-5410055b/",
         website: "https://www.linkedin.com/in/sankalp-singh-5410055b/",
         image: "/images/sankalpsingh.jpeg",
       },
       {
         name: "Dr. Sushama",
         institute: "Senior Programm Manager, Cadence Design Systems",
         linkedin: "https://www.linkedin.com/in/sushamavak/",
         image: "/images/sushama.jpeg",
       },
       {
         name: "Mr. Abhishek Mahajan",
         institute: "Director of Engineering, SoC DFT, Renesas Electronics India Noida",
         linkedin: "https://www.linkedin.com/in/abhishek-mahajan-09648022/",
         image: "/images/abhishek.jpeg",
       },
       {
         name: "Dr. Hemant Kumar",
         institute: "Associate Professor, Jaypee Institute of Information Technology",
         linkedin: "https://www.linkedin.com/in/hemant-kumar-20419972/?originalSubdomain=in",
         image: "/images/hemant.jpeg",
       },
     ],
   },
   {
    title: "Organising Chair(s)",
members: [
{
  name: "Prof. Arti Noor",
  institute: "Dean & HOD, ECE, Jaypee Institute of Information Technology, Noida",
  designation: "Dean & HOD, ECE",
  linkedin: "https://www.linkedin.com/in/arti-noor-3b20a1125/",
  website: "https://www.jiit.ac.in/prof-arti-noor",
  image: "/images/arti.jpg"
},
{
  name: "Prof. Jitendra Mohan (Co-Chair)",
  institute: "Associate Head and Professor, Jaypee Institute of Information Technology, Noida",
  designation: "Associate Head and Professor",
  linkedin: "https://www.linkedin.com/in/jitendra-mohan-67aa7b19/",
  website: "https://www.jiit.ac.in/prof-jitendra-mohan",
  image: "/images/jitendra.jpg"
},
{
  name: "Dr. Rikmantra Basu",
  institute: "Head, Department of ECE, National Institute of Technology, Delhi",
  designation: "Head Department of ECE",
  linkedin: "https://www.linkedin.com/in/rikmantra-basu-82074933a/",
  website: "https://nitdelhi.ac.in/faculty/rikmantra-basu",
  image: "/images/rikmantra.jpg"
},
{
  name: "Prof. Tarun Kumar Rawat",
  institute: "Professor, Netaji Subhas University of Technology, Delhi",
  designation: "Professor",
  website: "https://www.nsut.ac.in/en/node/271",
  image: "/images/tarunrawat.jpg"
},
{
  name: "Prof. Jasdeep Kaur Dhanoa",
  institute: "Professor, Indira Gandhi Delhi Technical University for Women, Delhi",
  designation: "Professor",
  linkedin: "https://www.linkedin.com/in/jasdeep-kaur-dhanoa",
  website: "https://www.igdtuw.ac.in/pdfs/faculty/ece/jasdeepkaur.pdf",
  image: "/images/jasdeep.jpg"
},
{
  name: "Prof. Sumit Darak",
  institute: "Professor and Dean Academics, Indraprastha Institute of Information Technology, Delhi",
  designation: "Professor and Dean Academics",
  linkedin: "https://www.linkedin.com/in/sumit-darak",
  website: "https://iiitd.ac.in/sumit",
  image: "/images/darak.jpg"
},
{
  name: "Dr. Kunwar Singh",
  institute: "Associate Professor, Netaji Subhas University of Technology, Delhi",
  designation: "Associate Professor",
  linkedin: "https://www.linkedin.com/in/ksdelhi/",
  website: "https://www.nsut.ac.in/en/node/272",
  image: "/images/kunwar.jpg"
},
{
  name: "Dr. Inder Kumar Chaudhary",
  institute: "Assistant Professor, VDSemiX, Delhi Technological University",
  designation: "VDSemiX",
  linkedin: "https://www.linkedin.com/in/dr-inder-chaudhary-34702a30/",
  website: "https://dtu.ac.in/Web/Departments/Electrical/faculty/inderchaudhary.php",
  image: "/images/inder.jpg"
},
{
  name: "Dr. Sumit Kale",
  institute: "Assistant Professor, VDSemiX, Delhi Technological University",
  designation: "VDSemiX",
  linkedin: "https://www.linkedin.com/in/sumit-kale",
  website: "https://dtu.ac.in/Web/Departments/Electronics/faculty/sumitkale.php",
  image: "/images/sumitkale.jpeg"
},

]
 },
 {
  title: "Technical Program Committee",
members: [
  {
    name: "Prof. Sudeb Dasgupta (TPC Chair)",
    institute: "Professor, Indian Institute of Technology, Roorkee",
    linkedin: "https://www.linkedin.com/in/sudeb-dasgupta-2b19b64/",
    website: "https://ece.iitr.ac.in/sudeb-das-gupta/",
    image: "/images/sudeb.jpg",
  },
  {
    name: "Mr. Preet Yadav (TPC Chair)",
    institute: "Head India Innovation Ecosystem, NXP Semiconductors",
    linkedin: "https://www.linkedin.com/in/preet-yadav/",
    image: "/images/preet.jpg",
  },
  {
    name: "Prof. Nagarjuna Nallam",
    institute: "Associate Professor, Electrical Engineering, IIT Kanpur (IEEE UP Section)",
    linkedin: "https://www.linkedin.com/in/nagarjunanallam/?originalSubdomain=in",
    image: "/images/nagarjuna.jpeg",
  },

  {
    name: "Prof. Brijesh Kumar",
    institute: "Professor, Indira Gandhi Delhi Technical University for Women, Delhi",
    website: "https://www.igdtuw.ac.in/faculty/ece/brijesh-kumar.php",
    image: "/images/brijesh.jpg",
  },
  {
    name: "Prof. Neeta Pandey",
    institute: "Professor, VDSemiX, Delhi Technological University, Delhi",
    website: "https://dtu.ac.in/Web/Departments/Electronics/faculty/neetaPandey.php",
    image: "/images/neeta.jpg",
  },
  {
    name: "Dr. Manisha Bharti",
    institute: "Associate Professor, Department of ECE, National Institute of Technology, Delhi",
    website: "https://nitdelhi.ac.in/faculty/manisha-bharti",
    image: "/images/manisha.jpg",
  },

  {
    name: "Dr. Shruti Kalra",
    institute: "Associate Professor, ECE, Jaypee Institute of Technology, Noida",
    website: "https://www.jiit.ac.in/dr-shruti-kalra",
    linkedin: "https://www.linkedin.com/in/dr-shruti-kalra-64a799a7/",
    image: "/images/shruti.jpg",
  },
  {
    name: "Dr. Ajay Kumar",
    institute: "Associate Professor, ECE, Jaypee Institute of Technology, Noida",
    website: "https://www.jiit.ac.in/dr-ajay-kumar",
    image: "/images/ajay1.jpg",
  },
  {
    name: "Mr. Varun Kakkar",
    institute: "Assistant Professor, Bipin Tripathi Kumaon Institute of Technology (IEEE UP Section)",
    website: "https://kecua.ac.in/index.php/member/mr-varun-kakar/",
    image: "/images/varun.jpg",
  }, 
  {
    name: "Dr. Pinku Ranjan",
    institute: "Assistant Professor, ABV- IIITM Gwalior",
    website: "https://www.linkedin.com/in/dr-pinku-ranjan-62aa0332/?originalSubdomain=in",
    image: "/images/pinku.jpeg",
  },
  {
    name: "Dr. M. S. Mehata",
    institute: "Assistant Professor, VDSemiX, Delhi Technological University, Delhi",
    image: "/images/mehata.jpg",
  },

  {
    name: "Dr. Urvashi Bansal",
    institute: "Assistant Professor, Netaji Subhas University of Technology, Delhi",
    website: "http://www.nsut.ac.in/en/faculty/urvashi-bansal",
    image: "/images/urvashi.jpg",
  },
  {
    name: "Dr. Shweta Gautam",
    institute: "Assistant Professor, Netaji Subhas University of Technology, Delhi",
    website: "http://www.nsut.ac.in/en/faculty/shweta-gautam",
    image: "/images/shweta1.jpg",
  }
],
},
  {
     title: "Finance Chair",
     members: [
       {
         name: "Prof. Jasmine Saini ",
         institute: "Professor, Jaypee Institute of Information Technology, Noida",
         website: "https://www.jiit.ac.in/prospective-student/faculty/prof-jasmine-saini",
         image: "/images/jasmine.jpeg",
       },
     ],
   },

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
  {
     title: "Startup Chair(s)",
     members: [
       {
         name: "Mr. Nishit Gupta",
         institute: "Scientist E, MeitY",
         linkedin: "https://www.linkedin.com/in/guptanishit/?originalSubdomain=in",
         image: "/images/nishit.jpeg",
       },
       {
         name: "Mr. Taranjit Singh Kukal",
         institute: "Sr. Architect, Cadence Design Systems",
         linkedin: "https://www.linkedin.com/in/taranjitkukal/",
         image: "/images/taranjitsingh.jpeg",
       },
       {
         name: " Mr. Manoj Kumar",
         institute: "Director, STMicroelectronics",
         linkedin: "https://www.linkedin.com/in/k-manoj/",
         image: "/images/manojk.jpg",
       },
       {
        name: "Prof. Alpana Agarwal",
        institute: "Professor at Thapar Institute of Engineering and Technology",
        website: "https://www.linkedin.com/in/alpana-agarwal-1542b118/?originalSubdomain=in",
        image: "/images/alpana.jpeg",
        },
       {
         name: "Prof. Alok Joshi",
         institute: "Professor, Jaypee Institute of Information Technology",
         linkedin: "https://www.linkedin.com/in/prof-dr-alok-joshi-7897b858/?originalSubdomain=in",
         image: "/images/alokjoshi.jpeg",
       },
       {
         name: "Mr. Abhishek Tiwari",
         institute: "Associate Director & Scientist ‘F’, C-DAC, Noida",
         linkedin: "https://www.linkedin.com/in/abhishek-tiwari-b34b2711b/?utm_source=share_via&utm_content=profile&utm_medium=member_android",
         image: "/images/abhishektiwari.jpeg",
       },
      
     ],
   },
   {
     title: "PhD Forum Chair(s)",
    members: [
       {
         name: "Dr. Shruti Jain",
         institute: "Dean (Academics) and Professor at Jaypee University of Information Technology, Waknaghat",
         linkedin: "https://www.linkedin.com/in/dr-shruti-jain-92705b130/",
         image: "/images/shrutijain.jpeg",
       },
       {
         name: "Dr. Rishibrind Upadhyay",
         institute: "Assistant Professor (Senior Grade), Jaypee Institute of Information Technology, Noida",
         linkedin: "https://www.linkedin.com/in/dr-rishibrind-upadhyay-a1379a117/?utm_source=share_via&utm_content=profile&utm_medium=member_android",
         image: "/images/rishibrind.jpeg",
       },
     ],
   },
  {
    title: "Publication Chair",
    members: [
      {
        name: "Prof. Sumit Darak",
        institute: "Professor,IIIT Delhi",
        linkedin: "https://www.linkedin.com/in/sumitdarak/", // add later
        image: "/images/sumitd.jpeg",
      },
      {
        name: "Dr. Devanand",
        institute: "Professor,Delhi Technological University (DTU) ",
        linkedin: "https://www.linkedin.com/in/dr-deva-nand/",
        image: "/images/devanand.jpg",
      },
      {
        name: "Dr. Bharti Singh",
        institute: "Professor,Delhi Technological University (DTU) ",
        linkedin: "https://www.linkedin.com/in/bharti-singh-b17b0128/",
        image: "/images/bhartisingh.jpg",
      },
      {
        name: "Dr. Neeraj Goel",
        institute: "Assistant Professor,Netaji Subhas University of Technology (NSUT) ",
        linkedin: "https://www.linkedin.com/in/neeraj-goel-28597293/",
        image: "/images/neerajg.jpg",
      },
      {
        name: "Prof. Richa Gupta",
        institute: "Professor,Jaypee Institute of Information Technology (JIIT), Noida",
        linkedin: "https://www.linkedin.com/in/dr-richa-gupta-37908b19/",
        image: "/images/richa_gupta.jpeg",
      },
      {
        name: "Dr. Sandeep Chauhan",
        institute: "Assistant Professor,Netaji Subhas University of Technology (NSUT) ",
        linkedin: "https://www.linkedin.com/in/sandeep-singh-chauhan-124a40279/",
        image: "/images/sandeep.jpg",
      },
    ],
  },
  {
  title: "Sponsorship Chair",
  members: [
    {
      name: "Prof. Sajaivir Singh",
      institute: "Professor, Jaypee Institute of Information Technology, Noida",
      linkedin: "https://www.linkedin.com/in/sajaivir-singh-75481145/", // add later if needed
      image: "/images/sajaivir.jpg", // make sure image exists
    },
  ],
},
  {
    title: "Publicity and Outreach Chair(s)",
     members: [
      {
         name: "Dr. Somesh Kumar Dahiya",
         institute: "Assistant Professor, ABV-IIITM, Gwalior",
         linkedin: "https://www.linkedin.com/in/dr-somesh-kumar-dahiya-b551a836/?originalSubdomain=in",
         image: "/images/somesh.jpeg",
       },
       {
         name: "Meghana Shridhar",
         institute: "Lead Technical Writer, Omni Design Technology",
         linkedin: "https://www.linkedin.com/in/meghana-sridhar-0918aaa2/",
         image: "/images/meghana.jpeg",
       },
       {
         name: "Dr. Ashish Gupta",
         institute: "Associate Professor, Jaypee Institute of Information Technology, Noida",
         linkedin: "https://www.linkedin.com/in/dr-ashish-gupta-62406a35/?originalSubdomain=in",
         image: "/images/ashishgupta.jpeg",
       },
       
     ],
   },
  {
    title: "Registration Chair",
    members: [
      {
        name: "Prof. Ashish Goel",
        institute: "Professor, Jaypee Institute of Information Technology, Noida",
        linkedin: "", // add later if needed
        image: "/images/ashishg.png", // ensure this file exists
      },
    ],
  },
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

<div className="flex flex-wrap justify-center gap-8">
  {members.map((member, index) => (
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

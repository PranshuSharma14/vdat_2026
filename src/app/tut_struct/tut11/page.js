"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Workshop on Accelerating System Design: HDL Code Generation and Verification Techniques",
    duration: "90 minutes",
    speakers: ["Dr. Kala S", "Dr. Anand Mukhopadhyay"],
    format: "Workshop (including demos)",
    abstract:
      "In the rapidly evolving landscape of digital system design, engineers and researchers face increasing demands for faster development cycles, higher design reliability, and efficient deployment of complex algorithms onto hardware platforms. Traditional hardware design flows—often reliant on manual Hardware Description Language (HDL) coding and labour-intensive verification—can be time-consuming and error-prone, ultimately slowing innovation and prolonging time-to-market. To address these challenges, this comprehensive tutorial aims to equip participants with modern, model-based workflows that leverage the power of MATLAB and Simulink for streamlined HDL code generation and robust verification. The workshop demonstrates how system architects and engineers can move efficiently from conceptual algorithms to verified, synthesizable hardware designs, highlighting the use of HDL Coder and HDL Verifier—two industry-standard tools from MathWorks that facilitate automatic HDL code generation and comprehensive verification. This tutorial is designed for engineers, researchers, and students involved in FPGA, ASIC, or SoC design who wish to accelerate the design process by automating code generation from high-level models, ensure design correctness through systematic verification techniques, reduce human error inherent in manual HDL development, and achieve faster time-to-market for innovative products.",
    domain:
      "Electronics Design Automation, Testing and Verification",
    keywords:
      "Model-based design, HDL Code Generation, HDL Verification, Design Optimization",
    learningOutcomes: [
      "Understand the advantages of model-based design for digital hardware systems and how it contrasts with traditional design methodologies",
      "Gain practical experience in using HDL Coder to automatically generate efficient and synthesizable HDL code from high-level models",
      "Acquire proficiency in verification workflows using HDL Verifier, including co-simulation and hardware-in-the-loop techniques",
      "Learn how to optimize and customize generated HDL code to meet specific hardware requirements, such as timing, area, and power constraints",
      "Develop the skills to integrate model-based workflows into existing hardware design environments, facilitating collaboration and scalability"
    ],
    targetAudience:
      "Digital design engineers working with FPGAs, ASICs, or SoCs, system architects and verification engineers seeking to modernize their development workflows, faculty, researchers and students interested in applying MBD to hardware projects, and technical managers aiming to improve team productivity and design reliability.",
    prerequisites:
      "Understanding the basics of VLSI Design Flow. Attendees having previous experience working with MATLAB and Simulink is optional but helpful. Attendees who wish to try the hands-on demos will need access to a PC with internet access and an installed version of MATLAB as well as the Hardware Support Package for the FPGAs being used.",
    speakerBiographies: [
      `Dr. Kala S is an Assistant Professor at Indian Institute of Information Technology (IIIT) Kottayam and is leading the Intelligent Integrated Circuits and Systems Research Group (I2CS), where she is taking numerous innovative research and development projects for various industries/agencies, leading to products as well as systems. Kala received her PhD degree from Cochin University of Science And Technology, Kerala, in 2020, her MS (by Research) degree from Center for Nano Science and Engineering (CeNSE), Indian Institute of Science Bangalore in 2013. She is the recipient of prestigious WISER Award (Women Involvement in Science and Engineering Research) from Indo-German Science & Technology Centre (IGSTC), established by DST, Govt of India and the Federal Ministry of Education and Research (BMBF), Government of Germany, in the year 2023. Her research, teaching and industry facing activities include Digital System Design, System-On-Chip Design, VLSI and FPGA based system design, Computer Architecture, Intelligent systems for various applications and hardware acceleration of digital signal processing algorithms. She has published research papers in these areas in reputed journals and conferences. Her team has received 'Microchip VLSI Design Contest' at 38th IEEE International Conference on VLSI Design (VLSID) held at Bangalore in the year 2025.`,
      `Dr. Anand Mukhopadhyay is a Senior Engineer on the Education Team at MathWorks, Bangalore, where he has been contributing since August 2020. He collaborates with academic institutions and educators to enhance their curriculum and research initiatives. Before joining MathWorks, Anand completed his Ph.D. in neuromorphic computing applications at IIT Kharagpur (2015–2020). He also holds an M. Tech. in VLSI Design and Embedded Systems from NIT Rourkela (2012–2014) and a B.Tech. in Electronics and Communication Engineering from Techno India College of Technology (2008–2012). Anand has authored and co-authored research articles in various journals and conferences. His interests focus on digital VLSI, HDL code generation workflows, artificial intelligence applications.`
    ],
    basicStructure: `The tutorial is structured to provide comprehensive coverage of HDL code generation and verification techniques:

Presenter- Dr. Kala S (15 minutes)
1. Introduction and Use Cases
   - Overview of traditional vs. modern hardware design flows
   - Real-world applications and industry challenges
   - Benefits of automated design workflows

Presenter- Dr. Anand Mukhopadhyay (10 minutes)
2. Model-Based Design Fundamentals
   - MBD principles and benefits in hardware system development
   - Role of MATLAB and Simulink in modeling and simulation
   - Design exploration and algorithm development

Presenter- Dr. Kala S (10 minutes)
3. HDL Code Generation with HDL Coder
   - Fundamentals of High-Level Synthesis (HLS)
   - Converting Simulink models to synthesizable VHDL/Verilog
   - Customization options for resource optimization

Presenter- Dr. Anand Mukhopadhyay (10 minutes)
4. HDL Code Verification with HDL Verifier
   - Verification workflows and methodologies
   - Co-simulation between MATLAB/Simulink and HDL simulators
   - FPGA-in-the-loop (FIL) verification techniques

Presenter- Dr. Kala S & Dr. Anand Mukhopadhyay (20 minutes to 1 hour)
5. Hands-On Demos
   - Signal Processing example: FIR filter implementation
   - Image Processing: Image Sharpening algorithms
   - Deep Learning: Deploying trained models for vehicle detection
   - Design, Implementation, and Verification on FPGA

Presenter- Dr. Anand Mukhopadhyay (10 minutes)
6. Design Optimization Techniques
   - Optimizing generated HDL code for timing, area, and power
   - Best practices for scaling workflows in complex systems

Presenter- Dr. Anand Mukhopadhyay & Dr. Kala S (15 minutes)
7. Resources and Interactive Q&A
   - Access to project templates and learning resources
   - Discussion of design challenges and expert feedback`,
    youtubeVideoId:"1qtrfUlwZ2h7vQqiODmSRWxy-wK6V6QB6",
    videoId: "1qtrfUlwZ2h7vQqiODmSRWxy-wK6V6QB6", // Replace with actual video ID
    videoType:"gdrive"
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-black">
        <Navbar />
      </div>

      <TutorialComponent {...tutorialData} />

      <Footer />
    </div>
  );
};

export default TutorialPage;
"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Neuromorphic Sensors: Architectures, IC Design Techniques, and Emerging Applications",
    duration: "90 minutes",
    speakers: ["Dr. Satyajit Mohapatra", "Vishwanath Madhugiri"],
    format: "Presentation",
    abstract:
      "This tutorial on neuromorphic event-based sensors will serve as a prelude to the exploration of neuromorphic engineering and brain-inspired systems. It will introduce the concepts and implementation strategies behind neuromorphic sensors, focusing on their IC design, pixel architecture, event-driven processing pipeline, metavision, and integration challenges. It will also explore how neuromorphic sensors are enabling breakthroughs in cutting-edge fields like robotics, augmented reality (AR), virtual reality (VR), automotive vision, and surveillance. This tutorial equips participants with the knowledge and tools and bio-inspired systems that shape the future of AI hardware. The increasing demand for intelligent, low-power, and real-time sensing systems imposes critical design challenges that are difficult to be met by conventional sensors. Neuromorphic vision technology marks a transformative leap in sensor technology, which attempts to mimic the energy-efficient ways of the human brain. It essentially combines scientific principles from neuroscience, mathematics, computer science, and electrical engineering to replicate the human visual system on silicon hardware (artificial retina). Traditional sensors operate on a continuous sampling basis, capturing data at fixed intervals known as frames. In contrast, cameras featuring event-based technology enable fast imaging by focusing only on changes in their field of view, like a pixel being activated when it detects a change in light. Each pixel in this sensor can act like a neuron, activating independently and asynchronously based on the number of photons it detects, creating an 'event.' These events are then used to reconstruct the scene.",
    domain:
      "VLSI Circuit and SoC Design- Neuromorphic",
    keywords:
      "Neuromorphic Image Sensors, Metavision, CMOS Image Sensor, Event Based Sensors, Dynamic Vision Sensors",
    learningOutcomes: [
      "Deep understanding of neuromorphic sensing principles and pixel architectures",
      "Analytical insights into the IC design of asynchronous, event-based sensors",
      "Architectures and implementation of dynamic vision sensors",
      "Logarithmic pixel response and dynamic range enhancement",
      "Exposure to emerging trends, commercial products, and applications"
    ],
    targetAudience:
      "VLSI designers, circuit architects, embedded system developers, academic researchers, and postgraduate students. Attendees interested in Artificial Intelligence (AI) & Machine Learning (ML), low-power systems, or biologically inspired systems will find the session especially valuable.",
    prerequisites:
      "A basic familiarity with CMOS sensor design and mixed-signal circuits with keen interest in cutting edge sensor technologies is recommended but not mandatory.",
    speakerBiographies: [
      `Dr. Satyajit Mohapatra is currently a Senior Analog Design Engineer at Luminasic Pvt. Ltd., which specializes in the development of electro-optical payloads for military deployments, space-based astronomy, and high-resolution earth observation satellites. He obtained his M. Tech. and Ph.D. from the Department of Electrical Engineering, Indian Institute of Technology (IIT) Gandhinagar, India. His research interests include analog CMOS IC design, RF IC design, the design and layout of mixed-signal integrated circuits, high-speed CMOS data converters, and readout integrated circuits (ROIC). He has been on the review panels of prestigious IEEE journals and conferences such as IEEE INDICON and the Mid-West Symposium on Circuits and Systems (IEEE-MWSCAS). He is also the author of 16 publications, including IEEE Transactions and articles. With over a decade of experience in various academic institutions as well as industry, including the Indian Space Research Organization (ISRO), he specializes in the design of mixed-signal integrated circuits and ROICs.`,
      `Vishwanath Madhugiri is the chief innovation and strategy officer at Saaz Micro, Inc., a renowned leader in advanced image sensor product research and development, with applications spanning space, airborne, and specialty imaging. His role at Saaz Micro, Inc., to establish business relationships with industries worldwide, places him at the forefront of cutting-edge technology, driving innovation in imaging sensors that impact a wide range of industries. His team at SAAZ's consists of world-renowned scientists in the high-end imaging field. With over fifty imaging inventions, hundreds of international publications, and several active patents, the SAAZ team has been instrumental in delivering mission-critical camera electronics for the James Webb Telescope (JWST), NASA, ISRO, and other defense and space agencies across the globe. Earlier, he served as the chief innovation officer at Lycamobile, the world's largest Mobile Virtual Network Operator. He also served as a member of the advisory council of the prestigious 'The Naveen Jindal School of Management—The University of Texas, Dallas.' Vishwanath held senior positions at Infosys and the TATA Group. He has set up strategic partnerships, including the Cambridge University-Infosys Technologies strategic research collaboration. In 2014, he received an invitation from Queen Elizabeth II to Buckingham Palace, partly in recognition of his work in the Department of International Trade. His recognition by Her Majesty Queen Elizabeth is a testament to his exceptional contributions to the society.`
    ],
    basicStructure: `The tutorial is structured to provide comprehensive coverage of neuromorphic sensor technology across multiple domains:

Presenter- Vishwanath Madhugiri (15 minutes)
1. Concept of Neuromorphic Vision
   - Introduction to neuromorphic systems
   - Frame-based vs. event-based sensors
   - Biological inspiration: artificial retina
   - Advantages, modes, variants and challenges

Presenter- Satyajit Mohapatra (20 minutes)
2. Neuromorphic Sensor Architectures
   - DVS Dynamic Vision Sensor Overview
   - ATIS Asynchronous Time-based Image Sensor
   - DAVIS Dynamic and Active-pixel Vision Sensor
   - HVS Hybrid Vision Sensors Overview

Presenter- Satyajit Mohapatra (25 minutes)
3. Neuromorphic Circuit Fundamentals
   - Concept of perceived brightness
   - CMOS pixel design principles for DVS
   - Logarithmic response & dynamic range
   - Integration of photodiode in DVS
   - Noise immunity and spurious event suppression
   - Comparator and timestamp generator
   - Address-event encoding schemes, arbiter design
   - Time-to-first-spike, temporal resolution

Presenter- Vishwanath Madhugiri (20 minutes)
4. Emerging Trends and Applications
   - Robotics: real-time obstacle avoidance and SLAM
   - Automotive: low-latency driver assistance and autonomous navigation
   - Surveillance and gesture recognition in AR/VR systems
   - Neuromorphic fusion with other modalities: IMUs, LIDAR, radar
   - Future directions: bio-inspired processing, hybrid frame + event systems

Presenter- Satyajit & Vishwanath Madhugiri (10 minutes)
5. Interactive Audience Question and Answers Sessions`,

    youtubeVideoId: "1uJq5RijCkVZf5RWc-9FAm5wmaq6L576D", 
    videoId:"1uJq5RijCkVZf5RWc-9FAm5wmaq6L576D",
    videoType:"gdrive,"
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
"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "CMOS ANALOG DESIGN",
    duration: "90 minutes",
    speakers: ["Prof HS Jattana"],
    format: "Presentation and discussion",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract:
      `The tutorial will cover the available components in CMOS technology for design of analog
and mixed signal products, like various types of Tx, resistors, capacitors and Inductors - how
to use these in circuit design in terms of advantages and layout. The tutorial will focus on
design issues in the complete process of product development - " from specifications to
qualified product". The test case of radiation hardened ADC for military and space
applications will be discussed`,

    domain:
      "VLSI CIRCUITS AND SOC DESIGN",
    keywords:
      "CMOS TECHNOLOGY DEEP SUB MICRON VLSI DESIGN RADIATION HARDENED QUALIFIED PRODUCT",
    learningOutcomes: [
      "1. to know about available components in Deep Sub Micron DSM CMOS Technology 2. To learn the design flow of analog products 3. Front end analog design and physical design issues 4. To know issues in designing military and space qualified products",
    ],
    targetAudience:
      "UG,PG, Scholars",
    prerequisites:
      "NIL",
    speakerBiographies: [
      `Received his engineering education from BITS Pilani. Worked as Design Engineer with
Rockwell semiconductor, Newport Beach USA for 1.5 years where he worked in design of
65C series of digital devices. Later Joined Semiconductor Lab (SCL).
Has hands-on experience in different areas of semiconductor technology like CMOS Process
development & Integration, VLSI Design, VLSI testing and characterization.
As Scientist G and Group Head of Design and Process Group he led a team of 74 Scientists
and the Group developed 95 standard products, space qualified and used in space
technology and applications. These were different architectures of ADC/DAC, LDOs, Data
communication protocols, etc.
The compatible processes developed under his leadership were – Analog modules on
baseline TS180SL, Bipolar device technology, CCD technology & Devices like TDI, FT And SOI
CMOS.
Was awarded ISRO award for his contribution to Space launch Vehicle and Spacecraft
electronics for the year 2020.
At present he is Adjunct Prof at DhiruBhai Ambani University (DAU) Gandhinagar, MNIT
Jaipur and PGIMER and is taking courses on VLSI Design and Technology.
He is actively involved in the promotion of semiconductor manufacturing schemes of MEITY
as member and chairman of few committees in C2S, DLI etc.`,
    ],
    basicStructure: `
1 speaker`,

    youtubeVideoId: "6oDRag_Glv8", // Replace with actual video ID
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

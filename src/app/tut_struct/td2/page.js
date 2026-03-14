"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Metric Driven Verification of a typical Low Power Mixed Signal (LPMS) SoC",
    duration: "90 minutes",
    speakers: ["Lalit Mohan"],
    format: "Presentation",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract:
      `The complexity of Low Power Mixed Signal Systems-on-Chip (SoCs) demands
a verification strategy that integrates expertise from multiple domains, including
analog, digital, verification methodology, and low power design. To meet time-
to-market challenges, a well-planned verification architecture is crucial.

This tutorial presents a comprehensive methodology for verification of Low Power
Mixed Signal SoCs, focusing on achieving complete coverage with minimal
simulation and debug time. The approach to be covered in thistutorial emphasizes
automation, parallel development cycles, and optimized simulation performance,
ensuring faster identification and closure of critical design issues.

By providing clear debug guidelines and streamlining the verification process, the methodology
reduces the number of iterations required for block and sub-block verification,
ultimately accelerating the overall verification efficiency and time-to-market for
Low Power Mixed Signal SoCs.

A sample Low Power Mixed Signal Systems-on-Chip will be used to describe
an efficient metric driven. In this tutorial, I will discuss the real time challenges
and possible solutions during LPMS SoC verification. The tutorial will cover
different aspects mainly categorized as:

• Writing Power Intent for LPMS SoC using IEEE 1801 UPF.
• Define domain conversion elements to cater Multi Supply.
• Integrating Analog IP in SoC Design
• Setting Up the UVM Testbench with different Power Modes of SoC
• Handling multiple issues during verification including incorrect supply, unwanted X-State, Low Power Boundary issues, Analog solver convergence issues, performance and integration challenge.

The LPMS SoC used in tutorial will be like modern time SoCs like micro-
controllers and other SoC used in automotive and industrial applications. After

attending the tutorial, audience will learn a modern time metric driven
methodology used by a seasoned verification architect to reduce debug and
verification time.`,

    domain:
      "This falls at the intersection of computer architecture and artificial intelligence.",
    keywords:
      "Tensor Processing Unit (TPU), Computer Architecture, Artificial Intelligence, Hardware Accelerator, Systolic Array",
    learningOutcomes: [
      "a) Understanding the importance and potential of hardware accelerators for AIb) Understanding the architecture and salient features ofGoogle's Tensor Processing Unitc) Understanding the relative comparison of architectures ofgeneral-purpose (CPU/GPU) and custom accelerators",
    ],
    targetAudience:
      "The tutorial is targeted for Analog and Mixed Signal enthusiasts. Audience can include students and corporates.",
    prerequisites:
      "Basic knowledge of Analog and Mixed Signal blocks is required. Knowledge of Low Power Concepts are good.",
    speakerBiographies: [
      `
Lalit has 19+ year of experience in Analog and Mixed Signal Modeling and
Verification. He is working with Cadence Application Specialist and Knowledge
team as Senior Principal AMS Application Engineer. Lalit has authored 450+
technical articles including Application Note, Rapid Adoption Kits Videos etc.
on Analog and Mixed Signal domain. He is author of the famous application note
“Seven Habits of Highly Efficient Mixed Signal Verification Engineers”
available at Cadence Online Support. Lalit has published multiple papers and
posters in multiple conferences including VDAT 2024. Lalit owns a LinkedIn
group on Analog Mixed Signal Verification where he posts AMS technologies
regularly. Lalit has master’s degree in VLSI design from CDAC Noida and
bachelor’s degree from AMIETE Delhi. His interest areas include AMS, SV
RNM modeling and verification.`,
    ],
    basicStructure: `The tutorial titled:
“Verification Methodologies for Low Power Mixed Signal (LPMS) SoCs”
will be highly relevant to students, researchers, and professionals working in the areas of SoC verification, low power design, and mixed-signal simulation.

1. Introduction and Applications of a Typical Low Power Mixed Signal (LPMS) SoC Verification (5 Mins)
– Overview of LPMS SoCs and their relevance
– Typical applications in industry and research

2. Block Diagram and Low Power Architecture of LPMS SoC (15 Mins)
– Architecture of the analog top
– Architecture of the digital top
– Power-aware block integration and management

3. Driving the UPF Power Supply Network (15 Mins)
– Adding Voltage Control Techniques (VCT) to the supply net
– Choosing the correct input impedance
– Analyzing UPF at both top-level and block-level

4. Setting Up the UVM Testbench (15 Mins)
– Defining multiple UVM components for power-aware simulation
– Handling multiple power sequences within UVM
– Creating probes and testbench observability
– Writing assertions for power management validation

5. Setting Up EDA and Farm Resources (15 Mins)
– Domain Conversion Element (DCE) setup
– Analog solver configuration and presets
– Resource allocation and farm requirements for simulation

6. Debugging Issues During Simulation (15 Mins)
– Techniques for identifying and resolving simulation mismatches
– Common issues and resolution approaches in mixed-signal verification

7. Conclusion and References (3 Mins)
– Key takeaways from the session
– Reference materials and follow-up readings

8. Q&A (7 Mins)
– Open discussion and clarification on topics covered`,

    youtubeVideoId: "1gEyRUslR2OmUOCT8PhWC5oH1TbdpI06e", // Replace with actual video ID
    videoId: "1qtrfUlwZ2h7vQqiODmSRWxy-wK6V6QB6",
    videoType: "gdrive"

    
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

"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";
import { Video } from "lucide-react";

// 1. Title of the Tutorial Foundry Compliance and Tapeout Qualification of Analog,
// Digital, and Mixed-Signal IC Designs for SCL 180nm CMOS
// Technology Node

// 2. Duration
// (90mins/180mins)

// 180 Minutes

// 3. Names of the Speaker(s) Speaker 1: Venkata Reddy Kolagatla
// Speaker 2: Vivian Desalphine

// 4. Format of the Tutorial
// (Tick the suitable choice) Presentation (√) / Workshop/ Demo/ Discussion/ Other
// 5. Abstract (600-1000 words): ChipIN Centre under Chips to Startup (C2S) Programme was set
// up at C-DAC Bangalore by Ministry of Electronics and Information Technology (MeitY),
// Government of India, to catalyze chip designing in India by catering to fabless chip design
// ecosystem in the country. The facility provides Multi-Project Wafer (MPW) support to
// Academic Institutions, Startups and MSMEs by enabling access to SCL foundry and overseas
// foundries. It provides centralized EDA Design Tools (Synopsys, Cadence, and Siemens-EDA,
// Xilinx, Ansys, Keysight, Silvaco) for IC design flow. The facility also provides design services like
// Fab compliance checks, validation, integration of designs, coordinating with identified firm for
// packaging of fabricated chips and enabling characterization and prototyping in a centralized
// manner. A significant component of this effort is exposing Academia, Govt. R&D organizations,
// and Startups/MSMEs to the entire VLSI Design flow necessary to have their designs ready for
// fabrication at SCL Foundry.
// This tutorial presents a comprehensive methodology for achieving foundry compliance and
// tapeout qualification of analog, digital, and mixed-signal integrated circuit (IC) designs
// targeting the SCL (Semiconductor Laboratory) 180nm CMOS technology node. Successful
// silicon fabrication and packaging readiness require designers to follow a stringent sequence
// of steps that ensure full alignment with foundry-specific rules and process constraints. This
// Tutorial outlines the critical design practices and verification procedures required before and
// during physical verification to achieve fabrication-ready designs.
// Prior to physical verification, several key design preparations must be carried out to meet
// SCL’s process requirements. These include the placement of a unique silicon identification
// number, which is mandatory for traceability and foundry recordkeeping. Seal-ring insertion is
// also performed according to SCL’s guidelines to protect the active silicon during dicing and
// handling. Input/Output (IO) pad pitch requirements must be satisfied to enable proper
// interfacing with packaging and ensure manufacturability. The correct usage of clock pads and
// a robust power delivery strategy are also considered, ensuring the chip can be reliably
// powered and synchronized in real-world applications.
// Dummy cell insertion is applied to maintain metal density uniformity across the chip, which is
// crucial for avoiding topographical irregularities during chemical-mechanical polishing (CMP).
// The IO pad ring is constructed either with standard cells or with cut-cells, depending on the
// corner and routing configurations required. These steps are essential to establish a reliable
// and package-compatible layout boundary.

// Once the design is finalized, it enters the physical verification phase, which includes a suite of
// critical checks. Design Rule Checks (DRCs) ensure that the layout adheres to all geometrical
// constraints defined by the SCL 180nm PDK. Antenna Rule Checks are then performed to detect
// and resolve violations that could result in gate oxide damage during plasma etching steps.
// Layout vs. Schematic (LVS) verification ensures the physical layout matches the intended
// logical functionality and connectivity described in the netlist.
// Following LVS, parasitic extraction is performed to capture layout-induced resistive and
// capacitive effects. These parasitics are incorporated into post-layout SPICE simulations, which
// are run across multiple Process, Voltage, and Temperature (PVT) corners to validate circuit
// functionality, performance, and robustness. Ensuring SPICE closure under all expected
// operating conditions is essential to guarantee first-silicon success.
// Upon successful verification, the design is prepared for tapeout sign-off. The final database,
// typically in GDSII format, is submitted along with required documentation including layer
// maps, fill patterns, test structures, and foundry checklists. Parallel to this, packaging
// compliance steps are carried out. This includes ensuring correct bond pad placement,
// adhering to bond wire length and loop height constraints, and generating a complete bonding
// diagram for packaging assembly. These packaging-specific checks are crucial for ensuring
// mechanical stability and electrical integrity post-fabrication.
// A structured checklist-driven approach is followed throughout the process to track
// compliance with all foundry and packaging specifications. The comprehensive methodology
// described ensures a high level of design reliability, facilitates a smooth tapeout process, and
// maximizes the likelihood of first-pass silicon success.
// 6. Domain of the Tutorial “Electronics Design Automation, Testing and Verification” and

// “Packaging and Manufacturing”

// 7. Keywords SCL 180nm CMOS process, Digital and Analog/Mixed-Signal
// ASIC designs, Design for Manufacturability (DFM), Reliability
// and Integrity, Physical Verification and Validation, Tape-out,
// Packaging.

// 8. Learning Outcomes The tutorial on “Foundry Compliance and Tapeout Qualification
// of Analog, Digital, and Mixed-Signal IC Designs for SCL 180nm
// CMOS Technology Node” will be vital for VLSI Design 2025
// attendees. The main learning objectives are mentioned below:
// • It serves as a comprehensive guide for designers, offering
// critical insights and necessary inputs for preparing and
// submitting designs to SCL foundry.
// • Aims to ensure clarity and facilitate the seamless
// execution of tapeout processes, thereby enhancing the
// overall quality and reliability of integrated circuit
// fabrication for SCL 180nm Process Design Kit (PDK).
// • Introducing the indigenous SCL 180nm foundry process to
// industry professionals, researchers, and VLSI students;
// enabling them to use it for silicon implementation of their
// products or projects.
// • Challenges and opportunities in Physical verification and
// validation of Digital and Analog/Mixed-Signal ASIC Designs
// for VLSI students, researchers, and professionals.

// • Ensuring the integrity, manufacturability (DFM), and
// reliability of the designs prior to tapeout at the SCL 180nm
// foundry.
// • Tremendous opportunity for industry professionals in the
// fields of electronics system design and manufacturing,
// ASIC design & verification, as well as VLSI students &
// experts to understand the capabilities of SCL 180nm
// foundry process and utilize it for silicon implementation of
// their products or designs.

// 9. Target Audience The tutorial caters to a diverse audience, including VLSI
// professionals, experts, researchers, physical designers, custom
// layout developers, tech enthusiasts, students and lecturers.

// 10. Prerequisites from the
// audience (If any)

// Should be familiar with basics of VLSI, Foundry Process and
// Technology, Digital and Analog Systems, basic knowledge of

// Digital VLSI ASIC design, and custom CMOS Analog/Mixed-
// Signal circuit design.

// 11. Speaker’s Biography
// Biography of Speaker 1:
// Venkata Reddy Kolagatla is a Scientist-D working at C-DAC Bangalore for the past seven years.
// Earlier, he worked with Synopsys India Pvt. Ltd. for one year as Senior Analog Design Engineer
// and prior to that, for three years at Sandisk India Pvt Ltd as Design Engineer II. He is Gold
// Medalist from the prestigious NIT Tiruchirappalli in his masters in the VLSI Systems
// specialization. He completed his B.Tech from Vignan’s Engineering College affiliated to JNTU
// Kakinada in Electronics and Communication Engineering (ECE).
// During his professional career at Synopsys and Sandisk, he worked on SDR/DDR1/DDR2/DDR3
// industry standard Signal/Power Integrity aware IO Designs (Input receivers and Output
// transmitters) with Electrostatic discharge (ESD) and Latch-up considerations. His contributions
// involve design & development of peripherals (include Analog mixers, Duty Cycle Correctors,
// Frequency Dividers, Signal Drivers, On-Die Termination (ODT) Circuits, Calibration Circuits for
// Process Voltage & Temperature variations) for Single Data Rate (SDR), Double Data Rate
// (DDR), DDR2 and DDR3 speeds of 2D/3D NAND flash memories.
// Currently at C-DAC Bangalore, Mr. Venkat has worked in the areas of Cryptography, tamper
// resistant Crypto IP Cores Design, Development and Validation, System-On-Chip (SoC) Design
// and Development, SoC Peripherals such as Serial Peripheral Interface (SPI), Quad SPI (QSPI),
// Pulse Width Modulator (PWM), General Purpose Input Output Circuits (GPIOs), Timers,
// Watchdog Timer (WDT) Design and Implementation, Digital ASIC Physical Design and Physical
// Verification, etc.
// He played a key role in earlier SMDP C2SD project where he was instrumental in establishing
// RTL to GDS II IC Design flow using SCL 180nm PDK with the Cadence and Siemens EDA Tools.
// The experience gained was tremendously valuable in the physical verification of the various
// designs from academic institutes across the country. As part of Chip Centre, he led a team

// that carried out the physical design of SPI enabled AES Encryptor and IEEE 754 FPU (Single-
// Precision) Digital ASICs from RTL design to GDS-II generation using SCL 180nm foundry PDK

// and successfully completed the tapeout for both the designs to SCL Foundry. As part of ChipIN
// Centre activities under Chips to Start-up (C2S) Programme, he is involved in design and

// development activities targeting ASIC and technically supporting various academic institutes
// across the country.
// His technical strengths and interests include FPGA and ASIC based design and development,
// Analog and Mixed-Signal Design, IP core development of algorithms for Cryptanalysis/
// Cryptography, Post Quantum Cryptography, Signal Integrity, and Power Integrity aware IO
// design, SoC design and development. He has numerous publications in reputed international
// journals and conferences, and he has presented at various seminars, workshops, and
// international conferences; he is widely recognized for his impactful research contributions.
// Biography of Speaker 2:
// Vivian Desalphine is Scientist-F at Centre for Development of Advanced Computing (C-DAC),
// Bangalore with 20 years of experience. He is currently involved in Chips-to-Startup
// Programme, Design Linked Incentive and RISC-V based GPU development. He has been
// involved in various projects and programmes of national importance, viz. Microprocessor
// Development Programme, Chip-Centre for SMDP Chips-to-Systems Design, Cryptographic
// Module Validation Technologies, Enhanced Decryption Tool on Heterogeneous Platform,

// Design and Development of a Cooperative High Performance Traffic Generator for Time-
// Sensitive Network Analysis, Advanced Research in Ubiquitous Computing, Cryptanalysis:

// Novel Approaches and Intelligent techniques. His research interests include Computer
// Architecture, VLSI design and implementation, embedded processor subsystem design,
// caches, secure microprocessor architectures, SoC design, memory controllers, wired and
// wireless network media access controller design, hardware acceleration of domain-specific
// applications, ASIC & FPGA-based digital designs, etc.
// His professional experience includes Digital VLSI design and development, IP core design and
// development of hardware modules for RISC-V based microprocessor and GPU, FIPS 140-2
// security compliant IP core design and development, IP integration and tapeout activities for
// Digital Design tapeout as part of Chip-Centre, IP core design and development of algorithms
// for Cryptanalysis/Cryptography, IP Core design and development for next-generation Gigabit
// (10GbE/40GbE) Ethernet MACs and IEEE 802.15.4 MAC hardware primitives, etc.
// He holds a B.Tech in Electronics and Communications Engineering from the University of
// Kerala, and has completed his Masters in Digital Signal Processing from the Department of
// Electronic & Electrical Engineering, University of Strathclyde, United Kingdom. His research
// has been published in several international conferences, and he has presented at various
// seminars, workshops, and international conferences. In addition, he has filed a patent and
// also been involved in numerous efforts towards industry transfer of technology.
// 12. Basic structure of the Tutorial
// (Topics, Subtopics, time split-up among them with speaker name)
// The tutorial titled " Foundry Compliance and Tapeout Qualification of Analog, Digital, and
// Mixed-Signal IC Designs for SCL 180nm CMOS Technology Node" will be highly relevant to
// students, researchers and professionals working in the area of ASIC design. The basic structure
// of the tutorial is as follows:

// Introduction and Overview of Physical validation: 30 Mins
// ◆ Introduction to ChipIN Centre and Physical verification & validation of
// designs for SCL 180nm PDK
// ◆ Digital and Analog/Mixed-Signal ASICs fabricated at SCL 180nm foundry (in
// MPW mode) through ChipIN Centre

// Procedures Prior To Physical Verification for the Digital & Analog/Mixed-
// Signal Designs Using SCL 180nm PDK: 60 Mins

// ◆ Insertion of Silicon Number
// ◆ Seal-ring Placement
// ◆ Die Protection requirements
// ◆ Pad pitch Requirements
// ◆ Crystal Oscillator Pads and their placement
// ◆ Power pads and Filler Cells requirements
// ◆ Clock Pads (Clock buffers) requirements and placement
// ◆ Output pads drive strength requirements to drive the load
// ◆ Input pads termination circuitry requirements to avoid signal reflections
// ◆ Dummy Cells Placement
// ◆ Powering the Full-Chip for SCL 180nm technology
// ● IO Pad Ring Establishment with Cut-cells (pvcf):
// ● IO Pad Ring Establishment with Cut-cells (pvce):

// Physical Verification of the Digital & Analog/Mixed-Signal Designs Using SCL
// 180nm Technology PDK: 50 Mins
// ◆ Design Rule Checks
// ◆ Electric Rule Checks
// ◆ Antenna Checks
// ◆ Layout versus Schematic

// ◆ PEX Extraction
// ◆ Spice Simulations (for all PVT variations)
// ◆ Design for Manufacturability
// ◆ Design for Reliability
// ◆ Design for Integrity
// ◆ Design for Assembly
// ◆ Timing Sign-off
// ◆ Tape-out Sign-off
// ◆ Tapeout submission form checklist
// ◆ Reticle Definitions
// ◆ MPW Shuttles for Fabrication

// Packaging Requirements: 30 Mins
// ◆ QFN Packaging Definitions
// ◆ Bond Pad Rules
// ◆ Rules for Bond wire
// ◆ Bonding Diagram
// ◆ Labelling
// ◆ Segmentation

// Critical Checklist for Tapeout and Packaging: 10 Mins
// ◆ For Analog Designs
// ◆ For Digital Designs
// ◆ For Mixed-Signal Designs
// ◆ For Packaging

// Key Learning Outcomes:
// By participating in this tutorial, attendees can anticipate acquiring the following
// knowledge:
// ◆ Provides a detailed overview of the essential tapeout checks required for
// successfully designing and tape-out of Digital, Analog, and Mixed-Signal
// VLSI circuit designs using SCL 180nm technology.
// ◆ It serves as a comprehensive guide for designers, offering critical insights
// and necessary inputs for preparing and submitting designs to SCL foundry.
// ◆ This resource aims to ensure clarity and facilitate the seamless execution of
// tapeout processes, thereby enhancing the overall quality and reliability of
// integrated circuit fabrication for SCL 180nm Process Design Kit (PDK).
// ◆ Vital resource for designers preparing to submit their designs to SCL,
// offering invaluable guidance and clarity.
// ◆ Students and professionals working in the fields of ASIC design and
// verification, electronics product development, and related fields have a
// great opportunity to learn about Digital, Analog/Mixed-Signal design
// verification and validation flow targeting SCL 180nm technology node.
const TutorialPage = () => {
  const tutorialData = {
    title:
      "Foundry Compliance and Tapeout Qualification of Analog, Digital, and Mixed-Signal IC Designs for SCL 180nm CMOS Technology Node",
    duration: "180 minutes",
    speakers: ["Venkata Reddy Kolagatla", "Vivian Desalphine"],
    format: "Presentation",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract:
      "ChipIN Centre under Chips to Startup (C2S) Programme was set up at C-DAC Bangalore by Ministry of Electronics and Information Technology (MeitY), Government of India, to catalyze chip designing in India by catering to fabless chip design ecosystem in the country. The facility provides Multi-Project Wafer (MPW) support to Academic Institutions, Startups and MSMEs by enabling access to SCL foundry and overseas foundries. It provides centralized EDA Design Tools (Synopsys, Cadence, and Siemens-EDA, Xilinx, Ansys, Keysight, Silvaco) for IC design flow. The facility also provides design services like Fab compliance checks, validation, integration of designs, coordinating with identified firm for packaging of fabricated chips and enabling characterization and prototyping in a centralized manner. A significant component of this effort is exposing Academia, Govt. R&D organizations, and Startups/MSMEs to the entire VLSI Design flow necessary to have their designs ready for fabrication at SCL Foundry.",
    domain:
      "Electronics Design Automation, Testing and Verification, Packaging and Manufacturing",
    keywords:
      "SCL 180nm CMOS process, Digital and Analog/Mixed-Signal ASIC designs, Design for Manufacturability (DFM), Reliability and Integrity, Physical Verification and Validation, Tape-out, Packaging",
    learningOutcomes: [
      "Provides a detailed overview of the essential tapeout checks required for successfully designing and tape-out of Digital, Analog, and Mixed-Signal VLSI circuit designs using SCL 180nm technology.",
      "It serves as a comprehensive guide for designers, offering critical insights and necessary inputs for preparing and submitting designs to SCL foundry.",
      "This resource aims to ensure clarity and facilitate the seamless execution of tapeout processes, thereby enhancing the overall quality and reliability of integrated circuit fabrication for SCL 180nm Process Design Kit (PDK).",
      "Vital resource for designers preparing to submit their designs to SCL, offering invaluable guidance and clarity.",
      "Students and professionals working in the fields of ASIC design and verification, electronics product development, and related fields have a great opportunity to learn about Digital, Analog/Mixed-Signal design verification and validation flow targeting SCL 180nm technology node.",
    ],
    targetAudience:
      "The tutorial caters to a diverse audience, including VLSI professionals, experts, researchers, physical designers, custom layout developers, tech enthusiasts, students and lecturers.",
    prerequisites:
      "Should be familiar with basics of VLSI, Foundry Process and Technology, Digital and Analog Systems, basic knowledge of Digital VLSI ASIC design, and custom CMOS Analog/Mixed-Signal circuit design.",
    speakerBiographies: [
      `Venkata Reddy Kolagatla is a Scientist-D working at C-DAC Bangalore for the past seven years.
Earlier, he worked with Synopsys India Pvt. Ltd. for one year as Senior Analog Design Engineer
and prior to that, for three years at Sandisk India Pvt Ltd as Design Engineer II. He is Gold
Medalist from the prestigious NIT Tiruchirappalli in his masters in the VLSI Systems
specialization. He completed his B.Tech from Vignan’s Engineering College affiliated to JNTU
Kakinada in Electronics and Communication Engineering (ECE).
During his professional career at Synopsys and Sandisk, he worked on SDR/DDR1/DDR2/DDR3
industry standard Signal/Power Integrity aware IO Designs (Input receivers and Output
transmitters) with Electrostatic discharge (ESD) and Latch-up considerations. His contributions
involve design & development of peripherals (include Analog mixers, Duty Cycle Correctors,
Frequency Dividers, Signal Drivers, On-Die Termination (ODT) Circuits, Calibration Circuits for
Process Voltage & Temperature variations) for Single Data Rate (SDR), Double Data Rate
(DDR), DDR2 and DDR3 speeds of 2D/3D NAND flash memories.
Currently at C-DAC Bangalore, Mr. Venkat has worked in the areas of Cryptography, tamper
resistant Crypto IP Cores Design, Development and Validation, System-On-Chip (SoC) Design
and Development, SoC Peripherals such as Serial Peripheral Interface (SPI), Quad SPI (QSPI),
Pulse Width Modulator (PWM), General Purpose Input Output Circuits (GPIOs), Timers,
Watchdog Timer (WDT) Design and Implementation, Digital ASIC Physical Design and Physical
Verification, etc.
He played a key role in earlier SMDP C2SD project where he was instrumental in establishing
RTL to GDS II IC Design flow using SCL 180nm PDK with the Cadence and Siemens EDA Tools.
The experience gained was tremendously valuable in the physical verification of the various
designs from academic institutes across the country. As part of Chip Centre, he led a team

that carried out the physical design of SPI enabled AES Encryptor and IEEE 754 FPU (Single-
Precision) Digital ASICs from RTL design to GDS-II generation using SCL 180nm foundry PDK

and successfully completed the tapeout for both the designs to SCL Foundry. As part of ChipIN
Centre activities under Chips to Start-up (C2S) Programme, he is involved in design and

development activities targeting ASIC and technically supporting various academic institutes
across the country.
His technical strengths and interests include FPGA and ASIC based design and development,
Analog and Mixed-Signal Design, IP core development of algorithms for Cryptanalysis/
Cryptography, Post Quantum Cryptography, Signal Integrity, and Power Integrity aware IO
design, SoC design and development. He has numerous publications in reputed international
journals and conferences, and he has presented at various seminars, workshops, and
international conferences; he is widely recognized for his impactful research contributions.`,
      `Vivian Desalphine is Scientist-F at Centre for Development of Advanced Computing (C-DAC),
Bangalore with 20 years of experience. He is currently involved in Chips-to-Startup
Programme, Design Linked Incentive and RISC-V based GPU development. He has been
involved in various projects and programmes of national importance, viz. Microprocessor
Development Programme, Chip-Centre for SMDP Chips-to-Systems Design, Cryptographic
Module Validation Technologies, Enhanced Decryption Tool on Heterogeneous Platform,

Design and Development of a Cooperative High Performance Traffic Generator for Time-
Sensitive Network Analysis, Advanced Research in Ubiquitous Computing, Cryptanalysis:

Novel Approaches and Intelligent techniques. His research interests include Computer
Architecture, VLSI design and implementation, embedded processor subsystem design,
caches, secure microprocessor architectures, SoC design, memory controllers, wired and
wireless network media access controller design, hardware acceleration of domain-specific
applications, ASIC & FPGA-based digital designs, etc.
His professional experience includes Digital VLSI design and development, IP core design and
development of hardware modules for RISC-V based microprocessor and GPU, FIPS 140-2
security compliant IP core design and development, IP integration and tapeout activities for
Digital Design tapeout as part of Chip-Centre, IP core design and development of algorithms
for Cryptanalysis/Cryptography, IP Core design and development for next-generation Gigabit
(10GbE/40GbE) Ethernet MACs and IEEE 802.15.4 MAC hardware primitives, etc.
He holds a B.Tech in Electronics and Communications Engineering from the University of
Kerala, and has completed his Masters in Digital Signal Processing from the Department of
Electronic & Electrical Engineering, University of Strathclyde, United Kingdom. His research
has been published in several international conferences, and he has presented at various
seminars, workshops, and international conferences. In addition, he has filed a patent and
also been involved in numerous efforts towards industry transfer of technology.`,
    ],
    basicStructure: `The tutorial titled:
“Foundry Compliance and Tapeout Qualification of Analog, Digital, and Mixed‑Signal IC Designs for SCL 180nm CMOS Technology Node”
will be highly relevant to students, researchers and professionals working in the area of ASIC design.

1. Introduction and Overview of Physical Validation (30 Mins)
   a. Introduction to ChipIN Centre and Physical verification & validation of designs for SCL 180nm PDK
   b. Digital and Analog/Mixed‑Signal ASICs fabricated at SCL 180nm foundry

2. Procedures Prior To Physical Verification for the Digital & Analog/Mixed‑Signal Designs Using SCL 180nm PDK (60 Mins)
   a. Insertion of Silicon Number
   b. Seal‑ring Placement
   c. Die Protection requirements
   d. Pad pitch Requirements
   e. Crystal Oscillator Pads and their placement
   f. Power pads and Filler Cells requirements
   g. Clock Pads (Clock buffers) requirements and placement
   h. Output pads drive strength requirements to drive the load
   i. Input pads termination circuitry requirements to avoid signal reflections
   j. Dummy Cells Placement
   k. Powering the Full‑Chip for SCL 180nm technology
   l. IO Pad Ring Establishment with Cut‑cells (pvcf)
   m. IO Pad Ring Establishment with Cut‑cells (pvce)

3. Physical Verification of the Digital & Analog/Mixed‑Signal Designs Using SCL 180nm Technology PDK (50 Mins)
   a. Design Rule Checks
   b. Electrical Rule Checks
   c. Antenna Checks
   d. Layout versus Schematic
   e. PEX Extraction
   f. Spice Simulations (for all PVT variations)
   g. Design for Manufacturability
   h. Design for Reliability
   i. Design for Integrity
   j. Design for Assembly
   k. Timing Sign‑off
   l. Tape‑out Sign‑off
   m. Tapeout submission form checklist
   n. Reticle Definitions
   o. MPW Shuttles for Fabrication

4. Packaging Requirements (30 Mins)
   a. QFN Packaging Definitions
   b. Bond Pad Rules
   c. Rules for Bond wire
   d. Bonding Diagram
   e. Labelling
   f. Segmentation

5. Critical Checklist for Tape‑out and Packaging (10 Mins)
   a. For Analog Designs
   b. For Digital Designs
   c. For Mixed‑Signal Designs
   d. For Packaging`,

    youtubeVideoId: "GLBVMeprEbY",
    videoId:"GLBVMeprEbY",
    videoType:"youtube"
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

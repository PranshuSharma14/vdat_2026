"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Building RISC-V based System on Chips (SoC) – Embedded to AI Enabled SoCs",
    duration: "180 minutes",
    speakers: [
      "Mr. Aneesh Raveendran",
      "Vivian Desalphine",
      "Dr. Pranose J Edavoor",
      "Dr. Raja Sekar K",
    ],
    format: "Presentation",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract: `The open-source RISC-V Instruction Set Architecture (ISA) is revolutionizing system-on-chip (SoC) design by enabling scalable, customizable, and cost-effective solutions for a wide range of applications, from low-power embedded systems to high-performance AI edge processors.
Unlike proprietary ISAs, RISC-V's open ecosystem fosters innovation, allowing designers to tailor hardware to specific workloads without licensing barriers.
This full-day, hands-on tutorial offers a comprehensive, step-by-step guide to designing, verifying, and prototyping RISC-V-based SoCs. It equips attendees with a systematic methodology to build application-specific SoCs, covering core selection, ISA customization, peripheral integration, AI accelerator interfacing, and FPGA prototyping.
The session is designed for VLSI designers, embedded system engineers, and AI hardware developers seeking practical skills to leverage RISC-V in real-world projects.

The tutorial begins with an in-depth overview of the RISC-V ISA, highlighting its modularity and extensibility. Participants will explore how RISC-V supports diverse applications, from resource-constrained embedded systems to compute-intensive tasks like AI inference and cryptographic processing.
The session will guide attendees through the process of selecting appropriate RISC-V cores (e.g., RV32I, RV64G) based on performance, power, and area constraints. It will also cover techniques for customizing or extending the ISA to meet domain-specific requirements, such as adding custom instructions for signal processing or machine learning workloads.
Practical examples will demonstrate how to balance design trade-offs while ensuring compatibility with the RISC-V ecosystem.

Next, the tutorial delves into SoC architecture design, focusing on the integration of RISC-V cores with on-chip components.
Attendees will learn to implement efficient interconnects using industry-standard bus protocols like AXI4 and AHB, ensuring seamless communication between processor cores, memory subsystems, and peripherals.
The session will cover memory mapping strategies to optimize data flow and minimize latency, alongside the integration of standard peripherals such as UART, SPI, I2C, and GPIO.
Real-world design considerations, such as power management and clock domain crossing, will be addressed to provide a holistic view of SoC development.

A key focus of the tutorial is enabling AI functionality in RISC-V-based SoCs. Participants will learn how to interface RISC-V cores with custom hardware blocks, such as multiply-accumulate (MAC) arrays, vector processing units, and dedicated AI accelerators.
The session will explore the use of standard bus interfaces for integrating these components, alongside techniques like direct memory access (DMA) for efficient data transfers.
Topics such as co-simulation for hardware-software validation, real-time task scheduling for AI workloads, and optimization of compute pipelines will be discussed.
Practical examples will illustrate how to achieve high throughput and low latency for AI applications at the edge.

The final segment of the tutorial focuses on verification, simulation, and prototyping of RISC-V-based SoCs.
Attendees will gain hands-on experience with ASIC design tools for simulation and synthesis, learning how to verify SoC functionality and performance.
The session will cover FPGA prototyping on platforms like Xilinx or Intel boards, enabling participants to test their designs in hardware.
Techniques for benchmarking and profiling SoCs at the hardware level will be demonstrated, with a focus on metrics like power consumption, throughput, and latency.
Applications ranging from embedded control systems to AI inference will be showcased to highlight the versatility of RISC-V SoCs.

This tutorial is highly practical, supported by example projects, simulation outputs, and reusable scripts that attendees can adapt for their own designs post-symposium.
Hands-on exercises will reinforce key concepts, allowing participants to experiment with RISC-V core configurations, peripheral integration, and AI accelerator interfacing.
By the end of the session, attendees will be equipped to design, verify, and prototype their own RISC-V-based SoCs, bridging the gap between theoretical concepts and real-world implementation.
This tutorial is ideal for professionals and researchers aiming to harness the power of RISC-V for next-generation SoC development.
`,
    domain: "CPU Design, Digital VLSI, System on Chip Design, AI based System",
    keywords: `RISC-V, System-on-Chip (SoC), Instruction Set Architecture
(ISA), AI accelerators, AI enabled SoCs, AXI4, Interconnects,
Peripherals (UART, SPI, I2C, GPIO), Hardware Prototyping`,
    learningOutcomes: [
      "Understand the RISC-V ISA and Extensions",
      "Select and Customize RISC-V Cores",
      "Design RISC-V-Based SoC Architectures",
      "Integrate Peripherals and Interfaces",
      "Develop Embedded SoCs",
      "Develop AI-Enabled SoCs",
      "Implement Real-Time AI Workload Optimization",
      "Verify and Simulate SoC Designs",
      "Prototype SoCs on FPGA Platforms",
      "Validate SoCs using applications",
    ],
    prerequisites: "Knowledge of computer architecture",
    speakerBiographies: [
      `Mr. Aneesh Raveendran, working as a Scientist-D in CDAC Bangalore. He is actively involved
architecture design, verification, Validation and prototyping of Digital IP cores targeted for
FPGA and ASIC. His contributions are in the areas are RISC-V CPU Design, RISC-V based
System on Chip, Level-1 Cache Architecture, Arithmetic Circuits, Cryptographic Accelerators,
Floating-Point Unit and Posit arithmetic Unit. He holds a Masters degree in VLSI Design and
Published his research work in many reputed VLSI Conferences/journals.`,
`Mr. Vivian Desalphine working as a Scientist-F/Group Head at ChipIN Centre at Centre for
Development of Advanced Computing (C-DAC), Bangalore, India. His areas of interest are
Microprocessor Architectures, Caches, Secure cache architectures, RISC-V based SoC
designs, Gigabit Networking and Digital system design based on FPGA platform. He has
several paper publications in international conferences/journals and patents.`,
`Dr. Pranose J Edavoor a Knowledge Associate at ChipIN Centre at Centre for Development of
Advanced Computing (C-DAC), Bangalore, India. His areas of interest are Microprocessor
Architectures, GPU Architecture, AI Accelerators, Cache memories, RISC-V based SoC
designs for FPGA and ASIC. He holds a Doctorate degree in from NIT Goa and He has several
paper publications in reputed international conferences and journals.`,
`Dr. Raja sekar K is working as a Senior Project Engineer at ChipIN Centre at Centre for
Development of Advanced Computing (C-DAC), Bangalore, India. His areas of interest are
Secure Microprocessor Architectures, Crypto Accelerator, Post Quantaum, RISC-V based SoC
designs for FPGA and ASIC. He holds a Doctorate degree in from NIT Trichy and He has
several paper publications in reputed international conferences and journals.`],
    basicStructure: `1. Introduction to RISC-V ISA & Extensions (10 mins, Mr. Vivian Dealphine)
  a. RISC-V philosophy and ecosystem
  b. Key features and modular ISA structure
  c. Various RISC-V ISA Extensions

2. Selecting and Customizing RISC-V Cores (10 mins, Mr. Vivian Dealphine)
a. Overview of open-source cores (e.g., Rocket, CVA6, PicoRV32, etc.)
b. RISC-V Core selection criteria based on application
c. Custom instruction set extensions (e.g., for AI or crypto)

3. SoC Architecture Design Principles (20mins, Mr. Aneesh Raveendran )
a. SoC-level component planning: processor, memory, peripherals
b. Integration of tightly- and loosely-coupled hardware blocks

4. Interconnects and Bus Protocols (15 mins, Mr. Aneesh Raveendran)
a. Overview of standard protocols: AXI4, AHB, APB
b. Designing efficient memory maps

5. Peripheral Integration (15 mins, Dr. Raja Sekar K)
a. Adding and interfacing UART, SPI, I2C, GPIO
b. Timer and interrupt controller integration
c. Custom peripheral block interfacing

6. System-Level Verification & Co-Simulation (15 mins, Mr. Aneesh Raveendran)
a. Setting up testbenches for SoC validation
b. Using Verilator, cocotb, or commercial tools
c. Hardware-software co-simulation flows

7. DMA and Memory Subsystem Design (15 mins, Mr. Raja Sekar K)
a. Role of DMA in high-throughput SoCs
b. Shared memory access and buffering
c. Low-latency communication strategies

8. AI Accelerators (20 mins, Dr. Pranose J Edavoor)
a. Introduction of AI system
b. AI Accelerator architecture

9. RISC-V based AI SOCs (20 mins, Dr. Pranose J Edavoor)
a. Memory map definition for AI accelerator
b. Overview of AI accelerators and vector units
c. Interfacing MAC arrays or custom compute blocks
d. ISA extensions for AI workloads (e.g., RISC-V Vector, DSP, Zk\* extensions)

10. Real-Time Scheduling & Software Stack (15 mins, Mr. Aneesh Raveendran)
a. Task scheduling in AI/embedded SoCs
b. RTOS or bare-metal software support
c. Bootloader, drivers, and runtime initialization

11. Case Study / Examples (20 mins, Mr. Aneesh Raveendran)
a. Building a minimal RISC-V SoC with peripherals
b. Example integration of an AI accelerator`,

    youtubeVideoId: "",
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

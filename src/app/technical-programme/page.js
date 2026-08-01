"use client";

import React, { useState } from "react";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";

const tracks = {
  A: { label: "Track A: Circuits, SoC & Embedded Systems", color: "#3b82f6", bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.4)" },
  B: { label: "Track B: AI Hardware & Design Automation", color: "#a855f7", bg: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.4)" },
  C: { label: "Track C: Emerging Devices & Technologies", color: "#10b981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.4)" },
  D: { label: "Track D: Verification, Reliability & Hardware Security", color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.4)" },
  W: { label: "Women in Engineering", color: "#ec4899", bg: "rgba(236,72,153,0.12)", border: "rgba(236,72,153,0.4)" },
  S: { label: "Startup", color: "#ef4444", bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.4)" },
  P: { label: "Ph.D. Forum", color: "#14b8a6", bg: "rgba(20,184,166,0.12)", border: "rgba(20,184,166,0.4)" },
  PT: { label: "Poster Presentations", color: "#6366f1", bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.4)" },
};

const programmeData = [
  {
    day: "Day 1",
    date: "20th August 2026, Thursday",
    sessions: [
      {
        sessionLabel: "Technical Session 1",
        time: "12 PM - 1:20 PM",
        tracks: [
          {
            track: "A",
            sessionId: "Session 1.1.1",
            papers: [
              { id: 404, title: "A Multi-Mode Ultra-Low-Leakage SRAM Architecture in 18-nm FDSOI Technology Targeting Energy Harvesting Products", authors: "Shreyash Tripathi and Gajesh Kumar Daga" },
              { id: 55, title: "A Hardware-Efficient Dual-Mode Polynomial Sampling Architecture With Hash Integration For Post-Quantum Cryptography", authors: "Alahari Sri Lakshmi Sravya, Basu Venkatapavani and MD NAJRUL ISLAM" },
              { id: 411, title: "COTS-Based Configurable Biopotential Signal Acquisition System", authors: "Nilkanth Jagani and Biswajit Mishra" },
              { id: 272, title: "Design and Sustainability Benchmark of Static and Dynamic Post-Decoders for High-Density and High-Speed SRAM", authors: "Aditya Raj Chauhan and Anuj Grover" }
            ]
          },
          {
            track: "B",
            sessionId: "Session 1.1.2",
            papers: [
              { id: 1, title: "Error analysis of DWT for RNN-LSTM-based speech classifier with custom floating-point datapath", authors: "Bikramjit Barik and Arunachalam V" },
              { id: 27, title: "AayuSense: Portable AI-Based Electronic Tongue for Liquid Medical Adulteration Detection and Quality Assessment", authors: "Harshima Joshi, Umesh Pandey, Anup Gupta, Swayam Jha and Nishtha Kansal" },
              { id: 53, title: "FPGA-Accelerated GAN on PYNQ-Z2 for Real-Time Image Generation", authors: "Bhagavatula Sai Surya, Puchakayala Anil Chowdary, Mamidipaka Lakshmi Sai Narayana and Bharat Bhushan Upadhyay" },
              { id: 66, title: "Hybrid Signed MAC-Driven Stochastic SqueezeNet for Hardware-Constrained Neural Network Inference", authors: "Mahanta Talakal, Mallikarjun Yeshlur, Omkar N R, Sahithi G and Rajeshwari B" }
            ]
          },
          {
            track: "C",
            sessionId: "Session 1.1.3",
            papers: [
              { id: 48, title: "Low-Power and High-Performance 4-Bit Vedic Multiplier Using CNTFET Technology", authors: "VAISHALI H. DHARE, Krish Patel and Sanskar Gupta" },
              { id: 78, title: "Improving Diagnostic Accuracy of Early Lung Cancer Using a Dual-AI Framework and CMOS Biosensor", authors: "Shresth Mishra, Arushi Jain, Dr Garima Kapur and Aditya Pawar" },
              { id: 95, title: "Reconfigurable Voltage-Divider-Based Non-Volatile 8T-2MTJ Bitcell for Ternary Search and Logic-in-Memory Applications", authors: "Deepak Joshi, Sukhen Mondal, Mohit Gupta, Ravi S. Siddanath, Suman Hallur, Manish Goswami and Kavindra Kandpal" },
              { id: 376, title: "Investigation for Gate Engineering of Superlattice AlGaN/GaN Dielectric-Modulated Dual-Gate Dual-Channel Multi-Cavity MOSHEMT", authors: "Tulip Saha, Prof. Rudra Dhar and Moumita Mukherjee" }
            ]
          },
          {
            track: "D",
            sessionId: "Session 1.1.4",
            papers: [
              { id: 4, title: "Design and Comprehensive Verification of a High-Throughput AXI4 Interconnect Fabric Supporting Out-of-Order Transactions and Pipeline Resilience", authors: "Shail Nimeshkumar Shah and Sachin Gajjar" },
              { id: 67, title: "E-ReCON: An Energy- and Resource-Efficient Precision-Configurable Sparse nvCIM Macro for Conventional and Spiking Neural Edge Inference", authors: "Ankit Kumar Tenwar, Mukul Lokhande and Santosh Kumar Vishvakarma" },
              { id: 81, title: "Design of a CMOS Hardware-Based Anti-Theft and Tamper Detection Chip with Integrated Low Dropout Voltage Regulator", authors: "Piyush Nautiyal, Dishita Dishita, Abhinav Sharma and Nishtha Kansal" },
              { id: 108, title: "A Voltage-Tunable OTA-Based State Variable Filter for ECG R-Peak Extraction Validated on the MIT-BIH Database", authors: "Malay Vaghasiya and Dr. Pankaj Kumar" }
            ]
          }
        ]
      },
      {
        sessionLabel: "Technical Session 2",
        time: "4:00 PM - 5:30 PM",
        tracks: [
          {
            track: "A",
            sessionId: "Session 1.2.1",
            papers: [
              { id: 104, title: "Preliminary Performance Analysis of FORE2D: An FPGA-Accelerated Vector Graphics Engine", authors: "Siddhartha Sarkar, Pratyush Kumar, Lalit Bansal, Tanmay Arnav, Ripul Ghosh, Ashish Gaurav and Satish Kumar" },
              { id: 107, title: "FPONGA: A Field-Programmable Optimized Native Game Architecture for Real-Time Video Processing", authors: "Parth Satra, HARDIK RATHI, Aashay Agarwal and Govind prasad" },
              { id: 281, title: "Precision-Aware FPGA Implementation of Floating-Point and Posit-Based Derivative Accelerators", authors: "Aiman Malik, Ethesham Ahmed and Mohd Wajid" },
              { id: 109, title: "A Low-Leakage & Area Efficient Multi-Bit Scan Pulsed Latch Design in SCL 180 nm Technology", authors: "Samarth Agarwal and Anuj Grover" }
            ]
          },
          {
            track: "B",
            sessionId: "Session 1.2.2",
            papers: [
              { id: 83, title: "AVNet (Accelerator-Optimized ConVolutional Network): A hardware-efficient CNN for FPGA-based deployment using HLS4ML for PCB defect detection", authors: "VALLABHAJYOSYULA VISWA VIBHU, ANJU YAJJALA and DELLA THOMAS" },
              { id: 105, title: "Banking based Adaptive Mapping Architecture for High Speed Operation in Reconfigurable Hardware", authors: "Riddhima Agarwal, Jatin Wadhera, Aarya ., Dhruv Raj Ghai, Manu Bansal and Anil Singh" },
              { id: 142, title: "Design and Formal Verification of a Logarithmic-Posit Arithmetic Core for Edge Neural Acceleration", authors: "Rangeetha S and Akaashraj P" },
              { id: 170, title: "4.608-TOPS SRAM Based DCIM Macro with Hierarchical Accumulation for Quantized CNNs", authors: "Vikash Kumar Sharma, Vikash Vishwakarma and Santosh Kumar Vishvakarma" }
            ]
          },
          {
            track: "C",
            sessionId: "Session 1.2.3",
            papers: [
              { id: 162, title: "Borophene Dieletric Modulated-Tunnel FET Biosensor for Breast Cancer Detection with Optimised Gate Dielectric Design", authors: "Vibhash Choudhary and Manoj Kumar" },
              { id: 202, title: "Trap-Induced Reliability-Aware Monolithic Mixed-Mode TCAD Realization of FinFET 6T SRAM: Eliminating Interconnect Abstraction", authors: "HANUMAT PRASAD YADAV, SUNIL RATHORE, Sandeep Kumar and Navjeet Bagga" },
              { id: 274, title: "Design and Performance analysis of Si0.3Ge0.7 based Dual Cavity- Double Gate (DC-DG) ISFET for improved pH sensing application", authors: "Upendra Nath Soni, Alok Naugarhiya and Chitrakant Sahu" },
              { id: 275, title: "High Frequency RF and Signal Integrity Analysis of GSSG Through-Glass Via Structures", authors: "Sumit Gupta, Mugdha Sharma and Sanjeev Kumar Manhas" }
            ]
          },
          {
            track: "P",
            sessionId: "Session 1.2.4",
            papers: []
          }
        ]
      }
    ]
  },
  {
    day: "Day 2",
    date: "21st August 2026, Friday",
    sessions: [
      {
        sessionLabel: "Technical Session 3",
        time: "9:00 AM - 10:35 AM",
        tracks: [
          {
            track: "A",
            sessionId: "Session 2.1.1",
            papers: [
              { id: 344, title: "A hybrid OR-MUX lower-part approximate adder for energy-efficient edge AI inference on FPGA", authors: "Sagar B. Bhivsane, Vassilis Alimisis, Paul P. Sotiriadis and ALAK MAJUMDER" },
              { id: 122, title: "Self-Adaptive Neural Calibration of Dynamic Comparators Using Time-Domain Encoding", authors: "vaibhav mehta, Angel Garg and Anil Singh" },
              { id: 167, title: "A Hybrid SNN Accelerator for 2× Video Frame Interpolation on FPGA for High Frame Rate Applications", authors: "Ashish ., Sidaq Singh Chhatwal, Anil Singh and Manu Bansal" },
              { id: 186, title: "Area Efficient Dual Self Biased Voltage Reference with -82dB PSRR for low frequency applications", authors: "Nikhila Vadlamani Sai Sharanya, Anuhya Chittampalli Patel, sree hari rao patri and Subba Nagulla Rao" }
            ]
          },
          {
            track: "B",
            sessionId: "Session 2.1.2",
            papers: [
              { id: 180, title: "Block Floating Point Based Matrix Multiplication Accelerator with Hardware Efficient Exponent Alignment", authors: "Shravan Narayan Sunil, Joel Dan Philip, Kala S and Nalesh S" },
              { id: 185, title: "Low-Cost Wafer Inspection Using SEM-to-OM Image Simulation", authors: "Ankur Gupta, Abhishek Kashyap and Kapil Dev Tyagi" },
              { id: 205, title: "Efficient Binary ViTs through Hardware-Software Co-Design: A Power-Memory-Compute Optimization Framework", authors: "Rajsree S, Nisha Abdul Kareem and Sudhish N. George" },
              { id: 206, title: "RTL Design and Verification of a Fixed-Point Two-Layer Neural Network with Adam Optimizer Using a Diagonal Systolic Array Core", authors: "sneha Balakrishnan and Dr. Thenmozhi s" }
            ]
          },
          {
            track: "C",
            sessionId: "Session 2.1.3",
            papers: [
              { id: 289, title: "TOPSIS-Assisted Optimization of a Dual-Gate Charge Plasma ISFET Using a SOBOL-Sampled TCAD Dataset", authors: "Rupendra Kumar Dadsena and Chitrakant Sahu" },
              { id: 333, title: "Single Event Transient in Nanosheet FET: A Physical insight on performance improvement through sheet Stacking, Doping, and Width", authors: "Sadhana Srinivas, Guruprasad Reddy, Shashidhara M and Shobhit Srivastava" },
              { id: 372, title: "DFT based Investigation on Trimethylamine Adsorption over Engineered Graphene Nanosheets: Role of Palladium Doping in Electronic Response", authors: "Indranil Maity, Subhradeep Hazra, Snehadri Bhaumik and Arkya Nandy" },
              { id: 106, title: "Parametric Analysis and Characterization of HZO/TiN/Mica Heterostructure-Based Double-Gate Junctionless Ferroelectric FETs with Hf0.5Zr0.5O2 for Low-Power Memory Applications", authors: "Harsha ATURI Ragini and Ramana murthy G" }
            ]
          },
          {
            track: "S",
            sessionId: "Session 2.1.4",
            papers: []
          }
        ]
      },
      {
        sessionLabel: "Technical Session 4",
        time: "11:35 AM - 1:10 PM",
        tracks: [
          {
            track: "A",
            sessionId: "Session 2.2.1",
            papers: [
              { id: 194, title: "Power-Gated 8T SRAM Cell Design for Low Latency and Enhanced Stability", authors: "Rajesh Nandanavanam and Sunanda Ambulker" },
              { id: 215, title: "Stochastic Computing Based Leaky Integrate and Fire Neuron Circuit for Spiking Neural Network", authors: "Shweta Kumari and Rajeev Kumar Ranjan" },
              { id: 226, title: "A Fully Synthesizable Streaming Deep Convolutional Encoder for Deterministic Real-Time Edge AI Acceleration", authors: "Sulagna Jana, Ankita Das, Avra Ghosh, Sayan Chatterjee and Sheli Sinha" },
              { id: 228, title: "Low-Power, High-Speed Hybrid MGDI-TGL Thermometer-to-Binary Encoder for Flash ADC Applications", authors: "Sushmitha Ete, Lakshmi Charitha Ch, Swetha Siliveri and Bhanuprakash K" }
            ]
          },
          {
            track: "B",
            sessionId: "Session 2.2.2",
            papers: [
              { id: 207, title: "A Power-Efficient Analog Hardware Artificial Neural Network for Hand Gestures Recognition", authors: "Vassilis Alimisis, Andreas Papathanasiou, Vasileios Moustakas, Anna Mylona, Alak Majumder and Paul P. Sotiriadis" },
              { id: 217, title: "Energy-Efficient Random Forest Classifier for Real-Time Epileptic Seizure Detection", authors: "Ranobir Basak, Luish Brahma, Dr. Krishna Lal Baishnab and Dr. Loukrakpam Merin Singh" },
              { id: 224, title: "ASIC Implementation of a Support Vector Machine with emphasis on the Multiply and Accumulate Unit", authors: "Shraman Biswas, Toushik Santra, Ushasi Chakraborty, Soumya Pandit and Arpita Das" },
              { id: 233, title: "Memory-Free Streaming FPGA Accelerator for Quantized 1D CNN-Based ECG Arrhythmia Classification", authors: "Venothini P, Hrishikesh Ranjith, Lakshminarayanan G and VARUN P GOPI" }
            ]
          },
          {
            track: "C",
            sessionId: "Session 2.2.3",
            papers: [
              { id: 394, title: "Design of SOI Strained-Silicon I-MOS Architecture for Low-Voltage Snapback Zero-Capacitor 1T-DRAM", authors: "Sarvesh Kumar Prajapati, VIKRAM SHARMA and Pragati Singh" },
              { id: 410, title: "Sputtered Hafnium Oxide based Memristive Crossbar Array for Energy Efficient MAC Operations", authors: "Muhammed Rahees A, Rose Mary Kuruvithadam, Antony Sharon, Dr.Aldrin Antony, Dr. M. K. Jayaraj and Dr. Nalesh S" },
              { id: 425, title: "Performance Analysis and Material Optimization of the Graphene Interfacial Layer-Based Lead-free Perovskite Solar cell", authors: "Rushali Pandit, Kousik Midya, Sagar . and Lalat Indu Giri" },
              { id: 427, title: "Electro-Thermal Realiability and Self-Heating mitigation in TSV-Integrated SOI-TFETs", authors: "Joy Chowdhury, Komal Agarwal, Angsuman Sarkar, Kamalakanta Mahapatra and Jitendra Kumar Das" }
            ]
          },
          {
            track: "D",
            sessionId: "Session 2.2.4",
            papers: [
              { id: 119, title: "Design and Functional Verification of APB Interfaced UART IP-Core using UVM", authors: "Saquib Azam, Vatsal Kashyap, Laxmi Pradhan Kumre and Bhavana Prakash Shrivastava" },
              { id: 219, title: "TA-GIN: A Hybrid Transformer-Augmented Graph Isomorphism Network Framework for Gate-Level Hardware Trojan Detection and Localization", authors: "Sambhram P. Tailang and Nirmala Devi M" },
              { id: 271, title: "MedSP-V: Design and Hardware Evaluation of a SIMD RISC-V Core for Biomedical Applications", authors: "Annu Kumar, Vijay Pratap Sharma and Santosh Kumar Vishvakarma" },
              { id: 277, title: "A Novel Partial Node Discharge Comparator Technique Enabling sub 11 W for High-Speed Applications", authors: "Soham Korday and SUNIL RATHORE" }
            ]
          }
        ]
      },
      {
        sessionLabel: "Technical Session 5",
        time: "2:40 PM - 4:15 PM",
        tracks: [
          {
            track: "A",
            sessionId: "Session 2.3.1",
            papers: [
              { id: 231, title: "Prolepsis: ISA-Agnostic RTL Predictive Thermal Management for Multicore Processors", authors: "Varada Govind Aakula and Boddepalli SanthiBhushan" },
              { id: 254, title: "A Lightweight RISC-V SoC with Power-Optimized ALU and UART Interface for Smart IoT Applications", authors: "Chirag M. Rahate, Akanksha Jain and Santosh Kumar Vishvakarma" },
              { id: 257, title: "A Robust High-Gain Low-Noise CMOS Instrumentation Amplifier in SCL 180nm for Biomedical Applications", authors: "Shramona Roy, Arnab Deb, Anjaneyulu Chapala, Venkata Reddy Kolagatla and Vivian D" },
              { id: 258, title: "Assist Controlled SRAM Ring Oscillator with PVT Resilient Frequency Stability", authors: "Neha Maheshwari, Manas Baiswar, Balwinder Raj, Tarun Chaudhary and Santosh Kumar Vishvakarma" }
            ]
          },
          {
            track: "B",
            sessionId: "Session 2.3.2",
            papers: [
              { id: 235, title: "OctaPE: A Flexible PE Architecture for Multi-Dataflow Edge AI Acceleration", authors: "Akanksha Jain and Santosh Kumar Vishvakarma" },
              { id: 236, title: "Energy and Area-Efficient Custom RISC-V ISA Extensions Using Hybrid 16-bit Signed Multipliers on FPGAs", authors: "Mitul Sudhirkumar Nagar, Aditya Mathuriya, Sohan H. Patel and Pinalkumar Engineer" },
              { id: 237, title: "An Area-Efficient CNN Accelerator for Handwritten Digit Recognition on FPGA-Based Edge Systems", authors: "Aiswarya K, Bibin Francis, Lakshminarayanan G and VARUN P GOPI" },
              { id: 246, title: "CVL-SIMD: A Lightweight Hybrid SIMD/Vector Execution Architecture for Edge-Oriented RISC-V Processors", authors: "anoop r and Santosh Kumar Vishvakarma" }
            ]
          },
          {
            track: "C",
            sessionId: "Session 2.3.3",
            papers: [
              { id: 431, title: "Temperature-Dependent Performance Analysis of a Junctionless SOI FinFET-Based Hydrogen Gas Sensor Using TCAD", authors: "Ayushi Lamba, Anurag Bhandari, Rishu Chaujar and M. Jamal Deen" },
              { id: 263, title: "A Hardware-Efficient VLSI Architecture and FPGA Implementation of Atkinson Index Detector Based Cooperative Spectrum Sensor for Cognitive Radio Networks", authors: "URJAL SHRIVASTAVA, Rohit Chaurasiya, D. A. Guimarães and Ajay Singh" },
              { id: 308, title: "Unified RISC-V-Zkned32/64 AES Functional Unit for Micro-architectural Macro-Ops Fusion", authors: "NANCY GUPTA and DAVID SELVAKUMAR" },
              { id: 440, title: "Design and Development of a Reliability-Aware Verilog-A LUT Framework for 5nm Nanosheet SRAM Arrays", authors: "Nitanshu Chauhan, Sarita Yadav, Shuvam Pawar, Charanya Bysani and Parna Lata Chaurasia" }
            ]
          },
          {
            track: "W",
            sessionId: "Session 2.3.4",
            papers: [
              { id: 195, title: "Low Power Schmitt Trigger based Single-Bitline 15-T Radiation Hardened SRAM cell with Improved Performance", authors: "Snigdha Jain and Neeta Pandey" },
              { id: 221, title: "High Gain and Low Power Muller C Based Digital Assisted Charge Amplifier", authors: "Nischitha S and Sunita M S" },
              { id: 222, title: "Dual-Loop CDR with simplified VCO Calibration logic for 1.35-4.05 Gbps data rate operation", authors: "Surabhi Puttaraju and Sunita M S" },
              { id: 345, title: "RTL-NLP-Guard A Leakage-Safe Explainable Framework for RTL Hardware Trojan Detection Using Hybrid Semantic and Structural Features", authors: "Pooja C U, Vaishnavi Sankar and Nirmala Devi M" }
            ]
          }
        ]
      }
    ]
  },
  {
    day: "Day 3",
    date: "22nd August 2026, Saturday",
    sessions: [
      {
        sessionLabel: "Technical Session 6",
        time: "9:00 AM - 10:35 AM",
        tracks: [
          {
            track: "A",
            sessionId: "Session 3.1.1",
            papers: [
              { id: 405, title: "A power-efficient single-ended 7T SRAM cell for low power and high performance applications", authors: "Sheshmani Yadav and Sonal Singh" },
              { id: 51, title: "FPGA-Based Realization of Takagi–Sugeno Fuzzy Controllers: Design, Implementation, and Performance Evaluation", authors: "Sarthak Kumar, Aditi Pandey, Rachna Singh and Ritu Raj" },
              { id: 323, title: "Dynamic Power Optimization in RISC-V Processors Using Advanced Clock Gating Techniques", authors: "Shuvam Pawar, soni Jay and Satish Maheshwaram" },
              { id: 391, title: "A Robust Self Biased Pseudo-Differential Cascode Amplifier in 180 nm CMOS Technology", authors: "Gyan Prakash, sree hari rao patri and Nagulla Subba Rao" },
              { id: 428, title: "Source-Isolated 14T Radiation-Hardened SRAM Cell for Space Applications", authors: "Mohammad Mufasir Fazili, Aryan Kannaujiya and Ambika Prasad Shah" }
            ]
          },
          {
            track: "B",
            sessionId: "Session 3.1.2a",
            papers: [
              { id: 261, title: "Multi-Operand In Memory Computation using Quad-Read 12T SRAM", authors: "Prexa Parmar, Deepak Joshi and Sandeep Mishra" },
              { id: 269, title: "A Comparative Analysis of PE Architectures for CNN Accelerators", authors: "Abhishek Kumar Jha, Amitava Middya, Gaurav Kaushal and Biswabandhu Jana" },
              { id: 293, title: "CURIE: An Area-Efficient 63-TOPS/W Multi-Precision 4 Kb Digital Memory-in-Situ Inference Engine for DNNs & Spiking ML Workloads", authors: "Shivangi Mishra, Mukul Lokhande and Santosh Kumar Vishvakarma" },
              { id: 332, title: "A Reconfigurable 11T SRAM Compute-in-Memory Architecture for Dual-Mode MAC Operations.", authors: "Umang Mahendrabhai Joshi, Priyank Prajapati, Pinalkumar Engineer and Anand Darji" }
            ]
          },
          {
            track: "B",
            sessionId: "Session 3.1.2b",
            papers: [
              { id: 347, title: "Machine Learning Surrogate Framework for Trap-Dependent Characterization of 5 nm Nanosheet Gate-All-Around FETs", authors: "Ritika Singh Katoch, Anamika Rajesh, Sarita Yadav, Shuvam Pawar and Nitanshu Chauhan" },
              { id: 382, title: "Generative AI for Intelligent PLM, CAD and CAM Integration in Modern Manufacturing Environments", authors: "Abhishek Tripathi, Aditya Jain, Ajay Kumar, Neha Gupta and Kaushal Kumar" },
              { id: 400, title: "TACO-R: A Hardware-Efficient Task-Aware Object Detection Pipeline with Sparse Graph Attention and Line-Buffer FPGA Acceleration.", authors: "Aman Gupta and Pinalkumar Engineer" },
              { id: 422, title: "A Reconfigurable Transprecision SIMD-MAC PE for Mixed-Precision Edge-AI Applications", authors: "Shubham Kumar, Vijay Pratap Sharma, Vaibhav Neema and Santosh Kumar Vishvakarma" }
            ]
          },
          {
            track: "D",
            sessionId: "Session 3.1.3a",
            papers: [
              { id: 304, title: "SCAFE: A SCOAP-Based Unsupervised Framework for Hardware Trojan Detection in Gate-Level Netlists", authors: "Pratham Prajapati, Vaishnavi Waghmare and Sunny Sharma" },
              { id: 324, title: "Low-Power Segmented Approximate Adder with Smart Chaining for Error-Tolerant IoT and Image Processing Applications", authors: "Bhavana Krishnakumar and Rajesh Mohan R" }
            ]
          },
          {
            track: "D",
            sessionId: "Session 3.1.3b",
            papers: [
              { id: 294, title: "BHARAT-TPM: Design and ASIC Implementation of an SPI Based AXI Enabled AES Accelerator", authors: "Aneesh Raveendran, Mahima Agarwal, Bhavana B L, Dr Raja Sekar k, Vivian D, Hari Babu P and Dr S D Sudarsan" },
              { id: 297, title: "BHARAT-TPM: Design and ASIC Implementation of an SPI Based AXI Enabled RSA-4096 Accelerator", authors: "Aneesh Raveendran, Mahima Agarwal, Divya B, Dr Rajasekr K, Vivian D, Hari Babu P and Dr S D Sudarsan" },
              { id: 302, title: "BHARAT-TPM: Micro-Architecture Design of AXI enabled HMAC SHA-3 Hardware Accelerator for a RISC-V Trusted Platform Module", authors: "Aneesh Raveendran, Adithyadev Mattada, Sheetal B V, Dr Rajasekar K, Vivian D, Hari Babu P and Dr S D Sudarsan" },
              { id: 190, title: "CHIMERA: A Chaotic Hopfield–Integrated Memristive Entropy Architecture for FPGA PRNGs", authors: "Kusum Lata, Arihant Agarwal and Arpit Jain" }
            ]
          }
        ]
      }
    ]
  }
  , {
    day: "Tab 4 (Posters)",
    date: "20–21 August 2026",
    sessions: [
      {
        sessionLabel: "Poster Session 1",
        time: "Thursday, 20 August 2026",
        tracks: [
          {
            track: "PT",
            sessionId: "Posters 1",
            papers: [
              { id: 98, title: "Design of Analog CMOS Circuit using gm/ID-based Look-up Tables", authors: "Arohi Soni and Pravin S. Mane" },
              { id: 115, title: "Coverage-Driven UVM-Based Verification of AMBA AHB VIP for Protocol Compliance", authors: "Saquib Azam, Laxmi Pradhan Kumre and Bhavana Prakash Shrivastava" },
              { id: 144, title: "ASIC Design and Implementation of a 16-bit Floating-Point FFT Processor", authors: "Mohd Hasir, Aiman Malik and Mohd Wajid" },
              { id: 152, title: "Energy-Efficient SNN Accelerator with Event Scheduling for Visual Edge Intelligence", authors: "Aman Kumar, Nagendra Kumar, Manas Bajpai and Santosh Kumar Vishvakarma" },
              { id: 164, title: "A Deterministic Hardware Scheduler for Reducing RTOS Latency in RISC-V Architectures", authors: "Dhruv Bal Dikshit, Preyerna Srivastava, Shruti Kalra and Ruby Beniwal" },
              { id: 181, title: "A Full Custom Design Methodology for n×n 6T SRAM Array with 2×2 Array Implementation", authors: "Purvi J. Patel, Jinal Thakor and Ansh Khanpara" },
              { id: 183, title: "Sequential Context-Aware Unsupervised Detection of Hardware Trojans in Gate-Level Netlists", authors: "Sugata Bhunia and Nirmala Devi M" },
              { id: 193, title: "Prune-Mask Fault Masking in Sparse Neural Accelerators: Co-Designed ISA, BIST, and Yield on a RISC-V Edge Platform", authors: "Binu Manohar, Dr. Arun Joy and Dr. Simi Zerine Sleeba" },
              { id: 198, title: "A Heterogeneous RISC-V Architecture for Efficient Biomedical Signal Processing", authors: "Pritha Pawan Sharma, Soumya Jain, Sameena Khan and Sujay Deb" },
              { id: 213, title: "Machine Learning Assisted Optimization of Al:Mg–TiO₂/SnO₂ Based MAPbI₃ Perovskite Solar Cells", authors: "Twinkle Gupta, Ankur Bhardwaj and Ajay Kumar" },
              { id: 214, title: "A Trilayer Cap Stack Non-recessed Gate AlInGaN/GaN/AlInGaN Double Heterojunction GaN HEMT for RF and LNA Applications", authors: "Amit Agarwal and Sumit Kale" },
              { id: 216, title: "Scalable UVM-Based Verification and FPGA Implementation of a Parameterized High-Speed Barrel Shifter", authors: "Divya Gupta, Shruti Kalra and Ruby Beniwal" },
              { id: 227, title: "Double Perovskite (Lead-Free) Tl2PdBr6 Solar Cell Architecture for Terrestrial and Space Photovoltaics", authors: "Chinmaya Kumar Pradhan, Paramita Sarkar and S. K. Tripathy" },
              { id: 234, title: "Edge AI Wildlife Classification with FPGA-Based Deterministic Deterrence on PYNQ-Z2", authors: "Palle Devi Sri Vinay Mohan Reddy, Bonthu Namo Sai Reddy, Chakilela Sairaj, Ngangbam Phalguni Singh and Vijay Rao Kumbhare" },
              { id: 239, title: "Hierarchical MARL with PV Forecasting and Dynamic Pricing in Smart Grids", authors: "Samadrita Mondal and Nilotpal Chakraborty" },
              { id: 242, title: "Fused SIM(S)D/Scalar Functional Units for RISC-V P-B-Zkn Instruction Set Extensions", authors: "Nancy Gupta and David Selvakumar" },
              { id: 251, title: "Noise-Aware Compilation for Heterogeneous NISQ Hardware: A Cross-Topology Empirical Study", authors: "Prisha Bharti, Angel Garg, Anil Singh and Manu Bansal" }
            ]
          }
        ]
      },
      {
        sessionLabel: "Poster Session 2",
        time: "Friday, 21 August 2026",
        tracks: [
          {
            track: "PT",
            sessionId: "Posters 2",
            papers: [
              { id: 266, title: "Design of a Low-power Self-biased Continuous-time Voltage Comparator in 65nm CMOS Technology", authors: "Akriti Jain, Muskan Mahla, Riyanka Banerjee, Gaurav Kaushal, Santosh Manabala and Jai Gopal Pandey" },
              { id: 292, title: "BHARAT-TPM: Micro-Architecture Design of AXI enabled SM3 Hardware Accelerator for a RISC-V Trusted Platform Module", authors: "Aneesh Raveendran, Kiran P, Sheetal B V, Dr. Raja Sekar K, Vivian D, Hari Babu P and Dr. S. D. Sudarsan" },
              { id: 315, title: "An Energy-Efficient 10T2R NVSRAM Bitcell Using Decoupled Bilateral RRAM Paths", authors: "Sharada Katailiha, Sidharthan B S and Santosh Kumar Vishvakarma" },
              { id: 316, title: "Design and Implementation of a RISC-V Based MCU for Automotive Body Control Applications", authors: "Deepti Emmi, Abhishek Patawari, Aditya Sthawarmath, Aryaman Pathak, Saaj Mulik and Mousumi Bhanja" },
              { id: 318, title: "Hierarchical Row Decoder for RHBD SRAM with Write Delay Stability and Yield Analysis", authors: "Vishruth R, Jamuna S, Aditya S. Purohit, Gowri Bandak, Hannan Ashrafi and Yadamakanti Sai Mohith Reddy" },
              { id: 321, title: "ASPIRE: An Adaptive Switching Activity Aware Approximate Multiplier with Dynamic Transition Reduction for Energy Efficient Systems", authors: "Shantinikethan Sidharth and Ruby Mishra" },
              { id: 338, title: "An UVMF-based Security-aware Functional Verification Framework for AES-256 Hardware IP", authors: "Ayush Modi, Diksha Shekhawat, Jugal Gandhi, M. Santosh, Jai Gopal Pandey and Chandra Shekhar" },
              { id: 340, title: "Design and Analysis of a DTC-Assisted Fractional-N PLL for NavIC Applications", authors: "Venkatesh B, Saumitra Gupta and Dr. Hari Shanker Gupta" },
              { id: 348, title: "CAPS: Controlled Adaptive Partitioning of STLB", authors: "Keerthisagar Kokkiligadda, Tejeshwar Bhagatsing Thorawade, Sanjoy Kumar Basu, Varun Venkitaraman Iyer and Virendra Singh" },
              { id: 358, title: "Design and Implementation of a Digital FIR Filter using Optimized Hybrid Adders and Multipliers", authors: "Swathi K, Rajeswari Kotla, Rithwik Mandati and Swetha Siliveri" },
              { id: 389, title: "Viterbi Continuous Branch Predictor: A Topological Approach to High-Accuracy CPU Branch Prediction", authors: "Sidhanth Krishnan and Sandeep Joshi" },
              { id: 393, title: "Optimization of Layer Stacking in Piezoelectric Energy Harvesters for Human Muscle-Based Power Generation", authors: "Shradha Saxena and Archana Pandey" },
              { id: 415, title: "Low-Power FPGA-Based Matrix Multiplier Using FSM-Controlled MAC Architecture", authors: "Suman Singh, Deepak Kumar, Chinmay Bobade and Pragati Singh" },
              { id: 418, title: "A Unified UVM Framework for Accelerated Verification of Block Cipher IP Cores", authors: "Harsh Singh, Diksha Shekhawat, Jugal Gandhi, Saurabh Jain, M. Santosh, Jai Gopal Pandey and Chandra Shekhar" },
              { id: 430, title: "IRTA: A Novel High Speed and Low Area Ternary Adder Using Input Reordering and Truth Table Compression", authors: "Rishi Nilesh Agrawal, Rajat Porwal and Syed Ershad Ahmed" },
              { id: 436, title: "Impact of Band-Edge State Occupation and Critical Temperature Effects on Subthreshold Swing Characteristics of Cryogenic FinFETs", authors: "Khushi Jain, Sandeep Kumar and Navjeet Bagga" }
            ]
          }
        ]
      }
    ]
  }
];

export default function TechnicalProgramme() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSession, setExpandedSession] = useState(null);
  const [activeTrack, setActiveTrack] = useState("all");

  const currentDay = programmeData[activeDay];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1, background: "linear-gradient(160deg, #060d2e 0%, #0a1550 40%, #0d0930 100%)", fontFamily: "Inter, Roboto, sans-serif" }}>

      {/* Hero Header */}
      <div style={{
        background: "linear-gradient(135deg, rgba(5,53,137,0.97) 0%, rgba(80,20,180,0.92) 100%)",
        borderBottom: "1px solid rgba(250,204,21,0.25)",
        padding: "56px 24px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "url('/images/chip.jpeg') center/cover no-repeat", opacity: 0.07 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #facc15, #a855f7)",
            borderRadius: "100px",
            padding: "4px 18px",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#060d2e",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>VDAT 2026</div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            background: "linear-gradient(90deg, #facc15 0%, #e879f9 55%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}>Technical Programme</h1>
          <p style={{ color: "rgba(233,213,255,0.8)", fontSize: "1rem", margin: 0 }}>
            20–22 August 2026 &nbsp;|&nbsp; Jaypee Institute of Information Technology (JIIT), Noida
          </p>
        </div>
      </div>

      {/* Track Legend */}
      <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 24px" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          {Object.entries(tracks).map(([key, t]) => (
            <button
              key={key}
              onClick={() => setActiveTrack(activeTrack === key ? "all" : key)}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "6px 14px", borderRadius: "100px",
                border: `1px solid ${activeTrack === key ? t.color : "rgba(255,255,255,0.12)"}`,
                background: activeTrack === key ? t.bg : "transparent",
                color: activeTrack === key ? t.color : "rgba(255,255,255,0.6)",
                cursor: "pointer", fontSize: "0.78rem", fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.color, display: "inline-block" }} />
              {t.label}
            </button>
          ))}
          {activeTrack !== "all" && (
            <button onClick={() => setActiveTrack("all")} style={{
              padding: "6px 14px", borderRadius: "100px",
              border: "1px solid rgba(250,204,21,0.3)", background: "rgba(250,204,21,0.07)",
              color: "#facc15", cursor: "pointer", fontSize: "0.78rem", fontWeight: 600,
            }}>Show All Tracks</button>
          )}
        </div>
      </div>

      {/* Day Tabs */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "32px 24px 0" }}>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
          {programmeData.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              style={{
                padding: "12px 28px", borderRadius: "12px",
                border: `2px solid ${activeDay === i ? "#facc15" : "rgba(255,255,255,0.12)"}`,
                background: activeDay === i
                  ? "linear-gradient(135deg, rgba(250,204,21,0.2), rgba(168,85,247,0.2))"
                  : "rgba(255,255,255,0.04)",
                color: activeDay === i ? "#facc15" : "rgba(255,255,255,0.65)",
                cursor: "pointer", fontWeight: 700, fontSize: "0.95rem",
                transition: "all 0.25s",
                boxShadow: activeDay === i ? "0 0 20px rgba(250,204,21,0.15)" : "none",
              }}
            >
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.75, marginBottom: "3px" }}>{d.day}</div>
              {d.date}
            </button>
          ))}
        </div>

        {/* Sessions */}
        {currentDay.sessions.map((session, si) => (
          <div key={si} style={{ marginBottom: "28px" }}>
            {/* Session Header */}
            <div
              style={{
                width: "100%", textAlign: "left",
                background: "linear-gradient(135deg, rgba(5,53,137,0.6) 0%, rgba(80,20,180,0.5) 100%)",
                border: "1px solid rgba(250,204,21,0.25)",
                borderRadius: "14px", padding: "18px 24px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                color: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{
                    background: "linear-gradient(90deg, #facc15, #f97316)",
                    color: "#0a0a0a", fontWeight: 800, fontSize: "0.78rem",
                    padding: "3px 12px", borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.1em",
                  }}>{session.sessionLabel}</span>
                  <span style={{ color: "rgba(250,204,21,0.9)", fontSize: "0.9rem", fontWeight: 600 }}>🕐 {session.time}</span>
                </div>
                <div style={{ marginTop: "6px", color: "rgba(233,213,255,0.7)", fontSize: "0.82rem" }}>
                  {session.tracks.length} Parallel Tracks &nbsp;·&nbsp; {session.tracks.reduce((s, t) => s + t.papers.length, 0)} Papers
                </div>
              </div>
            </div>

            {/* Session Body */}
              <div style={{
                marginTop: "12px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "16px",
              }}>
                {session.tracks
                  .filter(t => activeTrack === "all" || t.track === activeTrack)
                  .map((trackData, ti) => {
                    const trackMeta = tracks[trackData.track];
                    return (
                      <div key={ti} style={{
                        background: trackMeta.bg,
                        border: `1px solid ${trackMeta.border}`,
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                      }}>
                        {/* Track Header */}
                        <div style={{
                          background: `linear-gradient(135deg, ${trackMeta.color}22, ${trackMeta.color}11)`,
                          borderBottom: `1px solid ${trackMeta.border}`,
                          padding: "14px 20px",
                        }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                            <span style={{
                              background: trackMeta.color, color: "#fff",
                              fontWeight: 800, fontSize: "0.72rem", padding: "3px 10px",
                              borderRadius: "6px", letterSpacing: "0.05em",
                            }}>{trackData.sessionId}</span>
                            <span style={{ color: trackMeta.color, fontSize: "0.72rem", fontWeight: 600, opacity: 0.9 }}>
                              Track {trackData.track}
                            </span>
                          </div>
                          <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontWeight: 600 }}>
                            {trackMeta.label}
                          </p>
                        </div>

                        {/* Papers */}
                        <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                          {trackData.papers.map((paper, pi) => (
                            <div key={pi} style={{
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.07)",
                              borderRadius: "10px",
                              padding: "12px 14px",
                              transition: "background 0.2s",
                            }}
                              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
                            >
                              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                <span style={{
                                  background: `${trackMeta.color}22`,
                                  border: `1px solid ${trackMeta.color}55`,
                                  color: trackMeta.color,
                                  fontSize: "0.68rem", fontWeight: 800,
                                  padding: "2px 8px", borderRadius: "5px",
                                  whiteSpace: "nowrap", flexShrink: 0, marginTop: "2px",
                                }}>#{paper.id}</span>
                                <div>
                                  <p style={{ margin: "0 0 5px", color: "rgba(255,255,255,0.9)", fontSize: "0.83rem", fontWeight: 600, lineHeight: 1.45 }}>
                                    {paper.title}
                                  </p>
                                  <p style={{ margin: 0, color: "rgba(233,213,255,0.55)", fontSize: "0.73rem", fontStyle: "italic" }}>
                                    👤 {paper.authors}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{ textAlign: "center", padding: "48px 24px 64px", color: "rgba(233,213,255,0.35)", fontSize: "0.78rem" }}>
        <p style={{ margin: 0 }}>Programme subject to change. Please check the conference website for the latest updates.</p>
      </div>
      </div>
      <Footer />
    </div>
  );
}

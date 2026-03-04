"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Google's Tensor Processing Unit: Understanding State-of-the-art AI Accelerator",
    duration: "90 minutes",
    speakers: ["Sparsh Mittal"],
    format: "Presentation",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract:
      `Computing systems have fueled the growth of artificial intelligence (AI). Improvements in AI
algorithms have inevitably gone hand-in-hand with the improvements in the hardware
accelerators. Our ability to train increasingly complex AI models and achieve low-power,
real-time inference depends on the capabilities of computing systems.

In recent years, the metrics used for optimizing and evaluating AI algorithms are diversifying:
along with accuracy, there is increasing emphasis on the metrics such as energy efficiency
and model size. Given this, researchers working on AI can no longer afford to ignore the
computing system. Instead, the knowledge of the potential and limitations of computing
systems can provide invaluable guidance to them in designing the most efficient and
accurate algorithms.

This tutorial seeks to arouse curiosity and even an interest in the AI accelerators, with the
example of one of the most popular commercial accelerator, viz., Google's TPU. We first
present the basics, viz., systolic array architecture for matrix multiplication. Then, we dive
into the architecture of TPU, its salient features, comparison with CPU and GPU architecture,
and evaluation results on AI workloads. We finally provide a view of evolution of Google's
TPU over 6 versions to learn how TPU has transformed to address the needs of changing AI
workloads.

This tutorial is at the intersection of deep learning algorithms, computer architecture, and
chip design, and thus, is expected to be beneficial for a broad range of learners.`,

    domain:
      "This falls at the intersection of computer architecture and artificial intelligence.",
    keywords:
      "Tensor Processing Unit (TPU), Computer Architecture, Artificial Intelligence, Hardware Accelerator, Systolic Array",
    learningOutcomes: [
      "a) Understanding the importance and potential of hardware accelerators for AIb) Understanding the architecture and salient features ofGoogle's Tensor Processing Unitc) Understanding the relative comparison of architectures ofgeneral-purpose (CPU/GPU) and custom accelerators",
    ],
    targetAudience:
      "This tutorial will be relevant to engineering students, industry professionals working in the area of computer architecture, electronics and AI.",
    prerequisites:
      "No Prerequisites. Open to all.",
    speakerBiographies: [
      `
Dr. Sparsh Mittal is currently working as an associate professor in the ECE department at IIT
Roorkee. He is also a joint faculty at Mehta Family School of Data Science and Artificial
Intelligence at IIT Roorkee. He received the B.Tech. degree from IIT, Roorkee, and the Ph.D.
degree from Iowa State University (ISU), USA. He has worked as a Post-Doctoral Research
Associate at Oak Ridge National Lab (ORNL), USA. He has received best paper awards or
honorable mentions at AIMLSystems, VLSID and ICPR conferences. In 2024, he was
shortlisted in the list of top-5 faculty members in IIT Roorkee for the excellence in teaching
award based on students' feedback. His research has been funded by SERB and
Semiconductor Research Corporation (USA). He has served as a reviewer, TPC member or
track chair at prestigious conferences and journals. He has published more than 130 papers
at top venues and has nearly 9500 citations. His research interests are AI for computer
vision, applications of AI, hardware security and computer architecture. His webpage is
http://faculty.iitr.ac.in/~sparshfec/.`,
    ],
    basicStructure: `The tutorial titled:
“Architectural Insights into Google’s Tensor Processing Unit (TPU)”
will be highly relevant to students, researchers, and professionals working in the area of AI hardware, computer architecture, and accelerator design.

1. Introduction to Systolic Array (15 Mins)
– Concept and working of systolic arrays
– Historical background and evolution
– Importance of systolic architecture in deep learning workloads

2. Architecture of Google’s Tensor Processing Unit (20 Mins)
– Internal architecture of TPU
– Matrix Multiply Unit (MXU) and systolic data flow
– On-chip memory organization and interconnects

3. Salient Features of TPU and Comparison with CPU/GPU (20 Mins) 
– Key design features of TPU
– Comparison of TPU with traditional CPU and GPU architectures
– Application-specific advantages and limitations

4. Evaluation Results of TPU (15 Mins) 
– Performance benchmarking metrics
– Power efficiency and throughput evaluation
– Observations from real-world deployments

5. Architectural Evolution of TPU (20 Mins) 
– Evolution from TPU v1 to TPU v6
– Improvements in architecture, scalability, and AI support
– Use cases and design motivations across versions`,

    youtubeVideoId: "1Ur7ozXrS2Sw5DsSufq4lY_xhHX4uMarq", // Replace with actual video ID
    videoId: "1Ur7ozXrS2Sw5DsSufq4lY_xhHX4uMarq",
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

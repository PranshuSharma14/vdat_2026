"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Reliability-Aware Journey from FinFET to Stacked transistor",
    duration: "90 minutes",
    speakers: ["Dr. Navjeet Bagga"],
    format: "Presentation",

    abstract:
      ` The continuous scaling of semiconductor devices has 
driven the technology industry to develop faster, smaller, and more efficient transistors. 
As technology nodes have miniaturized, traditional planar transistors have struggled 
with short-channel effects, leakage currents, and power consumption issues. FinFETs 
emerged as a revolutionary solution to address these challenges. The FinFET structure, 
with its three-dimensional design, offers superior electrostatic control by wrapping the 
gate around a vertical fin. FinFETs have significantly enhanced transistor performance 
by improving electrostatic control and enabling continued scaling. Despite its 
advantages, below the sub-22nm node, FinFETs possess challenges, such as parasitic 
capacitance and resistance, fin depopulation, and variability in fin height and width. 
Additionally, the fixed height of fins constrains area scaling, creating a need for further 
innovations in transistor design.  

    These limitations have prompted the development of new transistor architectures, 
such as stacked transistors, including Nanosheet FET, Forksheet FET, and CFET 
(Complementary FET), with improved power, performance, area, and cost (PPAC). 
These architectures comprise vertically stacked multiple channels/sheets, reducing the 
device's overall footprint while maintaining or improving performance. Stacked 
devices offer enhanced flexibility in gate control and channel width optimization and 
improve power efficiency since multiple channels are integrated without increasing the 
device's lateral area, enabling more transistors to be packed into a smaller space.  

           The integrity of the device (e.g., stacked transistor) raises several call-up 
challenges related to the electrical and thermal reliability. The vertical stacking of 
channels in these devices creates complex electrostatic interactions between sheets, 
leading to research on performance optimization. Further, owing to the compact stacked 
design, the channels/sheets are prone to self-heating problems, as the heat accumulates 
in the wrapped channel by low-thermal-conductivity material. Further, the heat 
generated in one sheet may couple to another, affecting the device's normal operation.  
Therefore, the mutual coupling of electrical and thermal parameters is essentially 
considered for such stacked transistors. Electrical coupling, in one way or another, can 
increase parasitic capacitance and interfere with channel signal transmission, leading to 
degraded device performance.  

On the other hand, the mutual electrical and thermal coupling exacerbates self-heating 
issues, negatively affecting both performance and reliability. Furthermore, the 
additional internal and external process variations, such as interface traps, random 
dopant fluctuation (RDF), gate metal grain granularities (MGG), line-edge roughness 
(LER), NBTI, etc., raise reliability concerns, which play a critical role, leading to 
premature device degradation and failure. Ensuring the long-term reliability of stacked 
transistors requires careful consideration of these failure mechanisms and the 
development of mitigation strategies, which can help predict device aging.
  This tutorial session will provide a detailed overview of the evolution from FinFETs 
to advanced stacked architectures, emphasizing their implications for high-frequency 
performance, modeling complexity, and reliability challenges. Through the lens of both 
traditional and ML-augmented TCAD approaches, we aim to explore the design 
considerations and circuit-level impacts that will define the next era of semiconductor 
innovation.  `,

    domain:
      "Emerging Materials and Devices Technologies - This tutorial delves into the advanced trend of stacked transistors, emphasizing the device modeling, electrical and thermal coupling effects, and reliability perspectives to predict the aging of the sub-2nm node transistor.",
    keywords:
      "Stacked transistor, Electrical Network of Stacked Transistors, High-Frequency modeling, Self-heating effect, Reliability concerns",
    learningOutcomes: [
      "Describe the cutting-edge technology of semiconductor devices and the trend of industry adoption. ",
      "Identify the problems/challenges associated with the previous and existing devices (e.g., MOSFET, FinFET) that motivate research for future stacked transistors (e.g., Nanosheet, Forksheet, Complementary FET).",
      "Analyze the resistance and capacitance behavior of the stacked transistors (e.g., Nanosheet, Forksheet, Complementary FET) that decide the frequency of operation.",
    ],

    targetAudience:
      "The target audience is academicians, UG/PG students, research scholars, industry professionals, semiconductor R&D experts, and those working in nanoscale electronics, modeling, and device circuit co-design. The audience will benefit from the deliverables of this 03-hour tutorial session by gaining knowledge about the latest trends and challenges in the reliability and performance of the recent transistor technologies. The session will also provide a knowledge-sharing and collaboration platform to explore the mentioned topic in further detail.",
    prerequisites:
      "It is expected that the audience should have a basic understanding of semiconductor device physics and circuits, MOSFET, and the idea of first-hand mathematics.",
    
      speakerBiographies: [
      ` Dr. Navjeet Bagga is currently working as an Assistant Professor in 
the School of Electrical and Computer Sciences, Indian Institute of Technology 
Bhubaneswar, Odisha, India. He received his Ph.D. degree from the Indian 
Institute of Technology Roorkee in 2019. He then worked as a Post-Doctoral 
Fellow at Karlsruhe Institute of Technology, Germany. Before joining IIT 
Bhubaneswar, he was working as an Assistant Professor at PDPM IIITDM 
Jabalpur, India. His current research interests include semiconductor device 
modelling, self-heating and reliability aspects of nanoscale devices like 
Nanosheet FETs, FinFETs, Forksheet, Negative Capacitance FETs, Tunnel 
FETs, Ferroelectric FET-based memories, etc. It also includes cryogenic CMOS 
devices, Noise analysis, high-frequency device modeling, FET-based sensors, 
device-circuit co-design, etc. He has authored and co-authored more than 90 
papers in reputed journals and conferences. He has received 03 best paper 
awards at IEEE International Conferences held in Europe, Kolkata, and 
Bangalore, respectively. He is in active collaboration with many National and 
International peers working in the semiconductor domain. He is a Senior 
Member of IEEE and a Life Member of IETE. He is serving as an editor of the 
Journal of Electrical and Electronic Engineering and a reviewer of many 
journals and conferences of IEEE, IOP Science, Elsevier, Springer, etc. `
    ],
    
    basicStructure: `Reliability-Aware Journey from FinFET to Stacked transistor  (90 
minutes) 
a. Trend and Industry Adoption of Semiconductor Devices 
b. PPA Challenges in FinFET: Moving towards the Stacked Transistors 
c. Reliability Issues in Stacked Transistors 
d. Electrical and Thermal coupling among stacked sheets 
e. Mitigation and Optimization approaches `,

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
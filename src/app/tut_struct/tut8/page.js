"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "NQS High-frequency Modeling of the Non planar devices",
    duration: "90 minutes",
    speakers: [" Prof. Sudeb Dasgupta"],
    format: "Presentation",

    abstract:
      ` The continuous scaling of semiconductor devices has 
driven the technology industry to develop faster, smaller, and more efficient transistors. 
As technology nodes have miniaturized, traditional planar transistors have struggled 
with short-channel effects, leakage currents, and power consumption issues. FinFETs 
emerged as a revolutionary solution to address these challenges. The FinFET structure, 
with its three-dimensional design, offers superior electrostatic control by wrapping the 
gate around a vertical fin. 

FinFETs have significantly enhanced transistor performance 
by improving electrostatic control and enabling continued scaling. Despite its 
advantages, below the sub-22nm node, FinFETs possess challenges, such as parasitic 
capacitance and resistance, fin depopulation, and variability in fin height and width. 
Additionally, the fixed height of fins constrains area scaling, creating a need for further 
innovations in transistor design.  

     In particular, as transistor architectures become more complex, accurate 
capacitive and resistive behavior modeling becomes critical for device circuit co
design. For FinFETs, modeling the gate capacitance and resistive paths is relatively 
straightforward. However, stacked transistor architectures introduce new complexities 
due to the vertical arrangement of channels and gates. These vertical stacks create 
capacitive coupling between the layers, which impacts device performance, particularly 
in high-frequency applications. 

Nanosheet transistors offer improved high-frequency 
performance due to reduced parasitic capacitance and improved electrostatic control. 
Accurate modeling of Nanosheet transistors in high-frequency and their circuit 
implications are critical for leveraging their potential in modern technology nodes to 
ensure signal integrity. Thus, designing a robust model (quasi-static or non-quasi
static), addressing the SOEs, and evaluating the reliability challenges requires proper 
attention in agreeing to accept such stacked transistors as an integrated industrial fit. In 
addition, the radiation effects, particularly in advanced nodes where devices are more 
sensitive to external perturbations, also impact the resistive paths within the transistor. 
High-energy particles can induce transient faults or cause permanent resistance 
changes, necessitating robust radiation-aware resistance models for mission-critical 
applications. 

To navigate these complexities, modern Technology Computer-Aided 
Design (TCAD) tools are increasingly being augmented with Machine Learning (ML) 
techniques. ML-driven TCAD can accelerate device simulation, optimize fabrication 
parameters, and predict degradation pathways with greater accuracy. These data-driven 
approaches enable the exploration of large design spaces and support more robust 
modeling of electrical behavior and reliability concerns. 

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
      "Analyse the reliability challenges in stacked transistors and demonstrate the optimization and mitigation techniques.  ",
      " Create equivalent electrical and thermal models to apply such transistors (e.g., stacked) in analog and digital applications. ",
      "Apply the aforementioned analysis in the Machine Learning algorithm for TCAD optimization.",
    ],

    targetAudience:
      "The target audience is academicians, UG/PG students, research scholars, industry professionals, semiconductor R&D experts, and those working in nanoscale electronics, modeling, and device circuit co-design. The audience will benefit from the deliverables of this 03-hour tutorial session by gaining knowledge about the latest trends and challenges in the reliability and performance of the recent transistor technologies. The session will also provide a knowledge-sharing and collaboration platform to explore the mentioned topic in further detail.",
    prerequisites:
      "It is expected that the audience should have a basic understanding of semiconductor device physics and circuits, MOSFET, and the idea of first-hand mathematics.",
    
      speakerBiographies: [
      `  S. Dasgupta, is presently working as a Professor, in the Department 
of Electronics and Communication Engineering at Indian Institute of 
Technology, Roorkee. He received his PhD degree in Electronics Engineering 
from Indian Institute of Technology-Banaras Hindu University, Varanasi in 
2000. During his PhD work, he carried out research in the area of effects of 
ionizing radiation on MOSFET. Subsequently, he was member of faculty of 
Department of Electronics Engg., at Indian School of Mines, Dhanbad. In 2006, 
he joined as an Assistant Professor in the Department of Electronics and 
Communication Engineering at Indian Institute of Technology, Roorkee. He 
was the Chairman, Departmental Academic Programme Committee. He was the 
Chairman of the Faculty Search Committee of the Department. He also tenured 
as the Head of the Department during the period 2019-2022. He has 
authored/co-authored more than 300 research papers in peer reviewed 
international journals and conferences. He is a member of IEEE, EDS, ISTE 
and associate member of Institute of Nanotechnology, UK. 

 He has been a technical committee member International Conference on Micro
to-Nano, 2006; he has been acting as an expert member of The Global Open 
University, The Netherlands. He was awarded with Erasmus Mundus 
Fellowship of European Union in the year 2010 to work in the area of RDF at 
Politecnico Di Torino, Italy. He is the recipient of prestigious IUSSTF to work 
in the area of SRAM testing at University of Wisconsin at Madison, USA in the 
year 2011-12. He was also awarded with DAAD Fellowship to work on Analog 
Design using Reconfigurable Logic at TU, Dresden, Germany in the year 2013. 
He is also a recipient of Humboldt Fellowship to work at TU, Illemenau, 
Germany. He is the Principal Coordinator for SMDP-C2SD at IIT Roorkee (one 
of the Resource Center) which is a 3 crore multi institutional project for system 
development, sponsored by MeiTy, Government of India. He has project worth 
5 crores approximately as a PI or Co-PI. He is also heading the Technology 
Innovation Hub (TIH) Divyasampark as the Project Director. His areas of 
interest are Nanoelectronics, Nanoscale MOSFET modeling and simulation, 
Design and Development of low power novel devices, FinFET based Memory 
Design, Emerging Devices in Analog Design and Design and development of 
reconfigurable logic. 

He has guided 18 Ph.D scholars. Currently he is 
supervising around 6 candidates leading to their Ph.D degree. He has been 
nominated for INAE, Young Engineer Award. Dr. Dasgupta acted as a reviewer 
for IEEE Transactions on Electron Devices, IEEE Electron Device Letters, 
IEEE Transactions on Nanotechnology, Superlattice and Microstructures, 
International Journal of Electronics, Semiconductor Science and Technology, 
Nanotechnology, IEEE Transactions on VLSI Systems, Microelectronic 
Engineering, Microelectronic Reliability amongst other. He has also been 
member of technical committees of various international conferences. `
    ],
    
    basicStructure: `NQS High-frequency Modeling of the Non-planar devices (90 minutes) 
a. Equivalent Capacitive and resistive Network of Non-planar devices 
b. Quasi-static small-signal modelling of the stacked transistor 
c. FinFET/Nanosheet modeling for high-frequency applications 
d. Influence of Radiation on the electrical characteristics of the device 
e. Machine Learning Augmented TCAD Optimization  `,

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
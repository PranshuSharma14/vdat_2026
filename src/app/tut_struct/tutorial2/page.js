"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Testing & characterization of data converters",
    duration: "180 minutes",
    speakers: [
      "Dr. R. S. Ashwin Kumar",
      "Dr. Rakesh Kumar Palani",
      "Dr. Ankesh Jain"
    ],
    format: "Presentation",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract: `Modern system-on-chips (SoCs) are mixed-signal in nature, comprising a combination of purely analog and mixed-signal circuits.
Analog circuits are characterized in the analog domain, and the test setup typically uses signal generators for stimulus, while the output is measured directly on spectrum analyzers, oscilloscopes, etc.
Mixed-signal systems like analog-to-digital converters (ADCs) & digital-to-analog converters (DACs), on the other hand, entail complexities not only in design but also in testing, owing to their mixed-signal nature.

In particular, since the output of ADCs is digital bits, characterization of ADCs involves careful post-processing of this digital data.
This post-processing is required to be done in the time domain or in the frequency domain, depending on the parameter being measured.
This demands that the designer or test engineer be aware of the different parameters that are of interest in an ADC and the relevance of these parameters for each application.

For example, static linearity of ADCs is measured in the time domain, while dynamic linearity requires careful measurement in the frequency domain using the discrete Fourier transform (DFT).
Besides, even the analog stimulus for ADCs must be carefully chosen and applied so as to capture the true performance of the ADC.
As a result, understanding basic signal processing techniques and tools is essential for anyone working with ADCs.
Such working knowledge not only helps during testing but also aids in making design choices that make the design amenable to easier testing (like having a crude digital-to-analog converter (DAC) on-chip for easier testing of high-speed ADCs).

---

This tutorial aims to comprehensively explain the basic signal processing knowledge required for testing.
In addition, it will discuss all other important aspects while testing, such as how to choose the input signal frequency, the minimum no. of FFT points, etc.
Besides, the challenges in testing both discrete-time and high-speed continuous-time ADCs and DACs will be explained in detail with example results.
`,
    domain: "VLSI Circuit and SoC Design",
    keywords: `Data converters, analog-to-digital converter testing,
DNL/INL, SNDR, ENOB`,
    prerequisites: "No Prerequisites. Open to all.",
    speakerBiographies: [
      `Speaker 1: R. S. Ashwin Kumar, Assistant Professor, IIT Kanpur
      
R. S. Ashwin Kumar received the B.E. degree from the College of Engineering, Guindy (CEG), Anna University, Chennai, India, in 2013, and the Ph.D. degree from IIT Madras, Chennai, India, in 2020.

He is currently an Assistant Professor with IIT Kanpur, Kanpur, India.

His research interests are in mixed-signal IC design focusing on data converters and signal processing.
`,
`Speaker 2: Rakesh Kumar Palani, Associate Professor, IIT Delhi

Rakesh K. Palani received his B.Tech. in Electrical Engineering from the National Institute of Technology, Kurukshetra, India in 2007 and his Ph.D. in Electrical Engineering from the University of Minnesota, Twin Cities in 2015.

For his Ph.D., he worked on the design of PVT-tolerant inverter-based circuits for baseband analog applications.

His research interest includes design of low-power filters, ADCs, and amplifiers.

In 2011, he was with Broadcom Corporation, Minneapolis, where he worked on design of word line drivers for SRAM.

In 2014, he was at Qualcomm, San Diego, where he worked on flicker noise reduction techniques in discrete time delta sigma modulators.

He is currently working as an Associate Professor at IIT Delhi.

`,
`Speaker 3: Ankesh Jain, Associate Professor, IIT Delhi

Ankesh Jain (S’09–M’16) received his Ph.D. from IIT Madras, Chennai, India, in 2016, where he worked on the design and characterization of high-speed continuous-time delta–sigma converters. He is currently serving as an Associate Professor at IIT Delhi. Prior to this, he was a Postdoctoral Researcher at the University of Ulm, Germany. His current research interests include data-conversion, power converters, and phase-lock techniques. Dr. Jain was a co-recipient of the ISCAS 2013 Best Student Paper Award.

`,
],
    basicStructure: `Here is the formatted version of the session details:

**There are a total of six sessions, with each session taking approximately 30 minutes.**

**1. ADC Performance Metrics**
*Presenter: R. S. Ashwin Kumar*

a. Static non-linearity measurement for DC signals
b. Need for frequency domain measurements for dynamic non-linearity
c. Differentiating SQNR, SNR, SNDR (SINAD) & SFDR
d. Need for DFT & refresher on spectral analysis
e. How to choose the input frequency given the sampling frequency
f. Need for windowing in practice and necessity of windowing in noise-shaping ADCs


**2. Measurement of DNL & INL**
*Presenter: Rakesh Kumar Palani*

a. Using a ramp-based test to measure DNL & INL
b. How to remove the DC offset & gain error before estimating DNL & INL
c. Practical difficulties with ramp input-based measurement
d. Need for sinusoidal histogram-based test setup
e. Inverting the characteristics to measure the DNL & INL
f. Missing codes & non-monotonicity
g. When to look for DNL & when to look for INL


**3. Challenges in Testing Discrete-Time ADCs**
*Presenter: R. S. Ashwin Kumar*

a. Need for clean sinusoidal signal generators
b. Need for reference buffer and input buffer
c. How to choose or design the right buffer
d. Effect of noise on reference voltages, and need for LDOs
e. Choosing the right passives for high-precision measurement
f. Example measurement results


**4. Challenges in Testing High-Speed Continuous-Time ADCs**
*Presenter: Ankesh Jain*

a. Effect of clock jitter; choosing the right clock source
b. Using a cheap DAC for easier measurements
c. Design of such DACs & discussion on common architectures for such DACs
d. Duo-binary scheme for measurement of the high-speed ADCs
e. Example measurement results


**5. Testing High-Speed Time-Interleaved ADCs**
*Presenter: Ankesh Jain*

a. Need for time-interleaved ADCs
b. Brief discussion on the effect of channel mismatches in offset, gain, and timing
c. Understanding the impact of these mismatches on the output spectrum
d. Digital calibration

**6. Testing of DACs**
*Presenter: Rakesh Kumar Palani*

a. Measurement of DNL & INL for DAC
b. Measuring SFDR
c. Generation of high-speed sinusoidal digital signals
d. Two-tone testing
e. Characterization of DAC across the amplitude
f. Design of high-speed DDFS
g. RF DAC testing
h. LDO requirement

`,

    youtubeVideoId: "", // Replace with actual video ID
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

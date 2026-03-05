import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../footer/footer';
import { Mail, Phone, MapPin, Users, BookOpen, GraduationCap, Lightbulb, Heart, HelpCircle, Building } from "lucide-react";

const ContactUsPage = () => {
  const contactSections = [
    {
      title: "Technical Program Committee (TPC)",
      email: "vdat2025@iitrpr.ac.in",
      description: "For technical program queries, paper submissions, and conference content",
      icon: Users,
      color: "blue"
    },
    {
      title: "Tutorials",
      email: "vdat2025tutorial@gmail.com",
      description: "Information about tutorials, workshop sessions, and educational content",
      icon: BookOpen,
      color: "green"
    },
    {
      title: "Ph.D. Forum",
      email: "dpsahoo@iitbbs.ac.in",
      description: "Doctoral research presentations, PhD student activities, and academic discussions",
      icon: GraduationCap,
      color: "purple"
    },
    {
      title: "CIRCUITPRENEUR",
      email: "vdat2025startup@gmail.com",
      description: "Startup competitions, entrepreneurship activities, and industry collaborations",
      icon: Lightbulb,
      color: "orange"
    },
    {
      title: "Fellowship",
      email: "fellowship.vdat2025@gmail.com",
      description: "Fellowship applications, student support, and financial assistance queries",
      icon: Heart,
      color: "red"
    },
    {
      title: "Sponsorship",
      email: "vdat2025sponsorship@gmail.com",
      description: "Corporate partnerships, sponsorship opportunities, and exhibition queries",
      icon: Building,
      color: "indigo"
    },
    {
      title: "General Queries",
      email: "vdat2025@iitrpr.ac.in",
      description: "Any other questions, general information, and conference details",
      icon: HelpCircle,
      color: "gray"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-700",
        titleColor: "text-blue-800",
        emailBg: "bg-blue-600 hover:bg-blue-700",
        border: "border-blue-200",
        glow: "rgba(59,130,246,0.15)"
      },
      green: {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        iconColor: "text-green-700",
        titleColor: "text-green-800",
        emailBg: "bg-green-600 hover:bg-green-700",
        border: "border-green-200",
        glow: "rgba(34,197,94,0.15)"
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-700",
        titleColor: "text-purple-800",
        emailBg: "bg-purple-600 hover:bg-purple-700",
        border: "border-purple-200",
        glow: "rgba(168,85,247,0.15)"
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-700",
        titleColor: "text-orange-800",
        emailBg: "bg-orange-600 hover:bg-orange-700",
        border: "border-orange-200",
        glow: "rgba(249,115,22,0.15)"
      },
      red: {
        bg: "bg-red-50",
        iconBg: "bg-red-100",
        iconColor: "text-red-700",
        titleColor: "text-red-800",
        emailBg: "bg-red-600 hover:bg-red-700",
        border: "border-red-200",
        glow: "rgba(239,68,68,0.15)"
      },
      indigo: {
        bg: "bg-indigo-50",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-700",
        titleColor: "text-indigo-800",
        emailBg: "bg-indigo-600 hover:bg-indigo-700",
        border: "border-indigo-200",
        glow: "rgba(99,102,241,0.15)"
      },
      gray: {
        bg: "bg-gray-50",
        iconBg: "bg-gray-100",
        iconColor: "text-gray-700",
        titleColor: "text-gray-800",
        emailBg: "bg-gray-600 hover:bg-gray-700",
        border: "border-gray-200",
        glow: "rgba(107,114,128,0.15)"
      }
    };
    return colorMap[color];
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap');

        .contact-page {
          background: #f8f4ff;
          min-height: 100vh;
          font-family: sans-serif;
        }

        /* ── Hero ── */
        .contact-hero {
          position: relative;
          padding: 0;
          overflow: hidden;
          min-height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/jiit5.webp');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(29,98,146,0.88) 0%, rgba(29,98,146,0.75) 50%, rgba(29,98,146,0.88) 100%);
        }
        /* diagonal cut bottom */
        .contact-hero::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 60px;
          background: #f8f4ff;
          clip-path: polygon(0 100%, 100% 0, 100% 100%);
        }

         @media (max-width: 768px) {
          .contact-hero::after {
              clip-path: none;
              height: 5px;
            }
          }

        .contact-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 80px 24px 100px;
          
        }
        
        .contact-hero-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255);
          background: rgba(250,204,21,0);
          border: 1px solid rgba(250,204,21,0.25);
          padding: 5px 16px;
          border-radius: 999px;
          margin-bottom: 16px;
        }
        .contact-hero h1 {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1.05;
          margin-bottom: 16px;
          text-shadow: 0 4px 24px rgba(0,0,0,0.4);
        }
        .contact-hero h1 span {
          background: linear-gradient(90deg, #facc15, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .contact-hero p {
          font-size: 1.05rem;
          color: rgba(233,213,255,0.85);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Section heading ── */
        .section-heading {
          text-align: center;
          margin-bottom: 48px;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }
        .section-heading h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #1e0545;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .section-heading-bar {
          width: 64px;
          height: 3px;
          background: linear-gradient(90deg, #facc15, #a855f7);
          border-radius: 4px;
          margin: 0 auto 14px;
        }
        .section-heading p {
          color: #6b7280;
          font-size: 1rem;
          max-width: 520px;
          width: 100%;
          margin: 0 auto;
          line-height: 1.7;
          text-align: center;
          padding: 0 16px;
          box-sizing: border-box;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        /* ── Cards ── */
        .contact-card {
          border-radius: 18px;
          border-width: 1px;
          border-style: solid;
          padding: 28px 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #facc15, #a855f7);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .contact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(109,40,217,0.12);
        }
        .contact-card:hover::before {
          opacity: 1;
        }
        .contact-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          position: relative;
        }
        .contact-card-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .contact-card-desc {
          color: #6b7280;
          font-size: 0.84rem;
          line-height: 1.65;
          margin-bottom: 18px;
        }
        .email-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          word-break: break-all;
        }
        .email-btn:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        /* ── Quick help banner ── */
        .quick-help {
          background: linear-gradient(135deg, #1e0545 0%, #3b0764 50%, #1e0545 100%);
          border-radius: 20px;
          padding: 48px 36px;
          text-align: center;
          position: relative;
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto;
        }
        .quick-help::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #facc15, #a855f7, #facc15, transparent);
        }
        .quick-help h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }
        .quick-help p {
          color: rgba(233,213,255,0.78);
          font-size: 1rem;
          margin-bottom: 28px;
          line-height: 1.7;
        }
        .quick-help-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(90deg, #facc15, #f97316);
          color: #1e0545;
          padding: 14px 32px;
          border-radius: 10px;
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(250,204,21,0.3);
        }
        .quick-help-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(250,204,21,0.45);
        }
        .quick-help-note {
          color: rgba(196,181,253,0.65);
          font-size: 0.82rem;
          margin-top: 16px;
        }

        /* decorative blobs */
        .blob1 {
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(168,85,247,0.12);
          top: -60px; right: -60px;
          pointer-events: none;
        }
        .blob2 {
          position: absolute;
          width: 140px; height: 140px;
          border-radius: 50%;
          background: rgba(250,204,21,0.07);
          bottom: -40px; left: -40px;
          pointer-events: none;
        }

        /* ── Current contact display ── */
        .current-contact-section {
          padding: 72px 24px 80px;
          display: flex;
          justify-content: center;
        }
        .current-contact-card {
          background: linear-gradient(135deg, #0f172a, #1e40af, #2563eb);
          border-radius: 20px;
          padding: 52px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
          max-width: 800px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(109,40,217,0.3);
        }
        .current-contact-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #facc15, #a855f7, #facc15, transparent);
        }
        .current-contact-card .blob1 { top: -50px; right: -50px; }
        .current-contact-card .blob2 { bottom: -30px; left: -30px; }
        .current-contact-label {
          font-size: 0.80rem;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #facc15;
          background: rgba(250,204,21,0.1);
          border: 1px solid rgba(250,204,21,0.25);
          padding: 5px 16px;
          border-radius: 999px;
          display: inline-block;
          margin-bottom: 20px;
        }
        .current-contact-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(2rem, 3vw, 2rem);
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }
        .current-contact-desc {
          color: rgba(255,255,255);
          font-size: 1rem;
          margin-bottom: 32px;
          line-height: 1.7;
        }
        .current-contact-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(90deg, #facc15, #f97316);
          color: #1e0545;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 0.08rem;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(255,255,255,0.3);
          word-break: break-all;
        }
        .current-contact-email-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(250,204,21,0.45);
        }
        .current-contact-note {
          color: rgba(255,255,255);
          font-size: 0.92rem;
          margin-top: 20px;
        }
      `}</style>

      <div className="contact-page">
        <Navbar />

        {/* ── Hero ── */}
        <header className="contact-hero">
          <div className="contact-hero-bg" />
          <div className="contact-hero-overlay" />
          <div className="contact-hero-content">
            <span className="contact-hero-eyebrow">VDAT 2026 · Noida, India</span>
            <h1>Contact <span>Us</span></h1>
            <p>Get in touch with the VDAT 2026 organizing team — we're here to help</p>
          </div>
        </header>

        {/* ── Current contact email (cards & quick-help commented out for future use) ── */}
        <section className="current-contact-section">
          <div className="current-contact-card">
            <div className="blob1" />
            <div className="blob2" />
            <span className="current-contact-label">Primary Contact</span>
            <h2 className="current-contact-title">Get In Touch</h2>
            <p className="current-contact-desc">
              For any queries regarding VDAT 2026, reach out to us directly
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arti.noor@mail.jiit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="current-contact-email-btn"
            >
              <Mail size={20} />
              arti.noor@mail.jiit.ac.in
            </a>
            <p className="current-contact-note">We typically respond within 24–48 hours during business days</p>
          </div>
        </section>

        {/*
        <section style={{padding:'72px 0 48px'}}>
          <div style={{maxWidth:'1200px', margin:'0 auto', padding:'0 24px'}}>
            <div className="section-heading">
              <h2>Get In Touch</h2>
              <div className="section-heading-bar" />
              <p>Choose the appropriate contact based on your query to ensure faster response times</p>
            </div>

            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',
              gap:'24px'
            }}>
              {contactSections.map((section, index) => {
                const colors = getColorClasses(section.color);
                const IconComponent = section.icon;
                return (
                  <div
                    key={index}
                    className={`contact-card ${colors.bg} ${colors.border}`}
                    style={{boxShadow:`0 4px 24px ${colors.glow}`}}
                  >
                    <div style={{textAlign:'center'}}>
                      <div className={`contact-icon-wrap ${colors.iconBg}`}>
                        <IconComponent size={28} className={colors.iconColor} />
                      </div>
                      <h3 className={`contact-card-title ${colors.titleColor}`}>
                        {section.title}
                      </h3>
                      <p className="contact-card-desc">{section.description}</p>
                      <a
                        href={`mailto:${section.email}`}
                        className={`email-btn ${colors.emailBg}`}
                      >
                        <Mail size={14} />
                        {section.email}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section style={{padding:'16px 24px 80px'}}>
          <div className="quick-help">
            <div className="blob1" />
            <div className="blob2" />
            <h2>Need Quick Help?</h2>
            <p>For immediate assistance or urgent queries, reach out to our main contact</p>
            <a href="mailto:vdat2025@iitrpr.ac.in" className="quick-help-btn">
              <Mail size={18} />
              vdat2025@iitrpr.ac.in
            </a>
            <p className="quick-help-note">We typically respond within 24–48 hours during business days</p>
          </div>
        </section>
        */}

        <Footer />
      </div>
    </>
  );
};

export default ContactUsPage;
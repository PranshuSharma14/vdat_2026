import React from "react";
import Image from "next/image";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";
import { MapPin, Plane, Train, Bus, Navigation, ExternalLink, Map, Hotel, Globe } from "lucide-react";

const VenuePage = () => {

  const attractions = [
    {
      name: "Akshardham Temple",
      image: "/images/akshardham.webp",
      description: "A magnificent Hindu temple complex showcasing traditional Indian architecture, spirituality and culture.",
      link: "https://akshardham.com"
    },
    {
      name: "India Gate",
      image: "/images/indiagate.webp",
      description: "A historic war memorial and one of the most iconic landmarks of New Delhi.",
      link: "https://en.wikipedia.org/wiki/India_Gate"
    },
    {
      name: "Lodhi Garden",
      image: "/images/lodhi-garden.jpeg",
      description: "A beautiful historic park in New Delhi featuring tombs, gardens and peaceful walking trails.",
      link: "https://en.wikipedia.org/wiki/Lodhi_Gardens"
    }
  ];

  const transportOptions = [
    {
      mode: "By Air",
      icon: <Plane className="text-white" size={20} />,
      color: "bg-blue-500",
      accent: "#3b82f6",
      description: "The nearest airport is Indira Gandhi International Airport, New Delhi (about 35 km away). Taxis and ride-sharing services are readily available."
    },
    {
      mode: "By Train",
      icon: <Train className="text-white" size={20} />,
      color: "bg-green-500",
      accent: "#22c55e",
      description: "New Delhi Railway Station and Ghaziabad Railway Station provide convenient access to Noida."
    },
    {
      mode: "By Bus",
      icon: <Bus className="text-white" size={20} />,
      color: "bg-purple-500",
      accent: "#a855f7",
      description: "Noida is well connected through interstate bus services and the Delhi Metro Blue Line, providing easy access from different parts of Delhi."
    }
  ];

  const facilities = [
    { title: "Modern Conference Halls", desc: "State-of-the-art facilities equipped with the latest audiovisual technology", icon: "🏛️" },
    { title: "Exhibition Space", desc: "Dedicated areas for sponsors and exhibitors to showcase their products", icon: "🎪" },
    { title: "Networking Lounges", desc: "Comfortable spaces designed to facilitate meaningful connections", icon: "🤝" },
    { title: "High-Speed WiFi", desc: "Complimentary high-speed internet access throughout the venue", icon: "📡" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --deep:   #0f0225;
          --purple: #3b0764;
          --violet: #6d28d9;
          --lilac:  #a855f7;
          --yellow: #facc15;
          --orange: #f97316;
          --bg:     #f5f0ff;
          --card:   #ffffff;
          --text:   #1e1033;
          --muted:  #6b7280;
          --border: rgba(168,85,247,0.14);
        }

        .vp-root {
          background: var(--bg);
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
        }

        /* ─── HERO ─── */
        .vp-hero {
          position: relative;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .vp-hero-bg {
          position: absolute;
          inset: 0;

          background-image: url('/images/jiit5.webp');
          background-size: cover;        /* makes image fill container */
          background-position: center;   /* center crop */
          background-repeat: no-repeat;

          width: 100%;
          height: 100%;
        }

        .vp-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(29,98,146,0.88) 0%, rgba(29,98,146,0.75) 50%, rgba(29,98,146,0.88) 100%);
        }

        /* slanted bottom cut */
        .vp-hero::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 20px;
          background: var(--bg);
          
        }

        @media (max-width: 768px) {
            .vp-hero::after {
              clip-path: none;
              height: 5px;
            }
          }
        .vp-hero-body {
          position: relative; z-index: 10;
          text-align: center;
          padding: 80px 24px 120px;
        }
        .vp-eyebrow {
          display: inline-block;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: var(--yellow);
          background: rgba(250,204,21,0.1);
          border: 1px solid rgba(250,204,21,0.28);
          padding: 5px 18px; border-radius: 999px;
          margin-bottom: 18px;
        }
        .vp-hero h1 {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 700; color: #fff;
          letter-spacing: 0.07em; text-transform: uppercase;
          line-height: 1; margin-bottom: 20px;
          text-shadow: 0 6px 32px rgba(0,0,0,0.45);
        }
        .vp-hero h1 em {
          font-style: normal;
          background: linear-gradient(90deg, var(--yellow), var(--orange));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .vp-hero-loc {
          display: inline-flex; align-items: center; gap: 8px;
          color: rgba(233,213,255,0.9); font-size: 1.05rem; font-weight: 400;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 9px 22px; border-radius: 999px;
          backdrop-filter: blur(8px);
        }

        /* ─── SECTION WRAPPER ─── */
        .vp-main {
          max-width: 1160px;
          margin: 0 auto;
          padding: 72px 24px 88px;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        /* ─── SECTION HEADING ─── */
        .vp-sh { text-align: center; margin-bottom: 36px; }
        .vp-sh h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.5rem);
          font-weight: 700; color: var(--deep);
          letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 10px;
        }
        .vp-bar {
          width: 56px; height: 3px;
          background: linear-gradient(90deg, var(--yellow), var(--lilac));
          border-radius: 4px; margin: 0 auto;
        }

        /* ─── GLASS CARD BASE ─── */
        .vp-card {
          background: var(--card);
          border-radius: 22px;
          border: 1px solid var(--border);
          box-shadow: 0 6px 30px rgba(109,40,217,0.08);
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          position: relative;
        }
        .vp-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--yellow), var(--lilac));
          opacity: 0;
          transition: opacity 0.28s ease;
        }
        .vp-card:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(109,40,217,0.14); }
        .vp-card:hover::before { opacity: 1; }

        /* ─── HOTEL SECTION ─── */
        .hotel-split { display: flex; flex-wrap: wrap; }
        .hotel-img-col {
          flex: 0 0 320px;
          min-height: 300px;
          position: relative;
          overflow: hidden;
        }
        .hotel-info-col { flex: 1 1 320px; padding: 40px; }
        .hotel-badges { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
        .hotel-badge {
          font-size: 0.72rem; font-weight: 700;
          padding: 4px 12px; border-radius: 999px;
        }
        .hotel-badge.indigo { background: rgba(99,102,241,0.1); color: #4338ca; border: 1px solid rgba(99,102,241,0.2); }
        .hotel-badge.purple { background: rgba(168,85,247,0.1); color: #7c3aed; border: 1px solid rgba(168,85,247,0.2); }
        .hotel-name {
          font-family: 'Rajdhani', sans-serif;
          font-size: 2rem; font-weight: 700; color: var(--deep);
          text-transform: uppercase; letter-spacing: 0.04em;
          margin-bottom: 18px;
        }
        .hotel-desc { color: #4b5563; line-height: 1.78; font-size: 0.97rem; display: flex; flex-direction: column; gap: 14px; text-align:justify; }

        /* ─── MAP SECTION ─── */
        .map-split { display: flex; flex-wrap: wrap; flex-direction: row-reverse; }
        .map-col { flex: 0 0 50%; min-height: 360px; position: relative; }
        .map-col iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
        .transport-col { flex: 1 1 320px; padding: 40px; }
        .transport-header {
          display: flex; align-items: center; gap: 12px; margin-bottom: 32px;
        }
        .transport-icon-wrap {
          background: rgba(250,204,21,0.12);
          border: 1px solid rgba(250,204,21,0.28);
          border-radius: 10px; padding: 8px;
        }
        .transport-header h3 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.5rem; font-weight: 700; color: var(--deep);
          text-transform: uppercase; letter-spacing: 0.04em;
        }
        .transport-list { display: flex; flex-direction: column; gap: 24px; }
        .transport-item { display: flex; align-items: flex-start; gap: 14px; }
        .transport-icon {
          flex-shrink: 0;
          width: 42px; height: 42px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        .transport-mode {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.1rem; font-weight: 700; color: var(--deep);
          text-transform: uppercase; letter-spacing: 0.03em;
          margin-bottom: 4px;
        }
        .transport-desc { color: var(--muted); font-size: 0.88rem; line-height: 1.68; }

        /* ─── ATTRACTIONS ─── */
        .attract-globe {
          display: flex; justify-content: center; margin-bottom: 32px;
        }
        .attract-globe-icon {
          background: rgba(168,85,247,0.1);
          border: 1px solid rgba(168,85,247,0.22);
          border-radius: 50%; padding: 18px;
        }
        .attract-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .attract-card {
          background: var(--card);
          border-radius: 18px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(109,40,217,0.07);
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          position: relative;
        }
        .attract-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--yellow), var(--lilac));
          opacity: 0; transition: opacity 0.28s;
          z-index: 1;
        }
        .attract-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(109,40,217,0.13); }
        .attract-card:hover::before { opacity: 1; }
        .attract-img-wrap { position: relative; height: 200px; overflow: hidden; }
        .attract-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,2,37,0.5), transparent);
        }
        .attract-body { padding: 20px 24px 24px; }
        .attract-name {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.2rem; font-weight: 700; color: var(--deep);
          text-transform: uppercase; letter-spacing: 0.04em;
          margin-bottom: 8px;
        }
        .attract-desc { color: var(--muted); font-size: 0.88rem; line-height: 1.65; margin-bottom: 14px; }
        .attract-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: #7c3aed; font-weight: 600; font-size: 0.88rem;
          text-decoration: none;
          transition: color 0.2s, gap 0.2s;
        }
        .attract-link:hover { color: var(--yellow); gap: 10px; }

        /* ─── FACILITIES BANNER ─── */
        .facilities-wrap {
          background: linear-gradient(135deg, var(--deep) 0%, var(--purple) 50%, var(--deep) 100%);
          border-radius: 22px;
          padding: 52px 36px;
          position: relative; overflow: hidden;
          box-shadow: 0 24px 64px rgba(109,40,217,0.3);
        }
        .facilities-wrap::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, var(--yellow), var(--lilac), var(--yellow), transparent);
        }
        /* decorative blobs */
        .fac-blob1 {
          position: absolute; width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(168,85,247,0.1);
          top: -80px; right: -80px; pointer-events: none;
        }
        .fac-blob2 {
          position: absolute; width: 180px; height: 180px;
          border-radius: 50%;
          background: rgba(250,204,21,0.06);
          bottom: -50px; left: -50px; pointer-events: none;
        }
        .fac-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
          position: relative; z-index: 1;
        }
        .fac-item {
          padding: 28px 20px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          text-align: center;
          transition: background 0.22s, transform 0.22s;
        }
        .fac-item:hover { background: rgba(255,255,255,0.13); transform: translateY(-4px); }
        .fac-icon { font-size: 2rem; margin-bottom: 12px; }
        .fac-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.1rem; font-weight: 700;
          color: var(--yellow);
          text-transform: uppercase; letter-spacing: 0.04em;
          margin-bottom: 8px;
        }
        .fac-desc { color: rgba(233,213,255,0.72); font-size: 0.86rem; line-height: 1.65; }

        /* ─── SHARED BUTTONS ─── */
        .btn-gold {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 22px;
          background: linear-gradient(90deg, var(--yellow), var(--orange));
          color: var(--deep);
          font-weight: 800; font-size: 0.88rem; border-radius: 9px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(250,204,21,0.28);
          margin-top: 28px;
          cursor: pointer;
        }
        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(250,204,21,0.42); }

        .btn-green {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 22px;
          background: linear-gradient(90deg, #22c55e, #16a34a);
          color: #fff;
          font-weight: 700; font-size: 0.88rem; border-radius: 9px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(34,197,94,0.25);
          margin-top: 28px;
          cursor: pointer;
        }
        .btn-green:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(34,197,94,0.38); }

        .btn-purple {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 30px;
          background: linear-gradient(90deg, var(--lilac), #7c3aed);
          color: #fff;
          font-weight: 700; font-size: 0.94rem; border-radius: 10px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(168,85,247,0.3);
          cursor: pointer;
        }
        .btn-purple:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(168,85,247,0.45); }

        @media (max-width: 767px) {
          .hotel-img-col { flex: 0 0 100%; min-height: 220px; }
          .map-col { flex: 0 0 100%; min-height: 260px; }
          .hotel-info-col, .transport-col { padding: 28px 20px; }
        }
      `}</style>

      <div className="vp-root">
        <Navbar />

        {/* HERO */}
        <header className="vp-hero">
          <div className="vp-hero-bg" />
          <div className="vp-hero-overlay" />

          <div className="vp-hero-body">
            <span className="vp-eyebrow">VDAT 2026 · Noida, India</span>

            <h1>
              Conference Venue
            </h1>

            <div className="vp-hero-loc">
              <MapPin size={20} color="#facc15" />
              Jaypee Institute of Information Technology, Noida, Uttar Pradesh
            </div>
          </div>
        </header>

        <main className="vp-main">

          {/* ABOUT VENUE */}
          <section>
            <div className="vp-sh">
              <h2>About the Venue</h2>
              <div className="vp-bar" />
            </div>

            <div className="vp-card">
              <div className="hotel-split">

                <div className="hotel-img-col">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src="/images/jiit2.webp" alt="JIIT Campus" width={800} height={800}/>
                  </div>
                </div>

                <div className="hotel-info-col">

                  <div className="hotel-badges">
                    <span className="hotel-badge indigo">Premier Engineering Institute</span>
                    <span className="hotel-badge purple">Sector 62, Noida</span>
                  </div>

                  <h3 className="hotel-name">
                    Jaypee Institute of Information Technology
                  </h3>

                  <div className="hotel-desc">

                    <p>
                      The symposium will be hosted at <strong>Jaypee Institute of Information Technology (JIIT), Noida</strong>,
                      a premier engineering and research institution known for academic excellence,
                      modern infrastructure, and strong industry collaboration.
                    </p>

                    <p>
                      Established in 2001, the institute offers cutting-edge programs in
                      Computer Science, Electronics, and Information Technology. The campus
                      features advanced laboratories, modern auditoriums, seminar halls,
                      and collaborative research spaces ideal for international conferences.
                    </p>

                    <p>
                      Located in Sector 62, Noida, the campus is well connected to
                      New Delhi and the National Capital Region through road networks
                      and the Delhi Metro, making it highly accessible for national
                      and international participants.
                    </p>

                    <a
                      href="https://www.jiit.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                    >
                      Visit Official Website
                      <ExternalLink size={15} />
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* HOW TO REACH */}
          <section>
            <div className="vp-sh">
              <h2>How to Reach</h2>
              <div className="vp-bar" />
            </div>

            <div className="vp-card">
              <div className="map-split">

                <div className="map-col">
                  <iframe
                    src="https://www.google.com/maps?q=Jaypee+Institute+of+Information+Technology+Noida&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>

                <div className="transport-col">

                  <div className="transport-header">
                    <div className="transport-icon-wrap">
                      <Map size={22} color="#facc15" />
                    </div>
                    <h3>Transportation Options</h3>
                  </div>

                  <div className="transport-list">
                    {transportOptions.map((option, index) => (
                      <div key={index} className="transport-item">
                        <span className={`transport-icon ${option.color}`}>
                          {option.icon}
                        </span>

                        <div>
                          <div className="transport-mode">{option.mode}</div>
                          <p className="transport-desc">{option.description}</p>
                        </div>

                      </div>
                    ))}
                  </div>

                  <a
                    href="https://maps.google.com/?q=Jaypee+Institute+of+Information+Technology+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green"
                  >
                    Get Directions
                    <Navigation size={15} />
                  </a>

                </div>

              </div>
            </div>
          </section>


          {/* DISCOVER NEARBY */}
          <section>
            <div className="vp-sh">
              <h2>Nearby Attractions</h2>
              <div className="vp-bar" />
            </div>

            <div className="attract-globe">
              <div className="attract-globe-icon">
                <Globe size={36} color="#a855f7" />
              </div>
            </div>

            <div className="attract-grid">
              {attractions.map((attraction, index) => (
                <div key={index} className="attract-card">

                  <div className="attract-img-wrap">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                    <div className="attract-img-overlay" />
                  </div>

                  <div className="attract-body">
                    <h3 className="attract-name">{attraction.name}</h3>
                    <p className="attract-desc">{attraction.description}</p>

                    <a
                      href={attraction.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="attract-link"
                    >
                      Learn more <ExternalLink size={14} />
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </section>

          {/* FACILITIES */}
          <section>
            <div className="vp-sh">
              <h2>Conference Facilities</h2>
              <div className="vp-bar" />
            </div>

            <div className="facilities-wrap">
              <div className="fac-blob1" />
              <div className="fac-blob2" />

              <div className="fac-grid">
                {facilities.map((f, i) => (
                  <div key={i} className="fac-item">
                    <div className="fac-icon">{f.icon}</div>
                    <h3 className="fac-title">{f.title}</h3>
                    <p className="fac-desc">{f.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default VenuePage;
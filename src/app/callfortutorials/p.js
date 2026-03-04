  <div className="bg-gray-50">
      <Navbar />
      <header
        className="text-center text-white py-24 md:py-72 relative" // Adjusted padding for responsiveness
        style={{
          backgroundImage: "url('/images/iit-ropar-5.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="bg-black bg-opacity-50 py-12 md:py-20 px-4"> {/* Adjusted padding for responsiveness */}
          <h1 className="text-4xl md:text-5xl font-extrabold">Call for Tutorial:</h1> {/* Adjusted font size for responsiveness */}
          <h2 className="text-xl md:text-2xl mt-4 pb-4 font-light">
            International Symposium on VLSI Design and Test 2025 (VDAT 2025)
          </h2>
          <div className="text-lg md:text-xl"> {/* Adjusted font size for responsiveness */}
            <h3>Important Dates</h3>
            <p>March 3, 2025: Submissions Open</p>
            <p>April 24, 2025: Submission Deadline</p>
            <p>June 15, 2025: Acceptance Notification</p>
            <p>July 5, 2025: Camera Ready Deadline</p>
            <div className="inline-flex flex-col max-w-max">
            <button
              className="bg-purple-600 text-white px-4 py-2  mt-4 rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out w-full"
              onClick={handleLinkClick}
            >
              Submission Link
            </button>
            <button
              className="bg-purple-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out w-full"
              onClick={handlePDFClick}
            >
              Tutorial Brochure
            </button>
            </div>
          </div>
        </div>
      </header>
      </div>
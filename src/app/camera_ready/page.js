"use client";
import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";
import {
  FileText,
  Upload,
  CheckCircle,
  AlertTriangle,
  Clock,
  FileEdit,
  ShieldCheck,
  FileBadge,
  UploadCloud,
  ExternalLink,
  Info
} from "lucide-react";

export default function CameraReadyGuidelines() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Camera-Ready Submission
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please carefully follow all the instructions below to prepare and submit your final paper. Authors must complete all these steps through their SoftConf account.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Step 1: Paper Preparation */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-l-8 border-blue-500 hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                <FileEdit size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">1. Paper Preparation & Formatting</h2>
            </div>

            <ul className="space-y-4 text-lg text-gray-700 list-none">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold mt-1">1.</span>
                <span>Log in to SoftConf and open the Camera-Ready/Final Submission page for the accepted paper.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold mt-1">2.</span>
                <span>Carefully address all reviewer comments and prepare the final paper using the prescribed <strong>IEEE conference template</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold mt-1">3.</span>
                <span>Verify that the paper title, author names, affiliations, sequence of authors, and email addresses are complete and correct.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold mt-1">4.</span>
                <span><strong>Remove all page numbers</strong> and do not manually add any headers or footers.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold mt-1">5.</span>
                <div className="w-full">
                  <span>Add the applicable <strong>IEEE copyright notice</strong> at the bottom-left corner of the first page:</span>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-sm font-semibold text-slate-500 mb-1">If all authors are employed by the U.S. Government:</p>
                      <code className="text-blue-700 font-mono text-sm break-words">U.S. Government work not protected by U.S. copyright</code>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-sm font-semibold text-slate-500 mb-1">If all authors are employed by a Crown Government (UK, Canada or Australia):</p>
                      <code className="text-blue-700 font-mono text-sm break-words">979-8-3195-2478-2/26/$31.00 ©2026 Crown</code>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-sm font-semibold text-slate-500 mb-1">If all authors are employed by the European Union:</p>
                      <code className="text-blue-700 font-mono text-sm break-words">979-8-3195-2478-2/26/$31.00 ©2026 European Union</code>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm font-semibold text-blue-800 mb-1">For all other papers:</p>
                      <code className="text-blue-700 font-mono text-sm break-words">979-8-3195-2478-2/26/$31.00 ©2026 IEEE</code>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Step 2: Copyright Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-l-8 border-purple-500 hover:shadow-purple-500/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-2xl text-purple-600">
                <FileBadge size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">2. IEEE Electronic Copyright Form (eCF)</h2>
            </div>

            <ul className="space-y-4 text-lg text-gray-700 list-none">
              <li className="flex gap-3">
                <span className="text-purple-500 font-bold mt-1">6.</span>
                <span>On the SoftConf submission page, click the IEEE copyright link and complete the <strong>IEEE Electronic Copyright Form (eCF)</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 font-bold mt-1">7.</span>
                <span>After completing the eCF, download the completed <strong>IEEE Copyright PDF/receipt</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 font-bold mt-1">8.</span>
                <span>Return to SoftConf and upload the downloaded copyright document under <span className="font-semibold text-purple-700 bg-purple-50 px-2 py-1 rounded">"Upload IEEE Copyright PDF"</span>.</span>
              </li>
            </ul>
          </div>

          {/* Step 3: PDF eXpress */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-l-8 border-emerald-500 hover:shadow-emerald-500/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">3. IEEE PDF eXpress Compliance</h2>
            </div>

            <ul className="space-y-4 text-lg text-gray-700 list-none">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">9.</span>
                <div className="w-full">
                  <span>Check the final paper through IEEE PDF eXpress:</span>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 mb-2">
                    <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                      Client login: IEEE PDF eXpress <ExternalLink size={18} />
                    </a>
                    <div className="inline-flex items-center justify-center gap-2 bg-emerald-50 px-5 py-2.5 rounded-lg font-medium text-emerald-800 border border-emerald-200">
                      Conference ID: <strong className="text-xl">72243X</strong>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">10.</span>
                <span>Upload the paper to PDF eXpress and resolve all formatting or compliance errors until the PDF is successfully approved.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">11.</span>
                <span>Download the final IEEE PDF eXpress-approved PDF. <strong>Do not modify this PDF after approval.</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">12.</span>
                <span>Return to SoftConf and upload the approved PDF under <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">"Upload Camera-Ready PDF"</span>. Only the final PDF eXpress-compliant file should be uploaded.</span>
              </li>
            </ul>
          </div>

          {/* Step 4: Source Files */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-l-8 border-amber-500 hover:shadow-amber-500/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 rounded-2xl text-amber-600">
                <UploadCloud size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">4. Source Files & Final Submission</h2>
            </div>

            <ul className="space-y-4 text-lg text-gray-700 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">13.</span>
                <div className="w-full">
                  <span>Upload the complete source files under <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded">"Upload Source Files"</span>. The source package may include:</span>
                  <div className="mt-4 grid sm:grid-cols-2 gap-3 bg-amber-50/50 p-5 rounded-xl border border-amber-100">
                    <div className="flex items-center gap-2"><CheckCircle className="text-amber-500" size={18} /> Microsoft Word file; or LaTeX source files</div>
                    <div className="flex items-center gap-2"><CheckCircle className="text-amber-500" size={18} /> Figures and images</div>
                    <div className="flex items-center gap-2"><CheckCircle className="text-amber-500" size={18} /> Bibliography files</div>
                    <div className="flex items-center gap-2"><CheckCircle className="text-amber-500" size={18} /> Class and style files</div>
                    <div className="flex items-center gap-2 sm:col-span-2"><CheckCircle className="text-amber-500" size={18} /> Any other supporting files required to generate the paper</div>
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">14.</span>
                <span>If there are multiple source files, <strong>combine them into a single ZIP archive</strong> before uploading.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">15.</span>
                <span>Ensure that the uploaded source files generate exactly the same paper as the submitted camera-ready PDF.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-1">16.</span>
                <span>Recheck all uploaded files in SoftConf and complete the final submission before the deadline.</span>
              </li>
            </ul>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl p-8 md:p-10 shadow-2xl text-white">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle size={36} className="text-yellow-300" />
              <h2 className="text-3xl font-bold">Important Information</h2>
            </div>

            <p className="text-xl mb-6">The camera-ready submission will be considered complete <strong>only after uploading:</strong></p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black/20 p-5 rounded-2xl flex items-start gap-3 backdrop-blur-sm">
                <CheckCircle className="text-green-400 shrink-0 mt-1" />
                <span className="font-medium">Completed IEEE Copyright PDF</span>
              </div>
              <div className="bg-black/20 p-5 rounded-2xl flex items-start gap-3 backdrop-blur-sm">
                <CheckCircle className="text-green-400 shrink-0 mt-1" />
                <span className="font-medium">IEEE PDF eXpress-compliant camera-ready PDF</span>
              </div>
              <div className="bg-black/20 p-5 rounded-2xl flex items-start gap-3 backdrop-blur-sm">
                <CheckCircle className="text-green-400 shrink-0 mt-1" />
                <span className="font-medium">Complete source files</span>
              </div>
            </div>

            <div className="bg-red-900/50 border border-red-400/30 p-4 rounded-xl text-center">
              <p className="font-bold text-lg text-red-100">
                Incomplete or non-compliant submissions may not be included in the conference proceedings.
              </p>
            </div>
          </div>

          {/* Deadline Section */}
          <div className="flex justify-center mt-12 pb-12">
            <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-md px-8 py-6 rounded-3xl border border-white/20 shadow-xl">
              <Clock className="text-yellow-400 w-12 h-12 animate-pulse" />
              <div className="text-center md:text-left">
                <h3 className="text-gray-300 font-semibold uppercase tracking-wider mb-1">Final Submission Deadline</h3>
                <p className="text-white text-3xl font-bold">1st August 2026</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

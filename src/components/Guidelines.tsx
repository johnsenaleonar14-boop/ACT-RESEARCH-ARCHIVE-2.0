import React from 'react';
import { BookOpen, FileCheck, ShieldAlert, Scale, HelpCircle, ChevronRight } from 'lucide-react';

export function Guidelines() {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="bg-[#0a0da4] rounded-[20px] p-8 md:p-12 text-white shadow-lg mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Research Archive Guidelines</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Comprehensive standards and protocols for the submission, storage, and utilization of academic research within the ACT institutional repository.
          </p>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Section 1: Submission Standards */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-50 rounded-lg text-[#1178ec]">
                <FileCheck size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Submission Standards</h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-600">
              <p className="mb-4">
                To maintain the integrity and accessibility of the archive, all submissions must adhere to the following technical and formatting standards. Failure to comply may result in the rejection of your upload.
              </p>
              
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-4 items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <span className="font-bold text-[#1178ec] min-w-[60px]">Format</span>
                  <div>
                    <strong className="block text-slate-800 mb-1">PDF (Portable Document Format) Only</strong>
                    <p className="text-sm">All documents must be converted to PDF to ensure cross-platform compatibility and preservation of formatting. Word documents (.docx) are not accepted.</p>
                  </div>
                </li>
                
                <li className="flex gap-4 items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <span className="font-bold text-[#1178ec] min-w-[60px]">Size</span>
                  <div>
                    <strong className="block text-slate-800 mb-1">Maximum 10 MB</strong>
                    <p className="text-sm">Optimize images and charts before converting to PDF. For files exceeding this limit, please contact the administrator for compression assistance.</p>
                  </div>
                </li>

                <li className="flex gap-4 items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <span className="font-bold text-[#1178ec] min-w-[60px]">Naming</span>
                  <div>
                    <strong className="block text-slate-800 mb-1">Standardized File Naming</strong>
                    <p className="text-sm">Use the format: <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">Year_Strand_Title_LastName.pdf</code>. Avoid special characters and spaces.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: Academic Integrity */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm border border-slate-100">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-50 rounded-lg text-[#1178ec]">
                <Scale size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Academic Integrity & Ethics</h2>
            </div>
            
            <div className="space-y-6 text-slate-600">
              <p>
                The Research Archive operates under strict ethical guidelines. All submitting authors certify that their work is original and properly cited.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-red-400 pl-4 py-2 bg-red-50/50">
                  <h4 className="font-bold text-slate-800 mb-1">Plagiarism Policy</h4>
                  <p className="text-sm">Submissions found to violate intellectual property rights or contain uncited material will be removed immediately and reported to the Academic Affairs office.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4 py-2 bg-green-50/50">
                  <h4 className="font-bold text-slate-800 mb-1">Data Privacy</h4>
                  <p className="text-sm">Redact sensitive personal information (PII) of participants, including names, addresses, and contact details, prior to upload.</p>
                </div>
              </div>
            </div>
          </div>

           {/* Section 3: Copyright */}
           <div className="bg-white rounded-[20px] p-8 shadow-sm border border-slate-100">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-50 rounded-lg text-[#1178ec]">
                <ShieldAlert size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Copyright & Usage</h2>
            </div>
            
            <div className="text-slate-600 space-y-4">
              <p>
                By submitting to the archive, authors grant the institution a non-exclusive, perpetual license to store, reproduce, and make the work available for academic and research purposes.
              </p>
              <p>
                <strong>Authors retain full copyright</strong> of their work. This archive serves as a repository for preservation and knowledge sharing, not as a publisher claiming ownership.
              </p>
            </div>
          </div>

        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          
          {/* Quick Checklist */}
          <div className="bg-[#1178ec] rounded-[20px] p-6 text-white shadow-md">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <BookOpen size={20} />
              Pre-Submission Checklist
            </h3>
            <ul className="space-y-3">
              {[
                "Title Page is accurate",
                "Approval Sheet signed",
                "Abstract included",
                "Keywords defined (3-5)",
                "References in APA 7th Ed.",
                "Appendices attached"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-50">
                  <div className="w-5 h-5 rounded-full border border-blue-300 flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Contact */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
              <HelpCircle size={20} className="text-[#1178ec]" />
              Need Assistance?
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              For technical issues regarding file conversion, upload errors, or account access, please contact the IT Support Office.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg group cursor-pointer hover:bg-blue-50 transition-colors">
                <div>
                  <p className="font-semibold text-slate-700 text-sm">IT Support</p>
                  <p className="text-slate-400 text-xs">support@act.edu.ph</p>
                </div>
                <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-500" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg group cursor-pointer hover:bg-blue-50 transition-colors">
                <div>
                  <p className="font-semibold text-slate-700 text-sm">Research Coordinator</p>
                  <p className="text-slate-400 text-xs">research@act.edu.ph</p>
                </div>
                <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

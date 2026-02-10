import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, X, Lock } from 'lucide-react';
import { toast } from "sonner";

export function UploadResearch() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authId, setAuthId] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (authId.trim().length >= 3) {
      setIsUnlocked(true);
      toast.success("Upload access granted.");
    } else {
      toast.error("Invalid ID. Please enter a valid Teacher or Administrator ID.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
        toast.error("Please upload a PDF document.");
        return;
    }
    // In a real app, this would upload to Supabase
    toast.success("Research uploaded successfully!");
  };

  const strands = [
    "STEM", "HUMSS", "ABM", "TVL-ICT", "TVL-ICT (HS)", "TVL-HE", "GAS", "ARTS AND DESIGN"
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === 'application/pdf') {
        setFile(droppedFile);
        toast.success(`File selected: ${droppedFile.name}`);
      } else {
        toast.error("Only PDF files are allowed.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
       if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
      } else {
        toast.error("Only PDF files are allowed.");
      }
    }
  };

  if (!isUnlocked) {
    return (
      <div className="max-w-xl mx-auto mt-20">
         <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-slate-100 text-center">
            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-500">
               <Lock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Restricted Access</h2>
            <p className="text-slate-500 mb-8">Please enter your Teacher or Administrator ID to unlock the upload feature.</p>
            
            <form onSubmit={handleUnlock} className="space-y-4">
               <input 
                 type="text" 
                 value={authId}
                 onChange={(e) => setAuthId(e.target.value)}
                 className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-text text-center"
                 placeholder="Enter Teacher / Admin ID"
                 required
               />
               <button 
                type="submit"
                className="w-full bg-[#1178ec] hover:bg-[#0a0da4] text-white font-bold py-3 rounded-xl transition-colors shadow-md cursor-pointer"
               >
                 Unlock Access
               </button>
            </form>
         </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
            <UploadCloud size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Upload Research</h2>
            <p className="text-slate-500">Submit your thesis or dissertation to the archive.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Research Title</label>
              <input 
                type="text" 
                required
                className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-text"
                placeholder="Enter complete title"
              />
            </div>
            
            {/* ID Input removed as requested */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Research Type</label>
                <select className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white cursor-pointer">
                  <option value="Qualitative">Qualitative</option>
                  <option value="Quantitative">Quantitative</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Strand / Course</label>
                <select className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white cursor-pointer">
                    {strands.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                </div>

                <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Year Published</label>
                <select className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white cursor-pointer">
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
                </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <label className="block text-sm font-semibold text-slate-700">Upload Document (PDF)</label>
            <div 
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer group relative
                ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300 hover:bg-slate-50'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf" 
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              
              {file ? (
                <div className="flex flex-col items-center">
                    <div className="bg-blue-100 p-4 rounded-full mb-3 text-blue-600">
                        <FileText size={32} />
                    </div>
                    <p className="font-semibold text-slate-800">{file.name}</p>
                    <p className="text-sm text-slate-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    <button 
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                        }}
                        className="mt-4 text-red-500 text-sm hover:underline flex items-center gap-1 cursor-pointer"
                    >
                        <X size={14} /> Remove file
                    </button>
                </div>
              ) : (
                <>
                    <FileText className="mx-auto text-slate-400 group-hover:text-blue-500 mb-4 transition-colors" size={48} />
                    <p className="font-medium text-slate-700">Click to upload or drag and drop</p>
                    <p className="text-sm text-slate-400 mt-1">PDF only, max 10MB</p>
                </>
              )}
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              className="w-full bg-[#1178ec] hover:bg-[#0a0da4] text-white font-bold py-4 rounded-xl transition-colors shadow-md cursor-pointer"
            >
              Submit Research
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

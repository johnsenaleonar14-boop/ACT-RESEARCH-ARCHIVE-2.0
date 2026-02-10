import React, { useState } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // Simulate sending email
    setTimeout(() => {
      setIsSent(true);
      toast.success("Reset link sent to your email");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-[#1178ec] p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">Reset Password</h3>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {!isSent ? (
            <>
              <div className="mb-6 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1178ec]">
                  <Mail size={32} />
                </div>
                <p className="text-slate-600">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="example@student.act.edu.ph"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-[#1178ec] hover:bg-[#0a0da4] text-white font-bold py-3 rounded-xl transition-colors shadow-md mt-2"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 animate-bounce">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Check your inbox</h4>
              <p className="text-slate-500 mb-6">
                We have sent a password reset link to <br/>
                <span className="font-semibold text-slate-700">{email}</span>
              </p>
              <button 
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

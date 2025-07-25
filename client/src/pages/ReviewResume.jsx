import React, { useState } from 'react';
import { FileTextIcon, Sparkles, FileText, Target, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import Markdown from 'react-markdown'


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const ReviewResume = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('resume', input);

      const { data } = await axios.post('/api/ai/resume-review', formData, {
        headers: {
          Authorization: `Bearer ${await getToken()}`
        }
      });

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen pt-16'>
      <div className='centered-container section-spacing'>
        {/* Header */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-10'>
            <FileText className='w-4 h-4 text-orange-400' />
            <span className='text-orange-400 text-sm font-medium orbit-logo'>RESUME ANALYZER</span>
          </div>
          
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 orbit-logo'>
            Analyze Your <span className='gradient-text'>Resume</span>
          </h1>
          
          <p className='text-lg text-gray-300 mb-12 max-w-2xl mx-auto text-center leading-relaxed'>
            Get professional feedback on your resume with AI-powered analysis.
          </p>
        </div>

        {/* Features */}
        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Sparkles className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>AI Analysis</h3>
            <p className='text-gray-300 text-sm subtitle-text'>Advanced AI reviews your resume comprehensively</p>
          </div>
          
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <CheckCircle className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Expert Feedback</h3>
            <p className='text-gray-300 text-sm subtitle-text'>Professional insights and improvement suggestions</p>
          </div>
          
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Target className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Career Optimization</h3>
            <p className='text-gray-300 text-sm subtitle-text'>Tailored advice to boost your job prospects</p>
          </div>
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Input Form */}
          <div className='professional-card p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center orange-glow'>
                <Sparkles className='w-5 h-5 text-orange-400' />
              </div>
              <div>
                <h2 className='text-xl font-semibold text-white orbit-logo'>Resume Analyzer</h2>
                <p className='text-sm text-gray-300'>Upload your resume for professional analysis</p>
              </div>
            </div>

            <form onSubmit={onSubmitHandler} className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-white mb-2'>
                  Upload Resume
                </label>
                <input
                  onChange={(e) => setInput(e.target.files[0])}
                  type="file"
                  accept="application/pdf"
                  className='input-field w-full'
                  required
                />
                <p className='text-xs text-gray-400 mt-2'>
                  PDF format only (Max 10MB)
                </p>
              </div>

              <button
                disabled={loading}
                type="submit"
                className='btn-primary w-full flex items-center justify-center gap-2'
              >
                {loading ? (
                  <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                ) : (
                  <FileText className='w-4 h-4' />
                )}
                Analyze Resume
              </button>
            </form>
          </div>

          {/* Results */}
          <div className='professional-card p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center orange-glow'>
                <FileTextIcon className='w-5 h-5 text-orange-400' />
              </div>
              <div>
                <h2 className='text-xl font-semibold text-white orbit-logo'>Analysis Results</h2>
                <p className='text-sm text-gray-300'>Professional resume feedback</p>
              </div>
            </div>

            {!content ? (
              <div className='flex flex-col items-center justify-center h-96 text-center'>
                <div className='w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4'>
                  <FileTextIcon className='w-8 h-8 text-slate-500' />
                </div>
                <h3 className='text-lg font-medium text-slate-300 mb-2'>Ready to Analyze</h3>
                <p className='text-slate-400 text-sm max-w-sm'>
                  Upload your resume and click "Analyze Resume" to get professional feedback and improvement suggestions.
                </p>
              </div>
            ) : (
              <div className='prose prose-invert max-w-none h-96 overflow-y-auto'>
                <Markdown className='text-slate-300 leading-relaxed'>
                  {content}
                </Markdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;

import { Sparkles, Edit, FileText, Clock, Target, BookOpen } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react'
import toast from 'react-hot-toast'
import Markdown from 'react-markdown'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000'

const WriteArticles = () => {
  const articleLength = [
    { length: 800, text: 'Short (500-800 words)', description: 'Quick reads, perfect for social media' },
    { length: 1200, text: 'Medium (800-1200 words)', description: 'Standard blog posts with good depth' },
    { length: 1600, text: 'Long (1200+ words)', description: 'In-depth articles for SEO and authority' }
  ]

  const [selectedLength, setSelectedLength] = useState(articleLength[0])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')

  const { getToken } = useAuth()

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const prompt = `Write an article about ${input} in ${selectedLength.text}`;

      const { data } = await axios.post('/api/ai/generate-article', {
        prompt,
        length: selectedLength.length
      }, {
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
    }

    setLoading(false);
  };

  return (
    <div className='min-h-screen pt-16'>
      <div className='centered-container section-spacing'>
        {/* Header */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-10'>
            <Edit className='w-4 h-4 text-orange-400' />
            <span className='text-orange-400 text-sm font-medium orbit-logo'>AI ARTICLE WRITER</span>
          </div>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 orbit-logo'>
            Create Professional <span className='gradient-text'>Articles</span>
          </h1>

          <p className='text-sm text-gray-300 mb-12 max-w-2xl mx-auto text-center leading-relaxed'>
            Generate well-structured articles on any topic with AI-powered writing.
          </p>
        </div>

        {/* Features */}
        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <FileText className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Well-Structured</h3>
            <p className='text-gray-300 text-xs subtitle-text text-center'>Proper headings, paragraphs, and logical flow</p>
          </div>

          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Target className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>SEO Optimized</h3>
            <p className='text-gray-300 text-xs subtitle-text text-center'>Content designed to rank well in search engines</p>
          </div>

          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <BookOpen className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Engaging Content</h3>
            <p className='text-gray-300 text-sm subtitle-text'>Compelling narratives that keep readers interested</p>
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
                <h2 className='text-xl font-semibold text-white orbit-logo'>Article Generator</h2>
                <p className='text-sm text-gray-300'>Configure your article preferences</p>
              </div>
            </div>

            <form onSubmit={onSubmitHandler} className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-white mb-2'>
                  Article Topic
                </label>
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  className='input-field w-full'
                  placeholder='e.g., The future of artificial intelligence, sustainable living tips...'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-white mb-3'>
                  Article Length
                </label>
                <div className='space-y-3'>
                  {articleLength.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedLength(item)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${selectedLength.text === item.text
                        ? 'bg-orange-500/20 border-orange-500/30 text-orange-400'
                        : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:border-orange-500/20'
                        }`}
                    >
                      <div className='flex items-center gap-3'>
                        <Clock className='w-4 h-4' />
                        <div>
                          <div className='font-medium'>{item.text}</div>
                          <div className='text-xs opacity-75'>{item.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className='btn-primary w-full flex items-center justify-center gap-2'
              >
                {loading ? (
                  <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                ) : (
                  <Edit className='w-4 h-4' />
                )}
                Generate Article
              </button>
            </form>
          </div>

          {/* Results */}
          <div className='professional-card p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center orange-glow'>
                <FileText className='w-5 h-5 text-orange-400' />
              </div>
              <div>
                <h2 className='text-xl font-semibold text-white orbit-logo'>Generated Article</h2>
                <p className='text-sm text-gray-300'>AI-powered content creation</p>
              </div>
            </div>

            {!content ? (
              <div className='flex flex-col items-center justify-center h-96 text-center'>
                <div className='w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4'>
                  <Edit className='w-8 h-8 text-slate-500' />
                </div>
                <h3 className='text-lg font-medium text-slate-300 mb-2'>Ready to Write</h3>
                <p className='text-slate-400 text-sm max-w-sm'>
                  Enter your article topic and select the desired length, then click "Generate Article" to create professional content.
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
  )
}

export default WriteArticles

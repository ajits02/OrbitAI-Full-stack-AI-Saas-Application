import { Hash, Sparkles, Lightbulb, Target, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import Markdown from 'react-markdown'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000'

const BlogTitles = () => {
  const blogCategories = [
    'General',
    'Technology',
    'Business',
    'Health',
    'Lifestyle',
    'Education',
    'Travel',
    'Food'
  ];

  const [selectedCategory, setSelectedCategory] = useState('General');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')

  const {getToken} = useAuth()

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const prompt = `Generate a blog title about ${input} in the category of ${selectedCategory}`;

      const { data } = await axios.post('/api/ai/generate-blog-title', {
        prompt,
        category: selectedCategory
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
            <Hash className='w-4 h-4 text-orange-400' />
            <span className='text-orange-400 text-sm font-medium orbit-logo'>SMART TITLE GENERATOR</span>
          </div>
          
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 orbit-logo'>
            Generate Compelling <span className='gradient-text'>Blog Titles</span>
          </h1>
          
          <p className='text-sm text-gray-300 mb-12 max-w-2xl mx-auto text-center leading-relaxed'>
            Create engaging, SEO-optimized blog titles that capture attention and drive traffic.
          </p>
        </div>

        {/* Features */}
        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Target className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>SEO Optimized</h3>
            <p className='text-gray-300 text-xs subtitle-text text-center'>Titles designed to rank higher in search results</p>
          </div>
          
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <TrendingUp className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>High Engagement</h3>
            <p className='text-gray-300 text-xs subtitle-text text-center'>Crafted to maximize clicks and reader interest</p>
          </div>
          
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Lightbulb className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Creative Ideas</h3>
            <p className='text-gray-300 text-xs subtitle-text text-center'>Unique angles and perspectives for your content</p>
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
                <h2 className='text-xl font-semibold text-white orbit-logo'>Title Generator</h2>
                <p className='text-xs text-gray-300 text-center'>Enter your topic and preferences</p>
              </div>
            </div>

            <form onSubmit={onSubmitHandler} className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-white mb-2'>
                  Topic or Keyword
                </label>
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  className='input-field w-full'
                  placeholder='e.g., artificial intelligence, productivity tips, healthy recipes...'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-white mb-3'>
                  Category
                </label>
                <div className='flex gap-2 flex-wrap'>
                  {blogCategories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedCategory(item)}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                        selectedCategory === item
                          ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                          : 'text-slate-400 border-slate-600 hover:border-orange-500/20'
                      }`}
                    >
                      {item}
                    </button>
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
                  <Hash className='w-4 h-4' />
                )}
                Generate Titles
              </button>
            </form>
          </div>

          {/* Results */}
          <div className='professional-card p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center orange-glow'>
                <Hash className='w-5 h-5 text-orange-400' />
              </div>
              <div>
                <h2 className='text-xl font-semibold text-white orbit-logo'>Generated Titles</h2>
                <p className='text-xs text-gray-300 text-center'>AI-powered title suggestions</p>
              </div>
            </div>

            {!content ? (
              <div className='flex flex-col items-center justify-center h-64 text-center'>
                <div className='w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4'>
                  <Hash className='w-8 h-8 text-slate-500' />
                </div>
                <h3 className='text-lg font-medium text-slate-300 mb-2'>Ready to Generate</h3>
                <p className='text-slate-400 text-sm max-w-sm'>
                  Enter your topic and category above, then click "Generate Titles" to get started with AI-powered suggestions.
                </p>
              </div>
            ) : (
              <div className='prose prose-invert max-w-none'>
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

export default BlogTitles
import { Image, Sparkles, Target } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react'
import toast from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000'


const imageStyle = [
  'Realistic',
  'Ghibli style',
  'Anime style',
  'Cartoon style',
  'Fantasy style',
  'Realistic style',
  '3D style',
  'Portrait style'
];

const GenerateImages = () => {
  const [selectedStyle, setSelectedStyle] = useState('Realistic');
  const [input, setInput] = useState('');
  const [publish, setPublish] = useState(false);

  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')


  const { getToken } = useAuth()


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Add your submit logic here

    try {
      setLoading(true);
      const prompt = `Generate an image of ${input} in ${selectedStyle} style`;

      const { data } = await axios.post('/api/ai/generate-image', {
        prompt,
        style: selectedStyle,
        publish
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
    <div className='min-h-screen pt-20 bg-gradient-to-br from-black via-gray-900 to-black'>
      {/* Background Effects */}
      <div className='fixed inset-0 -z-10'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-10'>
            <Image className='w-4 h-4 text-orange-400' />
            <span className='text-orange-400 text-sm font-medium orbit-logo'>AI IMAGE GENERATOR</span>
          </div>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 orbit-logo'>
            Create Stunning <span className='gradient-text'>Images</span>
          </h1>

          <p className='text-sm text-gray-300 mb-12 max-w-2xl mx-auto text-center leading-relaxed'>
            Generate high-quality images from text descriptions with AI-powered creativity.
          </p>
        </div>

        {/* Features */}
        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Sparkles className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Multiple Styles</h3>
            <p className='text-gray-300 text-sm subtitle-text'>Choose from realistic, anime, cartoon, and more</p>
          </div>

          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Image className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>High Quality</h3>
            <p className='text-gray-300 text-sm subtitle-text'>Professional-grade images ready for use</p>
          </div>

          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Target className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Fast Generation</h3>
            <p className='text-gray-300 text-sm subtitle-text'>Get your images in seconds, not minutes</p>
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
                <h2 className='text-xl font-semibold text-white orbit-logo'>Image Generator</h2>
                <p className='text-sm text-gray-300'>Configure your image preferences</p>
              </div>
            </div>

            <form onSubmit={onSubmitHandler} className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-white mb-2'>
                  Describe your Image
                </label>
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  className='input-field w-full'
                  placeholder='e.g., A futuristic city at sunset, a cute cat in space...'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-white mb-3'>
                  Image Style
                </label>
                <div className='grid grid-cols-2 gap-3'>
                  {imageStyle.map((item) => (
                    <div
                      key={item}
                      onClick={() => setSelectedStyle(item)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${selectedStyle === item
                        ? 'bg-orange-500/20 border-orange-500/30 text-orange-400'
                        : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:border-orange-500/20'
                        }`}
                    >
                      <span className='text-sm font-medium'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <label className='relative cursor-pointer'>
                  <input
                    type="checkbox"
                    onChange={(e) => setPublish(e.target.checked)}
                    checked={publish}
                    className='sr-only peer'
                  />
                  <div className='w-9 h-5 bg-slate-600 rounded-full peer-checked:bg-orange-500 transition'></div>
                  <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
                </label>
                <span className='text-sm text-gray-300'>Publish to Community</span>
              </div>

              <button
                disabled={loading}
                type="submit"
                className='btn-primary w-full flex items-center justify-center gap-2'
              >
                {loading ? (
                  <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                ) : (
                  <Image className='w-4 h-4' />
                )}
                Generate Image
              </button>
            </form>
          </div>

          {/* Results */}
          <div className='professional-card p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center orange-glow'>
                <Image className='w-5 h-5 text-orange-400' />
              </div>
              <div>
                <h2 className='text-xl font-semibold text-white orbit-logo'>Generated Image</h2>
                <p className='text-sm text-gray-300'>AI-powered image creation</p>
              </div>
            </div>

            {!content ? (
              <div className='flex flex-col items-center justify-center h-96 text-center'>
                <div className='w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4'>
                  <Image className='w-8 h-8 text-slate-500' />
                </div>
                <h3 className='text-lg font-medium text-slate-300 mb-2'>Ready to Create</h3>
                <p className='text-slate-400 text-sm max-w-sm'>
                  Describe your image and select a style, then click "Generate Image" to create stunning visuals.
                </p>
              </div>
            ) : (
              <div className='h-96 rounded-lg overflow-hidden'>
                <img src={content} alt="Generated image" className='w-full h-full object-cover rounded-lg' />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
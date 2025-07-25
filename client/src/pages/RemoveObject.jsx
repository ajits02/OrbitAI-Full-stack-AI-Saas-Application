import { useState } from "react";
import { Scissors, Sparkles, Target } from "lucide-react";
import toast from "react-hot-toast";
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const RemoveObject = () => {
  const [input, setInput] = useState('');
  const [object, setObject] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      if (object.split(' ').length > 1) {
        toast.error('Please enter only a single object name');
        return;
      }

      const formData = new FormData();
      formData.append('image', input);
      formData.append('object', object);

      const { data } = await axios.post('/api/ai/remove-image-object', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${await getToken()}`
        }
      });
      
      if (data.success) {
        setContent(data.content);
        toast.success('Object removed successfully!');
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
            <Scissors className='w-4 h-4 text-orange-400' />
            <span className='text-orange-400 text-sm font-medium orbit-logo'>OBJECT ERASER</span>
          </div>
          
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 orbit-logo'>
            Remove <span className='gradient-text'>Objects</span>
          </h1>
          
          <p className='text-sm text-gray-300 mb-12 max-w-2xl mx-auto text-center leading-relaxed'>
            Intelligently remove unwanted objects from your images with AI precision.
          </p>
        </div>

        {/* Features */}
        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Sparkles className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Smart Detection</h3>
            <p className='text-gray-300 text-xs subtitle-text text-center'>AI identifies and removes specific objects accurately</p>
          </div>
          
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Scissors className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Clean Removal</h3>
            <p className='text-gray-300 text-sm subtitle-text'>Seamless object removal with background reconstruction</p>
          </div>
          
          <div className='text-center'>
            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
              <Target className='w-6 h-6 text-orange-400' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-2 orbit-logo'>Precise Control</h3>
            <p className='text-gray-300 text-sm subtitle-text'>Specify exactly what to remove with text descriptions</p>
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
                <h2 className='text-xl font-semibold text-white orbit-logo'>Object Eraser</h2>
                <p className='text-sm text-gray-300'>Upload image and specify object to remove</p>
              </div>
            </div>

            <form onSubmit={onSubmitHandler} className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-white mb-2'>
                  Upload Image
                </label>
                <input
                  onChange={(e) => setInput(e.target.files[0])}
                  type="file"
                  accept="image/*"
                  className='input-field w-full'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-white mb-2'>
                  Object to Remove
                </label>
                <textarea
                  onChange={(e) => setObject(e.target.value)}
                  value={object}
                  rows={4}
                  className='input-field w-full resize-none'
                  placeholder='e.g., watch, spoon, person, car (single object only)'
                  required
                />
                <p className='text-xs text-gray-400 mt-2'>
                  Enter only a single object name for best results
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
                  <Scissors className='w-4 h-4' />
                )}
                Remove Object
              </button>
            </form>
          </div>

          {/* Results */}
          <div className='professional-card p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center orange-glow'>
                <Scissors className='w-5 h-5 text-orange-400' />
              </div>
              <div>
                <h2 className='text-xl font-semibold text-white orbit-logo'>Processed Image</h2>
                <p className='text-sm text-gray-300'>Object removal result</p>
              </div>
            </div>

            {!content ? (
              <div className='flex flex-col items-center justify-center h-96 text-center'>
                <div className='w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4'>
                  <Scissors className='w-8 h-8 text-slate-500' />
                </div>
                <h3 className='text-lg font-medium text-slate-300 mb-2'>Ready to Process</h3>
                <p className='text-slate-400 text-sm max-w-sm'>
                  Upload an image and specify the object to remove, then click "Remove Object" to get started.
                </p>
              </div>
            ) : (
              <div className='h-96 rounded-lg overflow-hidden'>
                <img src={content} alt="Processed image" className='w-full h-full object-contain rounded-lg' />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveObject;
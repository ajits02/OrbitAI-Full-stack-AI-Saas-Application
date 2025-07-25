import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { dummyPublishedCreationData } from '../assets/assets';
import { Heart, Users, Sparkles, TrendingUp, Eye, Share2 } from 'lucide-react';

const Community = () => {
  const [creations, setCreations] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useUser();

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [user]);

  return (
    <div className={`min-h-screen pt-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className='centered-container section-spacing'>
        {/* Enhanced Header */}
        <div className='mb-16 text-center'>
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-8 orange-glow'>
            <Users className='w-5 h-5 text-orange-400' />
            <span className='text-orange-400 text-sm font-medium orbit-logo'>COMMUNITY SHOWCASE</span>
          </div>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 orbit-logo'>
            <span className='gradient-text'>OrbitAI</span> Community
          </h1>
          
          <p className='text-sm text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-center'>
            Discover amazing creations from our talented community of AI-powered creators. 
            Get inspired and share your own masterpieces.
          </p>

          {/* Community Stats */}
          <div className='flex items-center justify-center gap-8 text-sm text-gray-400 mb-12'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center'>
                <Sparkles className='w-4 h-4 text-white' />
              </div>
              <span className='font-medium'>1,250+ Creations</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center'>
                <TrendingUp className='w-4 h-4 text-white' />
              </div>
              <span className='font-medium'>500+ Active Creators</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center'>
                <Eye className='w-4 h-4 text-white' />
              </div>
              <span className='font-medium'>50K+ Views Daily</span>
            </div>
          </div>
        </div>

        {/* Enhanced Creations Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {creations.map((creation, index) => (
            <div
              key={index}
              className='professional-card p-0 overflow-hidden group cursor-pointer'
            >
              {/* Image Container */}
              <div className='relative overflow-hidden'>
                <img
                  src={creation.content}
                  alt="AI Generated Creation"
                  className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
                />
                
                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-4 left-4 right-4'>
                    <p className='text-white text-xs leading-relaxed mb-3 line-clamp-2 text-center'>
                      {creation.prompt}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <button className='flex items-center gap-1 text-white hover:text-orange-400 transition-colors'>
                          <Heart 
                            className={`w-4 h-4 ${creation.likes.includes(user?.id) ? 'fill-red-500 text-red-500' : ''}`}
                          />
                          <span className='text-sm font-medium'>{creation.likes.length}</span>
                        </button>
                        
                        <button className='flex items-center gap-1 text-white hover:text-orange-400 transition-colors'>
                          <Share2 className='w-4 h-4' />
                          <span className='text-sm font-medium'>Share</span>
                        </button>
                      </div>
                      
                      <button className='btn-primary text-xs px-3 py-1'>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Creation Type Badge */}
                <div className='absolute top-4 left-4'>
                  <span className='bg-orange-500/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm'>
                    {creation.type === 'image' ? 'AI Image' : creation.type}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className='p-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center'>
                      <span className='text-white text-xs font-bold'>
                        {creation.user_id.slice(-3).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className='text-white text-xs font-medium text-center'>Creator</p>
                      <p className='text-gray-400 text-xs text-center'>
                        {new Date(creation.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className='flex items-center gap-1 text-orange-400'>
                    <Heart className='w-4 h-4' />
                    <span className='text-sm font-medium'>{creation.likes.length}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-20 text-center'>
          <div className='professional-card p-12 text-center'>
            <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Sparkles className='w-8 h-8 text-white' />
            </div>
            
            <h3 className='text-3xl font-bold text-white mb-4 orbit-logo'>
              Ready to Create Something Amazing?
            </h3>
            
            <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
              Join our community of creators and start building incredible content with OrbitAI's powerful tools.
            </p>
            
            <button className='btn-primary text-lg px-8 py-4'>
              Start Creating Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
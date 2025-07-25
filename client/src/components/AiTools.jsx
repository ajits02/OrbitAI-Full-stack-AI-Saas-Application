import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { ArrowRight, Sparkles, Zap, Users, Shield, Star } from 'lucide-react'

const AiTools = () => {
  const navigate = useNavigate()
  const { user } = useUser()

  return (
    <section id='ai-toolkits-section' className='section-spacing'>
      <div className='centered-container'>
        {/* Header Section */}
        <div className='text-center mb-20'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-10 orange-glow'>
            <Sparkles className='w-5 h-5 text-orange-400' />
            <span className='text-orange-400 text-sm font-medium orbit-logo'>PROFESSIONAL AI TOOLKIT</span>
          </div>

          {/* Main Heading */}
          <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 orbit-logo'>
            Powerful <span className='gradient-text'>OrbitAI</span> Tools
            <br />
            for Every Workflow.
          </h2>

          {/* Subtitle */}
          <p className='text-base text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-center'>
            Transform your creative process with our comprehensive suite of AI-powered tools. 
            From content creation to image processing, experience the future of professional productivity.
          </p>

          {/* Enhanced Stats */}
          <div className='flex items-center justify-center gap-12 text-sm text-gray-400 mb-16'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center'>
                <Users className='w-5 h-5 text-white' />
              </div>
              <div>
                <div className='text-white font-bold text-lg'>25,000+</div>
                <div className='text-xs'>Active Users</div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center'>
                <Zap className='w-5 h-5 text-white' />
              </div>
              <div>
                <div className='text-white font-bold text-lg'>6 Tools</div>
                <div className='text-xs'>AI Powered</div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center'>
                <Star className='w-5 h-5 text-white fill-current' />
              </div>
              <div>
                <div className='text-white font-bold text-lg'>4.9/5</div>
                <div className='text-xs'>User Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tools Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {AiToolsData.map((tool, index) => (
            <div
              key={index}
              className='professional-card p-8 cursor-pointer group relative overflow-hidden'
              onClick={() => {
                if (user) {
                  navigate(tool.path)
                } else {
                  alert('Please sign in to access OrbitAI tools')
                }
              }}
            >
              {/* Background Gradient Effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Icon */}
              <div className='mb-6 relative z-10'>
                <div
                  className='w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'
                  style={{
                    background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})`,
                    boxShadow: `0 8px 32px ${tool.bg.from}40`
                  }}
                >
                  <tool.Icon className='w-8 h-8 text-white' />
                </div>
              </div>

              {/* Content */}
              <div className='relative z-10'>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors orbit-logo'>
                  {tool.title}
                </h3>
                <p className='text-gray-400 text-base mb-6 leading-relaxed'>
                  {tool.description}
                </p>
                
                {/* Enhanced Action */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center text-orange-400 text-sm font-medium group-hover:gap-2 transition-all'>
                    <span>Launch Tool</span>
                    <ArrowRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform' />
                  </div>
                  <div className='w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors'>
                    <ArrowRight className='w-4 h-4 text-orange-400' />
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className='absolute inset-0 border-2 border-transparent group-hover:border-orange-500/30 rounded-xl transition-colors duration-300'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AiTools
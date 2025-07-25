import { useNavigate } from 'react-router-dom'
import { Sparkles, Lock, User, ArrowRight, Zap, Star, TrendingUp, BarChart3 } from 'lucide-react'
import { useUser, SignInButton } from '@clerk/clerk-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const navigate = useNavigate()
  const { isSignedIn } = useUser()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [chartData, setChartData] = useState({
    revenue: [20, 35, 45, 60, 55, 75, 85, 95],
    users: [15, 25, 40, 50, 65, 70, 80, 90],
    engagement: [30, 45, 35, 70, 60, 85, 75, 88]
  })
  const [currentPoint, setCurrentPoint] = useState(0)

  const handleStartCreating = () => {
    if (isSignedIn) {
      navigate('/ai')
    } else {
      setShowAuthModal(true)
    }
  }

  // Animate chart data with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => ({
        revenue: prev.revenue.map(val => Math.max(15, Math.min(95, val + (Math.random() - 0.5) * 8))),
        users: prev.users.map(val => Math.max(10, Math.min(90, val + (Math.random() - 0.5) * 6))),
        engagement: prev.engagement.map(val => Math.max(20, Math.min(92, val + (Math.random() - 0.5) * 7)))
      }))
      setCurrentPoint(prev => (prev + 1) % 8)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative min-h-screen flex items-center justify-center section-spacing'>
      {/* Background Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10'></div>

      {/* Pure Dark Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-60 -right-60 w-[600px] h-[600px] bg-gradient-to-br from-black/20 to-gray-900/10 rounded-full blur-[150px]'></div>
        <div className='absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-gradient-to-tr from-black/15 to-gray-900/8 rounded-full blur-[150px]'></div>
        <div className='absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-gray-900/8 to-black/5 rounded-full blur-[120px]'></div>
        <div className='absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-gray-800/6 to-black/10 rounded-full blur-[120px]'></div>

        {/* Minimal accent particles */}
        <div className='absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-gray-400/10 rounded-full animate-pulse'></div>
        <div className='absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-gray-500/15 rounded-full animate-pulse' style={{ animationDelay: '2s' }}></div>
        <div className='absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-orange-400/8 rounded-full animate-pulse' style={{ animationDelay: '4s' }}></div>
      </div>

      <div className='relative z-10 centered-container'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Content */}
          <div className='text-center lg:text-left'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-gray-800/20 border border-gray-600/30 rounded-full px-6 py-3 mb-8'>
              <Zap className='w-4 h-4 text-gray-300' />
              <span className='text-gray-300 text-sm font-medium orbit-logo'>AI-POWERED PLATFORM</span>
            </div>

            {/* Main Heading */}
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8'>
              The Ultimate <span className='gradient-text'>OrbitAI</span> Platform
              <br />
              for Creators.
            </h1>

            {/* Subtitle */}
            <p className='text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
              Unleash your creative potential with our cutting-edge AI-powered toolkit.
              Transform ideas into reality, craft stunning content, and elevate your creative workflow with intelligent automation.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-6 mb-16'>
              <button
                onClick={handleStartCreating}
                className='btn-primary flex items-center justify-center gap-3 text-lg px-10 py-5 relative overflow-hidden group'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <span className='relative z-10'>Start Creating</span>
                <ArrowRight className='w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300' />
              </button>
              <button 
                onClick={() => navigate('/ai')}
                className='btn-secondary text-lg px-10 py-5 hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300'
              >
                Explore Tools
              </button>
            </div>

            {/* Trust Indicators */}
            <div className='flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-400'>
              <div className='flex items-center gap-3'>
                <div className='flex -space-x-2'>
                  <div className='w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full border-2 border-gray-800'></div>
                  <div className='w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full border-2 border-gray-800'></div>
                  <div className='w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full border-2 border-gray-800'></div>
                </div>
                <span className='font-medium'>25,000+ creators</span>
              </div>
              <div className='flex items-center gap-2'>
                <Star className='w-5 h-5 text-gray-300 fill-current' />
                <span className='font-medium'>4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Dashboard Preview */}
          <div className='relative'>
            <div className='professional-card p-8 shadow-2xl'>
              {/* Dashboard Header */}
              <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/30 border border-orange-400/30 flex items-center justify-center'>
                    <BarChart3 className='w-4 h-4 text-orange-400' />
                  </div>
                  <h3 className='text-xl font-bold text-white orbit-logo'>OrbitAI Analytics</h3>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-400'>
                  <div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse'></div>
                  Live Data
                </div>
              </div>

              {/* Enhanced Stats Cards */}
              <div className='grid grid-cols-2 gap-6 mb-8'>
                <div className='bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-xl p-5 border border-gray-600/30'>
                  <div className='flex items-center justify-between mb-2'>
                    <TrendingUp className='w-5 h-5 text-orange-400' />
                    <span className='text-xs text-orange-300 font-medium'>+24%</span>
                  </div>
                  <div className='text-3xl font-bold text-white mb-1'>12,486</div>
                  <div className='text-sm text-gray-300'>AI Generations</div>
                </div>
                <div className='bg-gradient-to-br from-gray-700/30 to-gray-800/20 rounded-xl p-5 border border-gray-500/30'>
                  <div className='flex items-center justify-between mb-2'>
                    <Sparkles className='w-5 h-5 text-orange-400' />
                    <span className='text-xs text-orange-300 font-medium'>+18%</span>
                  </div>
                  <div className='text-3xl font-bold text-white mb-1'>8,924</div>
                  <div className='text-sm text-gray-300'>Active Projects</div>
                </div>
              </div>

              {/* Advanced Multi-Line Chart */}
              <div className='bg-gradient-to-br from-black/60 to-gray-900/40 rounded-xl p-6 h-48 relative overflow-hidden border border-gray-700/30'>
                {/* Chart Background Grid */}
                <div className='absolute inset-0 opacity-10'>
                  <div className='absolute inset-0 bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-[size:2rem_1rem]'></div>
                </div>

                {/* Chart Legend */}
                <div className='flex items-center gap-6 mb-4 relative z-20'>
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500'></div>
                    <span className='text-xs text-gray-300 font-medium'>Revenue</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500'></div>
                    <span className='text-xs text-gray-300 font-medium'>Users</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-500'></div>
                    <span className='text-xs text-gray-300 font-medium'>Engagement</span>
                  </div>
                </div>

                {/* SVG Chart Container */}
                <div className='relative h-32 w-full'>
                  <svg className='w-full h-full' viewBox='0 0 400 120' preserveAspectRatio='none'>
                    {/* Gradient Definitions */}
                    <defs>
                      <linearGradient id='revenueGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                        <stop offset='0%' stopColor='rgba(251, 146, 60, 0.8)' />
                        <stop offset='100%' stopColor='rgba(251, 146, 60, 0.1)' />
                      </linearGradient>
                      <linearGradient id='usersGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                        <stop offset='0%' stopColor='rgba(96, 165, 250, 0.6)' />
                        <stop offset='100%' stopColor='rgba(96, 165, 250, 0.05)' />
                      </linearGradient>
                      <linearGradient id='engagementGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                        <stop offset='0%' stopColor='rgba(74, 222, 128, 0.6)' />
                        <stop offset='100%' stopColor='rgba(74, 222, 128, 0.05)' />
                      </linearGradient>
                    </defs>

                    {/* Revenue Area */}
                    <path
                      d={`M 0 ${120 - chartData.revenue[0]} ${chartData.revenue.map((val, i) => `L ${(i * 400) / 7} ${120 - val}`).join(' ')} L 400 120 L 0 120 Z`}
                      fill='url(#revenueGradient)'
                      className='transition-all duration-2000 ease-in-out'
                    />

                    {/* Users Area */}
                    <path
                      d={`M 0 ${120 - chartData.users[0]} ${chartData.users.map((val, i) => `L ${(i * 400) / 7} ${120 - val}`).join(' ')} L 400 120 L 0 120 Z`}
                      fill='url(#usersGradient)'
                      className='transition-all duration-2000 ease-in-out'
                    />

                    {/* Engagement Area */}
                    <path
                      d={`M 0 ${120 - chartData.engagement[0]} ${chartData.engagement.map((val, i) => `L ${(i * 400) / 7} ${120 - val}`).join(' ')} L 400 120 L 0 120 Z`}
                      fill='url(#engagementGradient)'
                      className='transition-all duration-2000 ease-in-out'
                    />

                    {/* Revenue Line */}
                    <path
                      d={`M 0 ${120 - chartData.revenue[0]} ${chartData.revenue.map((val, i) => `L ${(i * 400) / 7} ${120 - val}`).join(' ')}`}
                      stroke='#fb923c'
                      strokeWidth='2.5'
                      fill='none'
                      className='transition-all duration-2000 ease-in-out drop-shadow-sm'
                    />

                    {/* Users Line */}
                    <path
                      d={`M 0 ${120 - chartData.users[0]} ${chartData.users.map((val, i) => `L ${(i * 400) / 7} ${120 - val}`).join(' ')}`}
                      stroke='#60a5fa'
                      strokeWidth='2.5'
                      fill='none'
                      className='transition-all duration-2000 ease-in-out drop-shadow-sm'
                    />

                    {/* Engagement Line */}
                    <path
                      d={`M 0 ${120 - chartData.engagement[0]} ${chartData.engagement.map((val, i) => `L ${(i * 400) / 7} ${120 - val}`).join(' ')}`}
                      stroke='#4ade80'
                      strokeWidth='2.5'
                      fill='none'
                      className='transition-all duration-2000 ease-in-out drop-shadow-sm'
                    />

                    {/* Animated Data Points */}
                    {chartData.revenue.map((val, i) => (
                      <circle
                        key={`revenue-${i}`}
                        cx={(i * 400) / 7}
                        cy={120 - val}
                        r={i === currentPoint ? '4' : '2.5'}
                        fill='#fb923c'
                        className={`transition-all duration-500 ${i === currentPoint ? 'drop-shadow-lg' : ''}`}
                        style={{
                          filter: i === currentPoint ? 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.8))' : 'none'
                        }}
                      />
                    ))}

                    {chartData.users.map((val, i) => (
                      <circle
                        key={`users-${i}`}
                        cx={(i * 400) / 7}
                        cy={120 - val}
                        r={i === currentPoint ? '4' : '2.5'}
                        fill='#60a5fa'
                        className={`transition-all duration-500 ${i === currentPoint ? 'drop-shadow-lg' : ''}`}
                        style={{
                          filter: i === currentPoint ? 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))' : 'none'
                        }}
                      />
                    ))}

                    {chartData.engagement.map((val, i) => (
                      <circle
                        key={`engagement-${i}`}
                        cx={(i * 400) / 7}
                        cy={120 - val}
                        r={i === currentPoint ? '4' : '2.5'}
                        fill='#4ade80'
                        className={`transition-all duration-500 ${i === currentPoint ? 'drop-shadow-lg' : ''}`}
                        style={{
                          filter: i === currentPoint ? 'drop-shadow(0 0 8px rgba(74, 222, 128, 0.8))' : 'none'
                        }}
                      />
                    ))}
                  </svg>

                  {/* X-axis Labels */}
                  <div className='absolute bottom-0 left-0 right-0 flex justify-between px-1'>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((month, i) => (
                      <div key={month} className={`text-xs transition-all duration-300 ${i === currentPoint ? 'text-orange-400 font-semibold' : 'text-gray-500'}`}>
                        {month}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Stats */}
                <div className='absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-gray-600/30'>
                  <div className='text-xs text-gray-400 mb-1'>Current Growth</div>
                  <div className='text-lg font-bold text-orange-400'>+{Math.round(chartData.revenue[currentPoint])}%</div>
                </div>
              </div>

              {/* Enhanced Bottom Stats */}
              <div className='mt-8 pt-6 border-t border-gray-700'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-gray-300'>$892K</div>
                    <div className='text-xs text-gray-400'>Revenue</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-gray-300'>99.9%</div>
                    <div className='text-xs text-gray-400'>Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className='absolute -top-6 -right-6 bg-gradient-to-br from-gray-800/40 to-gray-900/30 border border-gray-600/40 rounded-xl p-4 backdrop-blur-sm'>
              <div className='text-gray-300 text-lg font-bold'>25K+</div>
              <div className='text-xs text-gray-400'>Active Users</div>
            </div>

            <div className='absolute -bottom-6 -left-6 bg-gradient-to-br from-gray-700/40 to-gray-800/30 border border-gray-500/40 rounded-xl p-4 backdrop-blur-sm'>
              <div className='text-gray-300 text-lg font-bold'>1.2M</div>
              <div className='text-xs text-gray-400'>API Calls</div>
            </div>

            {/* Orbit Animation */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none'>
              <div className='absolute inset-0 border border-gray-600/15 rounded-full animate-spin' style={{ animationDuration: '20s' }}></div>
              <div className='absolute inset-4 border border-gray-500/20 rounded-full animate-spin' style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className='mt-24 text-center'>
          <p className='text-sm text-gray-500 mb-10 orbit-logo'>TRUSTED BY 25,000+ CREATORS WORLDWIDE</p>
          <div className='flex items-center justify-center gap-12 opacity-60'>
            <div className='text-gray-400 font-bold text-lg hover:text-gray-300 transition-colors'>Microsoft</div>
            <div className='text-gray-400 font-bold text-lg hover:text-gray-300 transition-colors'>Google</div>
            <div className='text-gray-400 font-bold text-lg hover:text-gray-300 transition-colors'>OpenAI</div>
            <div className='text-gray-400 font-bold text-lg hover:text-gray-300 transition-colors'>Adobe</div>
            <div className='text-gray-400 font-bold text-lg hover:text-gray-300 transition-colors'>Figma</div>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-fadeIn'>
          <div className='bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-md lg:max-w-lg w-full mx-2 sm:mx-4 shadow-2xl transform animate-slideUp max-h-[90vh] overflow-y-auto'>
            <div className='text-center'>
              {/* Lock Icon */}
              <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <Lock className='w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-500' />
              </div>

              {/* Title */}
              <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 px-2'>
                Sign In Required
              </h3>

              {/* Description */}
              <p className='text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed px-2'>
                Join thousands of creators and unlock the full potential of AI-powered creative tools. Transform your ideas into reality.
              </p>

              {/* Action Buttons */}
              <div className='flex flex-col gap-3 sm:gap-4'>
                <SignInButton mode="modal">
                  <button className='w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base'>
                    <User className='w-4 h-4 sm:w-5 sm:h-5' />
                    Sign In to Continue
                  </button>
                </SignInButton>

                <button
                  onClick={() => setShowAuthModal(false)}
                  className='w-full bg-slate-100 text-slate-600 px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300 text-sm sm:text-base'
                >
                  Maybe Later
                </button>
              </div>

              {/* Benefits */}
              <div className='mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200'>
                <p className='text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3'>What you'll get access to:</p>
                <div className='flex flex-wrap gap-1.5 sm:gap-2 justify-center px-2'>
                  <span className='bg-orange-50 text-orange-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium'>AI Article Writer</span>
                  <span className='bg-orange-50 text-orange-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium'>Image Generator</span>
                  <span className='bg-orange-50 text-orange-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium'>Background Remover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
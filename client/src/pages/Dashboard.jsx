import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { BarChart3, TrendingUp, Users, Zap, ArrowUpRight, Calendar, Sparkles, Target } from 'lucide-react'
import AiTools from '../components/AiTools'

const Dashboard = () => {
  const { user } = useUser()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      title: 'AI Generations',
      value: '12,486',
      change: '+24%',
      trend: 'up',
      icon: Sparkles,
      color: 'orange',
      bgGradient: 'from-orange-500/20 to-orange-600/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400'
    },
    {
      title: 'Active Projects',
      value: '8,924',
      change: '+18%',
      trend: 'up',
      icon: Target,
      color: 'yellow',
      bgGradient: 'from-yellow-500/20 to-yellow-600/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400'
    },
    {
      title: 'Content Created',
      value: '25,480',
      change: '+32%',
      trend: 'up',
      icon: BarChart3,
      color: 'green',
      bgGradient: 'from-green-500/20 to-green-600/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400'
    },
    {
      title: 'API Requests',
      value: '1.2M',
      change: '+15%',
      trend: 'up',
      icon: Zap,
      color: 'blue',
      bgGradient: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400'
    }
  ]

  const recentActivity = [
    { action: 'Generated article', title: 'AI in Healthcare', time: '2 hours ago' },
    { action: 'Created image', title: 'Product mockup', time: '4 hours ago' },
    { action: 'Removed background', title: 'Profile photo', time: '6 hours ago' },
    { action: 'Generated title', title: 'Blog post ideas', time: '1 day ago' }
  ]

  return (
    <div className={`min-h-screen pt-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className='centered-container section-spacing'>
        {/* Enhanced Header */}
        <div className='mb-12 text-center lg:text-left'>
          <div className='flex items-center justify-center lg:justify-start gap-3 mb-4'>
            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center orange-glow'>
              <img 
                src="/icons8-blackhole-64.png" 
                alt="OrbitAI Logo" 
                className='w-8 h-8 filter brightness-0 invert'
              />
            </div>
            <h1 className='text-4xl font-bold text-white orbit-logo'>
              Welcome back, <span className='gradient-text'>{user?.firstName || 'User'}</span>!
            </h1>
          </div>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0'>
            Here's your OrbitAI dashboard overview. Track your AI-powered productivity and explore new possibilities.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {stats.map((stat, index) => (
            <div key={index} className={`professional-card p-6 bg-gradient-to-br ${stat.bgGradient} border ${stat.borderColor}`}>
              <div className='flex items-center justify-between mb-4'>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 flex items-center justify-center shadow-lg`}>
                  <stat.icon className='w-6 h-6 text-white' />
                </div>
                <div className={`flex items-center ${stat.textColor} text-sm font-medium`}>
                  <ArrowUpRight className='w-4 h-4 mr-1' />
                  {stat.change}
                </div>
              </div>
              <div>
                <div className='text-3xl font-bold text-white mb-2 orbit-logo'>{stat.value}</div>
                <div className='text-sm text-gray-300 font-medium'>{stat.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Main Content Grid */}
        <div className='grid lg:grid-cols-3 gap-8 mb-12'>
          {/* Enhanced Chart Area */}
          <div className='lg:col-span-2'>
            <div className='professional-card p-8'>
              <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center'>
                    <BarChart3 className='w-5 h-5 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-white orbit-logo'>OrbitAI Usage Analytics</h3>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-400'>
                  <Calendar className='w-4 h-4' />
                  <span className='font-medium'>Last 7 days</span>
                </div>
              </div>
              
              {/* Enhanced Chart Representation */}
              <div className='h-72 flex items-end justify-between gap-3 bg-black/20 rounded-xl p-6 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent'></div>
                {[40, 65, 45, 80, 60, 90, 75, 95].map((height, index) => (
                  <div key={index} className='flex-1 flex flex-col items-center relative z-10'>
                    <div
                      className='w-full bg-gradient-to-t from-orange-500 via-orange-400 to-yellow-400 rounded-t-lg transition-all duration-1000 ease-out shadow-lg'
                      style={{ 
                        height: `${height}%`,
                        boxShadow: `0 0 15px rgba(255, 107, 53, 0.4)`
                      }}
                    ></div>
                    <div className='text-xs text-gray-400 mt-3 font-medium'>
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Today'][index]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Stats */}
              <div className='mt-6 pt-6 border-t border-gray-700'>
                <div className='grid grid-cols-3 gap-4 text-center'>
                  <div>
                    <div className='text-2xl font-bold text-orange-400 orbit-logo'>2.4K</div>
                    <div className='text-xs text-gray-400'>Peak Usage</div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-yellow-400 orbit-logo'>1.8K</div>
                    <div className='text-xs text-gray-400'>Average</div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-green-400 orbit-logo'>+32%</div>
                    <div className='text-xs text-gray-400'>Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Recent Activity */}
          <div className='professional-card p-8'>
            <div className='flex items-center gap-3 mb-8'>
              <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center'>
                <TrendingUp className='w-5 h-5 text-white' />
              </div>
              <h3 className='text-xl font-bold text-white orbit-logo'>Recent Activity</h3>
            </div>
            <div className='space-y-6'>
              {recentActivity.map((activity, index) => (
                <div key={index} className='flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/5 to-transparent border border-orange-500/10 hover:border-orange-500/20 transition-colors'>
                  <div className='w-3 h-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mt-1 flex-shrink-0'></div>
                  <div className='flex-1'>
                    <div className='text-sm text-white font-semibold mb-1'>{activity.action}</div>
                    <div className='text-sm text-gray-300 mb-2'>{activity.title}</div>
                    <div className='text-xs text-orange-400 font-medium'>{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Tools Section */}
        <AiTools />
      </div>
    </div>
  )
}

export default Dashboard

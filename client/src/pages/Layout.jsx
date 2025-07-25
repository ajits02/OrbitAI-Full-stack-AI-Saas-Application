import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const Layout = () => {
  const { isLoaded, isSignedIn } = useUser()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50/30'>
        <div className='text-center'>
          <div className='relative'>
            <div className='w-16 h-16 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin mx-auto mb-6'></div>
            <div className='absolute inset-0 w-16 h-16 border-4 border-transparent border-r-orange-300 rounded-full animate-spin mx-auto' style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
          <h3 className='text-xl font-semibold text-slate-700 mb-2'>Loading OrbitAI</h3>
          <p className='text-slate-500'>Preparing your AI workspace...</p>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50/30'>
        <div className='text-center max-w-md mx-auto p-8'>
          <div className='w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6'>
            <svg className='w-8 h-8 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
            </svg>
          </div>
          <h2 className='text-2xl font-bold text-slate-800 mb-4'>Access Restricted</h2>
          <p className='text-slate-600 mb-6'>Please sign in to access the AI tools dashboard.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className='bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300'
          >
            Go Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Outlet />
    </div>
  )
}

export default Layout

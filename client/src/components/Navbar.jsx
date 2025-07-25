import { useNavigate } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (item) => {
    if (item.name === 'Pricing') {
      // Navigate to home page first, then scroll to pricing section
      navigate('/')
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing-section')
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else if (item.name === 'Home') {
      // Navigate to home page and scroll to top
      handleHomeNavigation()
    } else {
      navigate(item.path)
    }
  }

  const handleHomeNavigation = () => {
    navigate('/')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'AI Tools', path: '/ai' },
    { name: 'Community', path: '/ai/community' },
    { name: 'Pricing', path: '/#pricing-section' }
  ]

  return (
    <nav className='fixed top-0 z-50 w-full backdrop-blur-2xl border-b border-gray-700/50'>
      <div className='centered-container'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div
            className='flex items-center cursor-pointer group'
            onClick={handleHomeNavigation}
          >
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 orange-glow'>
                <img 
                  src="/icons8-blackhole-64.png" 
                  alt="OrbitAI Logo" 
                  className='w-8 h-8 filter brightness-0 invert'
                />
              </div>
              <h1 className='text-xl font-bold transition-all duration-300 orbit-logo'>
                <span className='gradient-text'>Orbit</span>
                <span className='text-white'>AI</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className='nav-link text-sm font-medium'
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className='flex items-center gap-4'>
            {user ? (
              <div className='flex items-center gap-3'>
                <button
                  onClick={() => navigate('/ai')}
                  className='btn-secondary hidden sm:block'
                >
                  Dashboard
                </button>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 ring-2 ring-orange-500/20 hover:ring-orange-500/40 transition-all"
                    }
                  }}
                />
              </div>
            ) : (
              <div className='flex items-center gap-3'>
                <button
                  onClick={openSignIn}
                  className='btn-secondary hidden sm:block'
                >
                  Login
                </button>
                <button
                  onClick={openSignIn}
                  className='btn-primary flex items-center gap-2'
                >
                  Get Started
                  <ArrowRight className='w-4 h-4' />
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors'
            >
              {isMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden border-t border-gray-700/50 py-4'>
            <div className='flex flex-col space-y-3'>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavigation(item)
                    setIsMenuOpen(false)
                  }}
                  className='nav-link text-left'
                >
                  {item.name}
                </button>
              ))}
              {!user && (
                <button
                  onClick={() => {
                    openSignIn()
                    setIsMenuOpen(false)
                  }}
                  className='btn-primary mt-4'
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
          

export default Navbar

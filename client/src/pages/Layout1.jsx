import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { X, Menu } from 'lucide-react'

const Layout = () => {

  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)

  return (
	<div className='flex flex-col items-start justify-start h-screen'>
	  <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
		<img src={assets.logo} alt="" onClick={() => navigate('/')} />
		{
		  sidebar ? (
			<X className='w-6 h-6 text-gray-600 sm:hidden' />
		  ) : (
			<Menu className='w-6 h-6 text-gray-600 sm:hidden' />
		  )
		}
	  </nav>
	</div>
  )
}

export default Layout
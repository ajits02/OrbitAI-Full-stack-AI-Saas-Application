import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <footer className="section-spacing relative overflow-hidden">
            {/* Home Page Background - Enhanced */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-800"></div>
                <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-32 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-orange-400/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-700/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className='centered-container'>
                {/* Main Footer Content */}
                <div className='grid lg:grid-cols-3 gap-12 mb-16'>
                    
                    {/* Brand Section */}
                    <div className='lg:col-span-1'>
                        <div 
                            className='flex items-center gap-3 mb-6 cursor-pointer group'
                            onClick={() => navigate('/')}
                        >
                            <div className='w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 orange-glow'>
                                <img 
                                    src="/icons8-blackhole-64.png" 
                                    alt="OrbitAI Logo" 
                                    className='w-8 h-8 filter brightness-0 invert'
                                />
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold orbit-logo'>
                                    <span className='gradient-text'>Orbit</span>
                                    <span className='text-white'>AI</span>
                                </h2>
                                <p className='text-orange-400 text-sm font-medium'>AI-Powered Platform</p>
                            </div>
                        </div>
                        
                        <p className='text-gray-300 leading-relaxed mb-8 max-w-md'>
                            Transform your creative process with cutting-edge AI technology. 
                            From content creation to image processing, experience the future of productivity.
                        </p>
                        
                        {/* Social Links */}
                        <div className='flex gap-3'>
                            {[
                                { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                                { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
                            ].map((social) => (
                                <a 
                                    key={social.name}
                                    href="#" 
                                    className="w-10 h-10 bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700/50 hover:border-orange-400/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                >
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className='grid md:grid-cols-2 gap-8 lg:col-span-2'>
                        {/* AI Tools */}
                        <div>
                            <h3 className='text-lg font-bold text-white mb-6 flex items-center gap-2'>
                                <Sparkles className='w-5 h-5 text-orange-400' />
                                AI Tools
                            </h3>
                            <ul className='space-y-3'>
                                {[
                                    { name: 'Generate Images', path: '/ai/generate-images' },
                                    { name: 'Write Articles', path: '/ai/write-articles' },
                                    { name: 'Blog Titles', path: '/ai/blog-titles' },
                                    { name: 'Remove Background', path: '/ai/remove-background' },
                                    { name: 'Remove Object', path: '/ai/remove-object' },
                                    { name: 'Review Resume', path: '/ai/review-resume' }
                                ].map((tool) => (
                                    <li key={tool.name}>
                                        <button
                                            onClick={() => navigate(tool.path)}
                                            className='text-gray-400 hover:text-orange-400 transition-colors duration-300 text-left'
                                        >
                                            {tool.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Company */}
                        <div>
                            <h3 className='text-lg font-bold text-white mb-6'>Company</h3>
                            <ul className='space-y-3'>
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'AI Dashboard', path: '/ai' },
                                    { name: 'Community', path: '/ai/community' },
                                    { name: 'Pricing', path: '/#pricing-section' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => navigate(link.path)}
                                            className='text-gray-400 hover:text-orange-400 transition-colors duration-300 text-left'
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* CTA Section */}
                <div className='professional-card p-8 mb-16 text-center'>
                    <div className='max-w-2xl mx-auto'>
                        <h3 className='text-2xl font-bold text-white mb-4 orbit-logo'>
                            Ready to Transform Your Workflow?
                        </h3>
                        <p className='text-gray-300 mb-6 leading-relaxed'>
                            Join thousands of creators using OrbitAI to revolutionize their content creation process.
                        </p>
                        <button
                            onClick={() => navigate('/ai')}
                            className='btn-primary flex items-center gap-2 mx-auto'
                        >
                            Get Started Free
                            <ArrowRight className='w-4 h-4' />
                        </button>
                    </div>
                </div>
                
                {/* Bottom Section */}
                <div className='border-t border-gray-700/50 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left'>
                        <div className='text-gray-400'>
                            <p>
                                © 2025 <span className='text-orange-400 font-semibold orbit-logo'>OrbitAI</span>. All rights reserved.
                            </p>
                        </div>
                        
                        <div className='flex items-center gap-6 text-sm text-gray-400'>
                            <a href="#" className='hover:text-orange-400 transition-colors'>Privacy Policy</a>
                            <a href="#" className='hover:text-orange-400 transition-colors'>Terms of Service</a>
                            <a href="#" className='hover:text-orange-400 transition-colors'>Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
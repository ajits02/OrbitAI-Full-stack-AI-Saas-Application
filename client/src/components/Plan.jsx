import React from 'react'
import { PricingTable } from '@clerk/clerk-react'
import { Check, Star, Zap, Crown, Sparkles } from 'lucide-react'

const Plan = () => {
    return (
        <section id='pricing-section' className='section-spacing'>
            <div className='centered-container'>
                {/* Header Section */}
                <div className='text-center mb-20'>
                    {/* Badge */}
                    <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-10 orange-glow'>
                        <Sparkles className='w-5 h-5 text-orange-400' />
                        <span className='text-orange-400 text-sm font-medium orbit-logo'>PRICING PLANS</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 orbit-logo'>
                        Choose Your <span className='gradient-text'>Plan</span>
                    </h2>

                    {/* Subtitle */}
                    <p className='text-base text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed text-center'>
                        Start for free and scale up as you grow. Find the perfect plan for your creative workflow.
                    </p>

                    {/* Trust Indicators */}
                    <div className='flex items-center justify-center gap-8 text-sm text-gray-400 mb-16'>
                        <div className='flex items-center gap-2'>
                            <Check className='w-4 h-4 text-orange-400' />
                            <span>No Setup Fees</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='w-4 h-4 text-orange-400' />
                            <span>Cancel Anytime</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='w-4 h-4 text-orange-400' />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>

                {/* Enhanced Pricing Table Container */}
                <div className='relative'>
                    {/* Background Glow Effects */}
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 rounded-3xl blur-xl'></div>
                    
                    {/* Pricing Table */}
                    <div className='relative bg-gradient-to-br from-black/40 via-gray-900/30 to-black/40 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 shadow-2xl'>
                        <PricingTable />
                    </div>
                </div>

                {/* Additional Features Section */}
                <div className='mt-20 text-center'>
                    <h3 className='text-2xl font-bold text-white mb-8 orbit-logo'>
                        All Plans Include
                    </h3>
                    
                    <div className='grid md:grid-cols-3 gap-8'>
                        <div className='text-center'>
                            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
                                <Zap className='w-6 h-6 text-orange-400' />
                            </div>
                            <h4 className='text-lg font-semibold text-white mb-2 orbit-logo'>Lightning Fast</h4>
                            <p className='text-gray-300 text-xs text-center'>AI-powered tools that deliver results in seconds</p>
                        </div>
                        
                        <div className='text-center'>
                            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
                                <Star className='w-6 h-6 text-orange-400' />
                            </div>
                            <h4 className='text-lg font-semibold text-white mb-2 orbit-logo'>Premium Quality</h4>
                            <p className='text-gray-300 text-xs text-center'>Professional-grade outputs ready for production</p>
                        </div>
                        
                        <div className='text-center'>
                            <div className='w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 orange-glow'>
                                <Crown className='w-6 h-6 text-orange-400' />
                            </div>
                            <h4 className='text-lg font-semibold text-white mb-2 orbit-logo'>Expert Support</h4>
                            <p className='text-gray-300 text-xs text-center'>Dedicated support team to help you succeed</p>
                        </div>
                    </div>
                </div>

                {/* FAQ or CTA Section */}
                <div className='mt-20 text-center'>
                    <div className='bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-400/20 rounded-xl p-8'>
                        <h3 className='text-xl font-bold text-white mb-4 orbit-logo'>
                            Need a Custom Solution?
                        </h3>
                        <p className='text-gray-300 mb-6'>
                            Contact our team for enterprise pricing and custom integrations tailored to your business needs.
                        </p>
                        <button className='btn-secondary hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300'>
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plan
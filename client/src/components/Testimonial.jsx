const cardsData = [
    {
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200',
        name: 'Sarah Chen',
        handle: '@sarahcreates',
        date: 'March 15, 2025',
        description: 'The AI article writer has completely transformed my content creation process. I can now produce high-quality blog posts in minutes!'
    },
    {
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
        name: 'Marcus Rodriguez',
        handle: '@designwithmarc',
        date: 'April 8, 2025',
        description: 'As a freelance designer, the image generator and background remover tools have been game-changers for my business!'
    },
    {
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
        name: 'Emily Watson',
        handle: '@emilymarketing',
        date: 'April 22, 2025',
        description: 'These AI tools helped me scale my marketing agency from 5 to 50 clients. The efficiency gains are incredible!'
    },
    {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
        name: 'David Kim',
        handle: '@davidwrites',
        date: 'May 3, 2025',
        description: 'I was skeptical about AI writing tools, but this platform exceeded all my expectations. Outstanding quality!'
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
        name: 'Jessica Taylor',
        handle: '@jessicadesigns',
        date: 'May 12, 2025',
        description: 'The user interface is so intuitive, and the results are professional-grade. Essential for my creative workflow!'
    },
    {
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
        name: 'Alex Thompson',
        handle: '@alexcontent',
        date: 'May 18, 2025',
        description: 'From social media posts to full articles, these AI tools handle everything perfectly. 300% productivity boost!'
    },
    {
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
        name: 'Maya Patel',
        handle: '@mayacreative',
        date: 'June 2, 2025',
        description: 'The background remover saved me countless hours of manual editing. My photography business has never been more efficient!'
    },
    {
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200',
        name: 'Ryan Foster',
        handle: '@ryanwrites',
        date: 'June 8, 2025',
        description: 'As a content creator, these AI tools are a lifesaver. The quality and speed are unmatched in the industry!'
    },
    {
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=200',
        name: 'Zoe Martinez',
        handle: '@zoedesigns',
        date: 'June 15, 2025',
        description: 'The image generation capabilities are mind-blowing. My clients are constantly amazed by the creative possibilities!'
    },
    {
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200',
        name: 'James Wilson',
        handle: '@jamesmarketing',
        date: 'June 22, 2025',
        description: 'These tools revolutionized my marketing campaigns. The ROI improvement has been absolutely phenomenal!'
    },
];

const TestimonialCard = ({ card, index }) => (
    <div
        className="group p-6 m-4 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-orange-500/30 shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 w-80 shrink-0 hover:scale-105 hover:border-orange-400/50 hover:bg-white/15 relative overflow-hidden"
        style={{
            animationDelay: `${index * 0.1}s`
        }}
    >
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-400/10 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-400/30 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

        {/* Quote icon - improved positioning */}
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110">
            <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
        </div>

        {/* User info section - improved layout */}
        <div className="flex gap-4 relative z-10 mb-4">
            <div className="relative flex-shrink-0">
                <img className="w-14 h-14 rounded-full ring-3 ring-orange-500/50 group-hover:ring-orange-400/70 transition-all duration-500 object-cover" src={card.image} alt="User Image" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col justify-center flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-white text-lg group-hover:text-orange-100 transition-colors duration-500 truncate">{card.name}</h4>
                    <svg className="flex-shrink-0 w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
                <p className="text-orange-400 font-semibold text-sm group-hover:text-orange-300 transition-colors duration-500 truncate">{card.handle}</p>
                <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-500">{card.date}</p>
            </div>
        </div>

        {/* Testimonial text - improved typography */}
        <blockquote className="text-gray-200 leading-relaxed text-sm group-hover:text-white transition-colors duration-500 relative z-10 mb-4 font-medium">
            "{card.description}"
        </blockquote>

        {/* Star Rating - enhanced design */}
        <div className="flex gap-1 relative z-10 justify-center pt-2 border-t border-orange-500/20 group-hover:border-orange-400/30 transition-colors duration-500">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className="w-4 h-4 text-orange-500 fill-current group-hover:scale-110 group-hover:text-orange-400 transition-all duration-500"
                    viewBox="0 0 20 20"
                    style={{ transitionDelay: `${i * 50}ms` }}
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    </div>
);

export default function Testimonial() {
    const doubledCards = [...cardsData, ...cardsData];

    return (
        <section className="relative flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-20 sm:py-24 lg:py-32 overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-10 right-10 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-orange-400/8 rounded-full blur-3xl animate-pulse delay-2000'></div>
                <div className='absolute bottom-1/3 right-1/3 w-56 h-56 bg-orange-700/12 rounded-full blur-3xl animate-pulse delay-3000'></div>
            </div>

            <style>{`
                @keyframes marqueeScroll {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                
                @keyframes fadeInUp {
                  0% {
                    opacity: 0;
                    transform: translateY(40px);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                @keyframes slideInFromLeft {
                  0% {
                    opacity: 0;
                    transform: translateX(-100px);
                  }
                  100% {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
                
                .marquee-inner {
                  animation: marqueeScroll 80s linear infinite;
                }
                
                .marquee-reverse {
                  animation-direction: reverse;
                  animation-duration: 85s;
                }
                
                .fade-in-up {
                  animation: fadeInUp 1.2s ease-out forwards;
                }
                
                .slide-in-left {
                  animation: slideInFromLeft 1s ease-out forwards;
                }
            `}</style>

            {/* Enhanced Section Header */}
            <div className="text-center mb-20 sm:mb-24 px-6 relative z-10 fade-in-up max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/15 to-orange-600/10 border border-orange-500/30 rounded-full px-8 py-4 mb-10 backdrop-blur-sm shadow-lg hover:shadow-orange-500/20 transition-all duration-500">
                    <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-orange-400 text-lg font-semibold">Customer Success Stories</span>
                </div>

                <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
                    Trusted by <span className="gradient-text">10,000+</span> Creators
                </h2>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                    Discover how our AI-powered tools are transforming creative workflows worldwide
                </p>
                
                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center">
                    <div className="slide-in-left" style={{animationDelay: '0.2s'}}>
                        <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">4.9/5</div>
                        <div className="text-gray-400 text-sm">Average Rating</div>
                    </div>
                    <div className="slide-in-left" style={{animationDelay: '0.4s'}}>
                        <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">50M+</div>
                        <div className="text-gray-400 text-sm">Images Generated</div>
                    </div>
                    <div className="slide-in-left" style={{animationDelay: '0.6s'}}>
                        <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">99.9%</div>
                        <div className="text-gray-400 text-sm">Uptime</div>
                    </div>
                </div>
            </div>

            {/* Enhanced Testimonial Grid Layout */}
            <div className="w-full flex flex-col items-center justify-center relative z-10 space-y-8">
                {/* First Row */}
                <div className="marquee-row w-full mx-auto max-w-none overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-40 sm:w-64 z-10 pointer-events-none bg-gradient-to-r from-black via-black/95 to-transparent"></div>
                    <div className="marquee-inner flex transform-gpu min-w-[200%] py-4">
                        {doubledCards.map((card, index) => (
                            <TestimonialCard key={`row1-${index}`} card={card} index={index} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-40 sm:w-64 z-10 pointer-events-none bg-gradient-to-l from-black via-black/95 to-transparent"></div>
                </div>

                {/* Second Row - Reverse Direction */}
                <div className="marquee-row w-full mx-auto max-w-none overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-40 sm:w-64 z-10 pointer-events-none bg-gradient-to-r from-black via-black/95 to-transparent"></div>
                    <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-4">
                        {doubledCards.map((card, index) => (
                            <TestimonialCard key={`row2-${index}`} card={card} index={index + cardsData.length} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-40 sm:w-64 z-10 pointer-events-none bg-gradient-to-l from-black via-black/95 to-transparent"></div>
                </div>
            </div>

            {/* Enhanced Bottom CTA */}
            <div className="text-center mt-20 sm:mt-24 px-6 relative z-10 fade-in-up">
                <div className="bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-orange-600/10 border border-orange-400/20 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to join our community?</h3>
                    <p className="text-gray-300 mb-8 text-lg sm:text-xl max-w-2xl mx-auto">
                        Start creating amazing content with AI-powered tools trusted by thousands of creators worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-orange-500/40 border-2 border-transparent hover:border-orange-400/30 relative overflow-hidden group">
                            <span className="relative z-10">Start Creating Free</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </button>
                        <button className="text-orange-400 hover:text-orange-300 font-semibold text-lg transition-colors duration-300 underline decoration-orange-400/50 hover:decoration-orange-300">
                            View All Reviews
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
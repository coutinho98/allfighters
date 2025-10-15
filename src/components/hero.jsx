import PresentationVideo from "../assets/video/presentation.mkv";

function Hero() {
    return (
        <section 
            id="hero" 
            className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center 
                       overflow-hidden min-h-[80vh] flex items-center justify-center bg-[#1E1E28]"
        >
            
            <video
                src={PresentationVideo}
                autoPlay
                loop
                muted 
                controls 
                className="absolute inset-0 object-cover w-full h-full z-0"
            >
            </video>
            <div className="absolute inset-0 bg-[#1E1E28]/70 z-10"></div>

            <div className="max-w-4xl mx-auto relative z-20">
                <p className="text-green-500 uppercase tracking-widest text-sm font-bold mb-3">
                    Pirâmide Grappling Association
                </p>
                <h1 className="text-6xl sm:text-7xl font-black mb-4 tracking-tighter text-white">
                    DOMINE O JIU-JITSU E O GRAPPLING
                </h1>
                <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                    Aprenda o <span className='text-green-400 font-bold'>Grappling de alto nível</span> na palma da sua mão com o sistema de ensino mais avançado do Brasil.
                </p>
            </div>
        </section>
    );
}

export default Hero;
import Footer from '@components/Footer';
import Header from '@components/Header';
import TechnicalSkill from '@sections/TechnicalSkill';
import Hero from '@sections/Hero';
import Project from '@sections/Project';
import Contact from '@sections/Contact';
import StarField from '@components/StarField';

function App() {
    return (
        <div className="relative font-sans text-gray-800 dark:text-white">
            {/* Nền tối phía sau cùng */}
            <div className="absolute inset-0 -z-10 bg-bgcolor-light dark:bg-bgcolor-dark" />

            {/* StarField hiệu ứng nền */}
            <div className="fixed inset-0 w-full h-full z-[-1] opacity-0 dark:opacity-100 transition-opacity duration-700 pointer-events-none">
                <StarField />
            </div>

            {/* Video nền - chỉ hiện ở dark mode */}
            <div className="hidden dark:block fixed inset-0 z-[-2] pointer-events-none animate-fade-in">
                <video
                    src="/src/assets/blackhole.webm"
                    className="absolute rotate-180 top-[-340px] left-0 h-[670px] w-full object-cover overflow-hidden opacity-70"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Nội dung chính */}
            <div className="relative z-10 md:px-0 sm:px-6 mx-auto">
                <Header />
                <main className="">
                    <Hero />
                    <Project />
                    <TechnicalSkill />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;

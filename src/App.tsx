import Footer from '@components/Footer';
import Header from '@components/Header';
import About from '@sections/TechnicalSkill';
import Hero from '@sections/Hero';
import Project from '@sections/Project';
import Contact from '@sections/Contact';
import StarField from '@components/StarField';

// function Example() {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white p-6 rounded-xl shadow-lg"
//         >
//             I fade in when mounted!
//         </motion.div>
//     );
// }

function App() {
    return (
        <div className="relative font-sans text-gray-800 dark:text-white">
            {/* Nền tối phía sau cùng */}
            <div className="absolute inset-0 -z-10 bg-bgcolor-light dark:bg-bgcolor-dark" />

            <div className="fixed inset-0 w-[100vw] h-[100vh] z-[-1] opacity-0 dark:opacity-100 transition-opacity duration-700  pointer-events-none">
                <StarField />
            </div>

            {/* Video overlay – chỉ hiện ở dark mode */}
            <div className="hidden dark:block fixed inset-0 z-[-2] pointer-events-none animate-fade-in">
                <video
                    src="/src/assets/blackhole.webm"
                    className="absolute rotate-180 top-[-340px] left-0 w-[700px] h-[670px] lg:w-full lg:h-[700px] object-cover overflow-hidden opacity-70"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Nội dung chính */}
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <Project />
                    <About />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;

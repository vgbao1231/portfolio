import {
    ArrowRight,
    Download,
    Github,
    Linkedin,
    Mail,
    Phone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import FadeInWhenInView from '@components/FadeInWhenInView';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="relative z-10 container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Thông tin bên trái */}
                <div>
                    <FadeInWhenInView delay={0}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            {`Hi, I'm Bao`}
                        </h1>
                    </FadeInWhenInView>

                    <FadeInWhenInView delay={0.1}>
                        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                            Frontend Web Developer
                        </h2>
                    </FadeInWhenInView>

                    <FadeInWhenInView delay={0.2}>
                        <p className="text-gray-400 mb-6 max-w-2xl text-2xl">
                            Frontend developer with experience in building
                            responsive apps using React.js, Vite, Tailwind CSS
                            and MUI. Familiar with backend via Node.js and
                            Spring Boot. Passionate about clean UI and great UX.
                        </p>
                    </FadeInWhenInView>

                    <FadeInWhenInView delay={0.3}>
                        <div className="flex flex-wrap gap-4 mb-6">
                            <a
                                href="#tech"
                                className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded hover:bg-gray-100 font-medium flex items-center min-w-45 gap-2 hover:gap-4 transition-all"
                            >
                                View My Work
                                <ArrowRight />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/src/assets/CV1.pdf"
                                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black flex items-center font-medium transition-all"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Resume
                            </a>
                        </div>
                    </FadeInWhenInView>

                    <FadeInWhenInView delay={0.4}>
                        <div className="flex gap-4 text-2xl">
                            <a
                                className="hover:scale-105 transition-all hover:bg-white/10 p-1.5 rounded"
                                href="https://github.com/vgbao1231"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                className="hover:scale-105 transition-all hover:bg-white/10 p-1.5 rounded"
                                href="https://www.linkedin.com/in/baovo2609"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                className="hover:scale-105 transition-all hover:bg-white/10 p-1.5 rounded"
                                href="mailto:vgbao1231@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                            <a
                                className="hover:scale-105 transition-all hover:bg-white/10 p-1.5 rounded"
                                href="tel:+84384026903"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Phone className="w-6 h-6" />
                            </a>
                        </div>
                    </FadeInWhenInView>
                </div>

                {/* Ảnh đại diện */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                    }}
                    className="flex justify-center"
                >
                    <div className="w-72 h-72 md:w-100 md:h-100 rounded-full overflow-hidden">
                        <img
                            src="/src/assets/avatar.jpg"
                            alt="Avatar"
                            className="w-full h-full object-cover object-[center_25%]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

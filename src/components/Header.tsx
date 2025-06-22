import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = ['home', 'project', 'tech', 'contact'];

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved === 'light' || saved === 'dark') return saved;
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );

                if (visibleEntries.length > 0) {
                    const topSection = visibleEntries[0];
                    setActiveSection(topSection.target.id);
                }
            },
            {
                rootMargin: '0px 0px -60% 0px',
                threshold: 0.3,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 rounded-xl py-2 px-4 bg-background/30 backdrop-blur-md dark:backdrop-brightness-[80%] border-[0.5px] border-gray-200 dark:border-white/20"
        >
            <nav className="container mx-auto px-4 flex justify-between items-center transition-all duration-300">
                <h1 className="text-xl font-bold">Portfolio</h1>
                <ul className="flex space-x-6">
                    {sections.map((id) => (
                        <li
                            key={id}
                            className={`transition-all duration-300 hover:px-4 hover:py-0.25 hover:bg-gray-200/60 hover:rounded-md hover:text-black dark:hover:text-white dark:hover:bg-gray-800/40  hover:font-bold ${
                                activeSection === id
                                    ? 'bg-gray-200/60 text-black dark:text-white dark:bg-gray-800/40 rounded-md font-bold px-4 py-0.25'
                                    : 'font-semibold'
                            }`}
                        >
                            <a
                                href={`#${id}`}
                                className="block px-2 py-1 capitalize"
                            >
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="bg-white dark:bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded transition-colors duration-300"
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? <Sun /> : <Moon />}
                </button>
            </nav>
        </motion.header>
    );
}

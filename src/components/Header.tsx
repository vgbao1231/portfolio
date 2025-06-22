import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import FadeInWhenInView from './FadeInWhenInView';

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

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                rootMargin: '-100px 0px -30% 0px',
                threshold: 0.1,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <FadeInWhenInView
            as="header"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 rounded-xl py-2 px-4 bg-background/30 backdrop-blur-md dark:backdrop-brightness-[80%] border border-gray-200 dark:border-white/20"
        >
            <nav className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Portfolio</h1>

                {/* Menu desktop */}
                <ul className="hidden sm:flex space-x-6">
                    {sections.map((id) => (
                        <li
                            key={id}
                            className={`transition-all duration-300 hover:px-4 hover:py-0.5 hover:bg-gray-200/60 hover:rounded-md hover:text-black dark:hover:text-white dark:hover:bg-gray-800/40 hover:font-bold ${
                                activeSection === id
                                    ? 'bg-gray-200/60 text-black dark:text-white dark:bg-gray-800/40 rounded-md font-bold px-4 py-0.5'
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

                {/* Nút theme (desktop) */}
                <div className="hidden sm:block">
                    <button
                        onClick={toggleTheme}
                        className="bg-white dark:bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded transition-colors duration-300"
                    >
                        {theme === 'light' ? <Sun /> : <Moon />}
                    </button>
                </div>

                {/* Nút menu mobile */}
                <div className="sm:hidden flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="text-black dark:text-white p-2 hover:bg-gray-200/50 dark:hover:bg-white/10 rounded"
                    >
                        {theme === 'light' ? <Sun /> : <Moon />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-black dark:text-white p-2 hover:bg-gray-200/50 dark:hover:bg-white/10 rounded"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu dropdown */}
            {isMobileMenuOpen && (
                <ul className="sm:hidden mt-2 space-y-2 px-2">
                    {sections.map((id) => (
                        <li
                            key={id}
                            className={`px-4 py-2 rounded-md transition-all duration-300 ${
                                activeSection === id
                                    ? 'bg-gray-200/60 text-black dark:text-white dark:bg-gray-800/40 font-bold'
                                    : 'text-black dark:text-white font-medium hover:bg-gray-200/60 dark:hover:bg-gray-800/40'
                            }`}
                        >
                            <a
                                href={`#${id}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full capitalize"
                            >
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </FadeInWhenInView>
    );
}

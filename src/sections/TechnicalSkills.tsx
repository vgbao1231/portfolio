import FadeInWhenInView from '@components/FadeInWhenInView';
import { useState } from 'react';
import { icons } from '@assets/icons';

const tabs = [
    'Languages',
    'Frontend',
    'Backend',
    'Database',
    'Dev Tools',
    'Concepts',
];

type Skill = {
    name: string;
    icon?: string;
};

const skillMap: Record<string, Skill[]> = {
    Languages: [
        { name: 'Java', icon: icons.java },
        { name: 'JavaScript', icon: icons.javascript },
        { name: 'TypeScript', icon: icons.typescript },
        { name: 'Python', icon: icons.python },
        { name: 'SQL', icon: icons.sql },
        { name: 'HTML', icon: icons.html },
        { name: 'CSS', icon: icons.css },
    ],
    Frontend: [
        { name: 'React.js', icon: icons.react },
        { name: 'Vite', icon: icons.vite },
        { name: 'Material UI', icon: icons.mui },
        { name: 'Tailwind', icon: icons.tailwind },
        { name: 'Redux Toolkit', icon: icons.redux },
        { name: 'React Hook Form', icon: icons.reacthookform },
        { name: 'TanStack Query', icon: icons.reactquery },
    ],
    Backend: [
        { name: 'Node.js', icon: icons.nodejs },
        { name: 'Express.js', icon: icons.express },
        { name: 'Java Spring Boot', icon: icons.springboot },
    ],
    Database: [
        { name: 'MongoDB', icon: icons.mongodb },
        { name: 'MySQL', icon: icons.mysql },
        { name: 'SQL Server', icon: icons.sqlserver },
    ],
    'Dev Tools': [
        { name: 'Git', icon: icons.git },
        { name: 'GitHub', icon: icons.github },
        { name: 'Postman', icon: icons.postman },
        { name: 'Docker', icon: icons.docker },
        { name: 'VS Code', icon: icons.vscode },
        { name: 'Figma', icon: icons.figma },
    ],
    Concepts: [
        { name: 'REST API' },
        { name: 'JWT Auth' },
        { name: 'Microservices' },
        { name: 'MVC' },
        { name: 'Responsive Design' },
        { name: 'Role-based Authorization' },
    ],
};

export default function TechnicalSkills() {
    const [currentTab, setCurrentTab] = useState('Languages');
    const skills = skillMap[currentTab] || [];

    return (
        <section id="tech" className="px-4 py-12 md:py-24">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
                <FadeInWhenInView
                    as="h2"
                    delay={0}
                    className="text-4xl md:text-5xl font-bold mb-4 dark:text-shadow-lg"
                >
                    Technical Skills
                </FadeInWhenInView>

                <FadeInWhenInView
                    as="p"
                    delay={0.1}
                    className="max-w-xl mx-auto mb-12 text-xl text-gray-700 dark:text-gray-300 dark:text-shadow-lg"
                >
                    My expertise across various technologies and tools
                </FadeInWhenInView>

                <FadeInWhenInView
                    delay={0.2}
                    className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] justify-center gap-4 px-4 py-2 bg-card-light dark:bg-card-dark rounded-xl mx-auto mb-12"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setCurrentTab(tab)}
                            className={`px-4 py-1 rounded-md transition-all ${
                                tab === currentTab
                                    ? 'bg-black/80 text-white border border-gray-400'
                                    : 'text-gray-500 hover:text-black dark:hover:text-white'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </FadeInWhenInView>

                <FadeInWhenInView
                    delay={0.3}
                    className="bg-card-light dark:bg-card-dark p-6 rounded-2xl w-full flex flex-wrap justify-center gap-4"
                >
                    {skills.map(({ name, icon }, idx) => (
                        <FadeInWhenInView
                            key={name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            delay={0.1 + idx * 0.1}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl shadow border border-gray-300 dark:border-gray-700 dark:bg-black dark:text-white hover:bg-white/5 hover:border-white/60 transition-all">
                                {icon && (
                                    <img
                                        src={icon}
                                        alt={name}
                                        className="w-5 h-5"
                                    />
                                )}
                                {name}
                            </div>
                        </FadeInWhenInView>
                    ))}
                </FadeInWhenInView>
            </div>
        </section>
    );
}

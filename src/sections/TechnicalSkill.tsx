import FadeInWhenInView from '@components/FadeInWhenInView';
import { useState } from 'react';

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
        { name: 'Java', icon: '/src/assets/icons/java.svg' },
        { name: 'JavaScript', icon: '/src/assets/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/src/assets/icons/typescript.svg' },
        { name: 'Python', icon: '/src/assets/icons/python.svg' },
        { name: 'SQL', icon: '/src/assets/icons/sql.png' },
        { name: 'HTML', icon: '/src/assets/icons/html5.svg' },
        { name: 'CSS', icon: '/src/assets/icons/css.svg' },
    ],
    Frontend: [
        { name: 'React.js', icon: '/src/assets/icons/react.png' },
        { name: 'Vite', icon: '/src/assets/icons/vite.svg' },
        { name: 'Material UI', icon: '/src/assets/icons/mui.svg' },
        { name: 'Tailwind', icon: '/src/assets/icons/tailwind.svg' },
        { name: 'Redux Toolkit', icon: '/src/assets/icons/redux.svg' },
        {
            name: 'React Hook Form',
            icon: '/src/assets/icons/reacthookform.svg',
        },
        { name: 'TanStack Query', icon: '/src/assets/icons/reactquery.svg' },
    ],
    Backend: [
        { name: 'Node.js', icon: '/src/assets/icons/nodejs.svg' },
        { name: 'Express.js', icon: '/src/assets/icons/express.svg' },
        { name: 'Java Spring Boot', icon: '/src/assets/icons/springboot.svg' },
    ],
    Database: [
        { name: 'MongoDB', icon: '/src/assets/icons/mongodb.png' },
        { name: 'MySQL', icon: '/src/assets/icons/mysql.svg' },
        { name: 'SQL Server', icon: '/src/assets/icons/sql.png' },
    ],
    'Dev Tools': [
        { name: 'Git', icon: '/src/assets/icons/git.svg' },
        { name: 'GitHub', icon: '/src/assets/icons/github.svg' },
        { name: 'Postman', icon: '/src/assets/icons/postman.svg' },
        { name: 'Docker', icon: '/src/assets/icons/docker.svg' },
        { name: 'VS Code', icon: '/src/assets/icons/vscode.svg' },
        { name: 'Figma', icon: '/src/assets/icons/figma.svg' },
    ],
    Concepts: [
        { name: 'REST API' },
        { name: 'JWT Auth' },
        { name: 'Microservices' },
        { name: 'MVC' },
        { name: 'Responsive Design' },
        {
            name: 'Role-based Authorization',
        },
    ],
};

export default function TechnicalSkill() {
    const [currentTab, setCurrentTab] = useState('Languages');
    return (
        <section id="tech" className="px-4 py-12 md:py-24">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
                <FadeInWhenInView delay={0}>
                    <h2 className="text-5xl font-bold mb-4 dark:text-shadow-lg">
                        Technical Skills
                    </h2>
                </FadeInWhenInView>

                <FadeInWhenInView delay={0.1}>
                    <p className="max-w-xl mx-auto mb-12 text-xl text-gray-700 dark:text-gray-300 dark:text-shadow-lg">
                        My expertise across various technologies and tools
                    </p>
                </FadeInWhenInView>

                <FadeInWhenInView delay={0.2}>
                    <div className="flex gap-4 text-sm font-medium px-4 py-2 bg-card-light dark:bg-card-dark rounded-xl w-max mx-auto mb-12">
                        {tabs.map((tab, idx) => (
                            <button
                                key={idx}
                                className={`px-4 py-1 rounded-md transition-all ${
                                    tab === currentTab
                                        ? 'bg-black/80 text-white border border-gray-400'
                                        : 'text-gray-400 hover:text-black dark:hover:text-white'
                                }`}
                                onClick={() => setCurrentTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </FadeInWhenInView>

                <FadeInWhenInView delay={0.3}>
                    <div
                        key={currentTab}
                        className="bg-card-light dark:bg-card-dark p-6 rounded-2xl w-full flex flex-wrap justify-center gap-4"
                    >
                        {skillMap[currentTab].map(({ name, icon }, idx) => (
                            <FadeInWhenInView
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                delay={0.1 + idx * 0.1}
                            >
                                <div className="flex font-medium items-center gap-2 px-4 py-2 dark:bg-black rounded-xl dark:text-white text-sm shadow hover:bg-white/5 border-1 border-gray-300 dark:border-gray-700 hover:border-white/60 transition-all">
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
                    </div>
                </FadeInWhenInView>
            </div>
        </section>
    );
}

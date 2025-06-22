import { Github } from 'lucide-react';
import type React from 'react';

type ProjectCardProps = {
    img: string;
    name: string;
    desc: string;
    techStack: string[];
    features: string[];
    githubUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    img,
    name,
    desc,
    techStack,
    features,
    githubUrl,
}) => {
    return (
        <div className="gap-4 rounded-xl py-6 shadow-sm h-full flex flex-col overflow-hidden border-2 transition-all border-gray-200 dark:border-gray-700 hover:border-black/60 dark:hover:border-white/60 bg-gray-50 dark:bg-card-dark">
            {/* Project */}
            <div className="aspect-[2/1] overflow-hidden">
                <img
                    src={img}
                    alt="project-image"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                />
            </div>

            {/* Project Description */}
            <div className="px-6">
                <h2 className="text-xl font-bold text-center mb-2">{name}</h2>
                <p className="text-center text-gray-400">{desc}</p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 px-6">
                {techStack.map((tech: string, idx: number) => (
                    <span
                        key={idx}
                        className="bg-gray-200 font-medium dark:bg-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Features */}
            <ul className="text-sm text-gray-400 space-y-2 mb-2 list-inside list-disc text-left px-6 flex-1">
                {features.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex justify-between items-center px-6">
                <button className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    View Details →
                </button>
                <a
                    className="p-2 rounded hover:bg-bgcolor-light/5"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={githubUrl}
                >
                    <Github size={20} />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;

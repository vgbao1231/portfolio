import FadeInWhenInView from '@components/FadeInWhenInView';
import ProjectCard from '@components/ProjectCard';
import petcare from '@assets/pet-care.png';
import petcare1 from '@assets/pet-care-1.png';
import petcare2 from '@assets/pet-care-2.png';
import petcare3 from '@assets/pet-care-3.png';
import homeWorkout from '@assets/home-workout.png';
import homeWorkout1 from '@assets/home-workout-1.png';
import homeWorkout2 from '@assets/home-workout-2.png';
import homeWorkout3 from '@assets/home-workout-3.png';
import motelManagement from '@assets/motel-management.png';
import motelManagement1 from '@assets/motel-management-1.png';
import motelManagement2 from '@assets/motel-management-2.png';
import motelManagement3 from '@assets/motel-management-3.png';

const projects = [
    {
        images: [petcare, petcare1, petcare2, petcare3],
        name: 'PetCare',
        desc: 'Responsive web app for pet clinics supports appointment booking, product ordering, pet management.',
        techStack: ['React.js', 'Vite', 'Material UI', 'TanStack Query', '+4'],
        features: [
            'Designed a fully responsive UI supporting both dark and light themes using Material UI',
            'Integrated TanStack Query and React Hook Form for optimal API state and form management',
        ],
        githubUrl: 'https://github.com/vgbao1231/petcare',
    },
    {
        images: [homeWorkout, homeWorkout1, homeWorkout2, homeWorkout3],
        name: 'Home Workout',
        desc: 'AI-powered workout app with personalized plans, activity tracking, body metrics, and admin management',
        techStack: ['React.js', 'Redux', 'React Hook Form'],
        features: [
            'Implemented AI-generated workout plan viewer and progress tracker',
            'Built dynamic form handling and state sync using Redux + React Hook Form',
        ],
        githubUrl: 'https://github.com/vgbao1231/Home_Workout',
    },
    {
        images: [
            motelManagement,
            motelManagement1,
            motelManagement2,
            motelManagement3,
        ],
        name: 'Motel Management',
        desc: 'A system for managing rooms, tenants, utility billing, services, and user requests. Tenants can view bills, roommates, register services.',
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'Java Spring Boot',
            'SQL Server',
        ],
        features: [
            'Developed both frontend and backend for tenant service management',
            'Handled user requests and bill tracking using Java Spring Boot and SQL Server',
        ],
        githubUrl: 'https://github.com/vgbao1231/QLNT_FE',
    },
];

export default function Project() {
    return (
        <section
            id="project"
            className="py-20 px-8 text-center bg-gray-100/50 dark:bg-card-dark/30"
        >
            <FadeInWhenInView delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold mb-1 dark:text-shadow-lg">
                    Featured Project
                </h2>
            </FadeInWhenInView>

            <FadeInWhenInView delay={0.2}>
                <p className="max-w-xl mx-auto mb-4 text-xl text-gray-700 dark:text-gray-300 dark:text-shadow-lg">
                    Check out some of my recent work
                </p>
            </FadeInWhenInView>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
                {projects.map((p, idx) => (
                    <FadeInWhenInView key={p.name} delay={idx * 0.1}>
                        <ProjectCard {...p} />
                    </FadeInWhenInView>
                ))}
            </div>
        </section>
    );
}

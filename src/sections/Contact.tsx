import FadeInWhenInView from '@components/FadeInWhenInView';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';

const contactLinks = [
    {
        label: 'GitHub',
        value: 'https://github.com/vgbao1231',
        icon: <Github size={20} />,
        href: 'https://github.com/vgbao1231',
    },
    {
        label: 'LinkedIn',
        value: 'https://linkedin.com/in/baovo2609',
        icon: <Linkedin size={20} />,
        href: 'https://linkedin.com/in/baovo2609',
    },
    {
        label: 'Email',
        value: 'vgbao1231@gmail.com',
        icon: <Mail size={20} />,
        href: 'mailto:vgbao1231@gmail.com',
    },
    {
        label: 'Phone',
        value: '+84 384 026 903',
        icon: <Phone size={20} />,
        href: 'tel:+84384026903',
    },
];

export default function Contact() {
    return (
        <section id="contact" className="px-4 py-12 md:py-24">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <FadeInWhenInView>
                    <h2 className="text-5xl font-bold mb-1 dark:text-shadow-lg">
                        Get In Touch
                    </h2>
                </FadeInWhenInView>

                <FadeInWhenInView delay={0.1}>
                    <p className="mx-auto mb-4 text-xl text-gray-700 dark:text-gray-300 dark:text-shadow-lg">
                        {`Have a project in mind or want to collaborate? I'd love to hear from you!`}
                    </p>
                </FadeInWhenInView>

                <div className="flex flex-col lg:flex-row justify-center items-start gap-10 text-left mt-8">
                    {/* Form */}
                    <FadeInWhenInView delay={0.2}>
                        <div className="p-6 rounded-2xl dark:bg-card-dark border border-gray-300 dark:border-gray-700 w-full">
                            <h6 className="font-semibold text-xl mb-1">
                                Send me a message
                            </h6>
                            <p className="text-gray-400">
                                {`Fill out the form below and I'll get back to you
                                as soon as possible.`}
                            </p>
                            <form className="flex flex-col gap-4 mt-6">
                                {['name', 'email', 'subject'].map((id) => (
                                    <div key={id}>
                                        <label
                                            htmlFor={id}
                                            className="font-semibold pl-1 capitalize"
                                        >
                                            {id}
                                        </label>
                                        <input
                                            id={id}
                                            type="text"
                                            className="p-2 mt-1 border outline-0 border-gray-300 dark:border-gray-700 rounded-md w-full dark:bg-card-dark dark:text-white focus-within:ring-[3px] ring-gray-200 dark:ring-gray-700 transition-all"
                                            placeholder={
                                                id === 'name'
                                                    ? 'Nguyen Van A'
                                                    : id === 'email'
                                                      ? 'example@domain.com'
                                                      : 'Project Inquiry'
                                            }
                                        />
                                    </div>
                                ))}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="font-semibold pl-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="p-2 mt-1 border outline-0 border-gray-300 dark:border-gray-700 rounded-md w-full dark:bg-card-dark dark:text-white focus-within:ring-[3px] ring-gray-200 dark:ring-gray-700 transition-all placeholder:text-gray-400"
                                        placeholder="I'd like to discuss a project opportunity..."
                                    />
                                </div>
                                <div className="flex items-center justify-center gap-4 bg-bgcolor-dark dark:bg-bgcolor-light w-full text-white dark:text-black font-semibold p-2 rounded">
                                    <button>Send Message</button>
                                    <Send size={18} />
                                </div>
                            </form>
                        </div>
                    </FadeInWhenInView>

                    {/* Contact links */}
                    <FadeInWhenInView delay={0.3}>
                        <div className="p-6 rounded-2xl dark:bg-card-dark border border-gray-300 dark:border-gray-700 w-full">
                            <h6 className="font-semibold text-xl mb-1">
                                Connect with me
                            </h6>
                            <p className="text-gray-400">
                                You can also reach out to me directly through
                                these channels
                            </p>
                            <div className="flex flex-col gap-4 my-6">
                                {contactLinks.map((link, idx) => (
                                    <FadeInWhenInView
                                        key={idx}
                                        delay={0.4 + idx * 0.1}
                                    >
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all gap-3"
                                        >
                                            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                                                {link.icon}
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-medium">
                                                    {link.label}
                                                </span>
                                                <p className="text-gray-400 text-sm break-all">
                                                    {link.value}
                                                </p>
                                            </div>
                                        </a>
                                    </FadeInWhenInView>
                                ))}
                            </div>
                            <span className="font-semibold text-lg">
                                Current Location
                            </span>
                            <p className="text-gray-400">
                                Ho Chi Minh, Viet Nam
                            </p>
                        </div>
                    </FadeInWhenInView>
                </div>
            </div>
        </section>
    );
}

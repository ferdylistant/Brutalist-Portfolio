import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "AI System Platform",
            desc: "A Laravel-based AI integration platform with real-time socket communication.",
        },
        {
            title: "Marsmolys Music Collective",
            desc: "An experimental music project that blends chaos, humanity, and self-expression.",
        },
        {
            title: "Visual Brutalism Portfolio",
            desc: "This very site — built with React, Tailwind, and Framer Motion, merging design and rebellion.",
        },
    ];

    return (
        <section
            id="projects"
            className="relative min-h-screen bg-brutal-white text-brutal-black flex flex-col items-center py-24 px-8 overflow-hidden"
        >
            {/* Background shapes */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-brutal-blue rotate-12 opacity-30 mix-blend-multiply"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-brutal-red -rotate-6 opacity-25 mix-blend-multiply"></div>

            {/* Title */}
            <motion.h2
                initial={{ y: 50, opacity: 0, rotate: -2 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-7xl font-extrabold mb-16 border-b-[8px] border-brutal-black px-6 py-2 bg-brutal-yellow skew-y-1 inline-block"
            >
                PROJECTS
            </motion.h2>

            {/* Project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        className="relative p-6 border-[6px] border-brutal-black bg-brutal-white
                                   shadow-[12px_12px_0_#000] hover:shadow-[4px_4px_0_#000]
                                   transition-all duration-200 ease-out transform
                                   hover:translate-x-[4px] hover:translate-y-[4px] overflow-hidden"
                    >
                        {/* Overlay warna kontras saat hover */}
                        <div className="absolute inset-0 bg-brutal-red opacity-0 hover:opacity-20 transition-opacity duration-300 mix-blend-multiply pointer-events-none"></div>

                        <h3 className="text-2xl font-extrabold mb-3 text-brutal-blue">{p.title}</h3>
                        <p className="text-lg">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

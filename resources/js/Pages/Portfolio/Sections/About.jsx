import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex flex-col justify-center items-center bg-brutal-white text-brutal-black  px-8 py-24 overflow-hidden"
        >
            {/* Background accent */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brutal-blue rotate-12 opacity-30 mix-blend-multiply"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-brutal-red -rotate-6 opacity-25 mix-blend-multiply"></div>

            {/* Title */}
            <motion.h2
                initial={{ rotate: -3, y: 50, opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-7xl font-extrabold mb-12 border-b-[8px] border-brutal-black px-6 py-2 bg-brutal-yellow skew-y-1 inline-block"
            >
                WHO <span className="text-brutal-red">THE HELL</span> AM I?
            </motion.h2>

            {/* Description */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-4xl text-2xl leading-relaxed text-left md:text-center font-medium space-y-6"
            >
                <p>
                    I’m <span className="font-black text-brutal-black bg-brutal-yellow px-2">FERDYAWAN LISTANTO</span> —
                    a <span className="text-brutal-blue font-bold">developer</span>, <span className="text-brutal-red font-bold">musician</span>,
                    and <span className="underline decoration-[6px] decoration-brutal-black underline-offset-4">noise enthusiast</span> from Yogyakarta.
                </p>

                <p className="text-brutal-black">
                    My work <span className="bg-brutal-red text-brutal-white px-1 font-bold">breaks patterns</span>,
                    bends rules, and celebrates imperfection.
                    I design systems that shout, glitch, and move — interfaces that <span className="italic">breathe chaos</span>.
                </p>

                <p className="uppercase font-extrabold text-3xl tracking-tight">
                    <span className="bg-brutal-blue text-brutal-white px-3 py-1">BRUTALITY</span> ×{" "}
                    <span className="bg-brutal-red text-brutal-white px-3 py-1">EXPRESSION</span> ={" "}
                    <span className="bg-brutal-black text-brutal-yellow px-3 py-1">ME</span>
                </p>
            </motion.div>
        </section>
    );
}

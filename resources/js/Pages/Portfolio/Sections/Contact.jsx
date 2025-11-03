import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        // Material shapes kecil ikut mouse
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            document.querySelectorAll(".material-layer").forEach((layer) => {
                const speed = parseFloat(layer.dataset.speed) || 20;
                layer.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${x * speed * 5}deg)`;
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const shapes = ["▲", "●", "■", "★", "♪", "⛶"];

    return (
        <section
            id="contact"
            className="relative min-h-screen flex flex-col justify-start items-start px-12 py-32 bg-brutal-black text-brutal-white"
            style={{ gap: "3rem" }}
        >
            {/* Background shapes besar */}
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-brutal-blue rotate-12 opacity-30 mix-blend-multiply"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brutal-red -rotate-6 opacity-25 mix-blend-multiply"></div>

            {/* Material shapes kecil interaktif */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="material-layer absolute text-4xl md:text-5xl opacity-40 pointer-events-none"
                    data-speed={(i + 1) * 12}
                    style={{
                        top: `${Math.random() * 90}%`,
                        left: `${Math.random() * 90}%`,
                        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    }}
                >
                    {shapes[Math.floor(Math.random() * shapes.length)]}
                </div>
            ))}

            {/* Title */}
            <motion.h2
                initial={{ x: -100, rotate: -10, opacity: 0 }}
                whileInView={{ x: 0, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 10 }}
                className="text-[4.5rem] font-extrabold border-[8px] border-brutal-red px-4 py-2"
                style={{ transformOrigin: "left" }}
            >
                LET’S <span className="text-brutal-yellow">CONNECT</span>
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ y: 50, skewY: 5, opacity: 0 }}
                whileInView={{ y: 0, skewY: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-3xl text-2xl leading-snug"
            >
                Whether it’s about{" "}
                <span className="text-brutal-red font-black underline decoration-wavy">music</span>,{" "}
                <span className="text-brutal-blue font-black underline decoration-dashed">code</span>, or{" "}
                <span className="text-brutal-yellow font-black underline decoration-double">collaboration</span> —
                reach out and <span className="bg-brutal-red text-brutal-black px-1">shake the system</span>.
            </motion.p>

            {/* CTA Button */}
            <motion.a
                initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 150 }}
                href="mailto:ferdylucker@gmail.com"
                className="text-2xl px-10 py-6 border-[6px] border-brutal-white bg-brutal-red text-brutal-white font-bold"
                style={{ mixBlendMode: "difference" }}
            >
                SAY HELLO
            </motion.a>
        </section>
    );
}

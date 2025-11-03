import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        // Glitch transform acak ringan tiap 500ms
        const glitchInterval = setInterval(() => {
            document.querySelectorAll(".glitch-layer").forEach((layer) => {
                const randX = (Math.random() - 0.5) * 12;
                const randY = (Math.random() - 0.5) * 12;
                const randRot = (Math.random() - 0.5) * 8;
                const randSkew = (Math.random() - 0.5) * 4;
                layer.style.transform = `translate(${randX}px, ${randY}px) rotate(${randRot}deg) skew(${randSkew}deg)`;
            });
        }, 500);

        // Material/icon kecil ikut mouse
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            document.querySelectorAll(".material-layer").forEach((layer) => {
                const speed = parseFloat(layer.dataset.speed) || 25;
                layer.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${x * speed * 5}deg)`;
            });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            clearInterval(glitchInterval);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const shapes = ["▲", "●", "■", "★", "♪", "⛶"];

    return (
        <section className="h-screen relative overflow-hidden bg-brutal-black text-brutal-white flex flex-col items-center justify-center p-12">
            {/* Background neon blocks */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-24 h-24 rounded-sm pointer-events-none"
                    data-speed={(i + 1) * 15}
                    style={{
                        top: `${Math.random() * 90}%`,
                        left: `${Math.random() * 90}%`,
                        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                        opacity: 0.5,
                        mixBlendMode: "screen",
                        transition: "all 0.6s ease-in-out",
                    }}
                />
            ))}

            {/* Noise & scanline overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full bg-[repeating-linear-gradient(0deg,#0000_0px,#0001 1px,#0000 2px)] opacity-30 mix-blend-multiply animate-pulse"></div>
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
            </div>

            {/* Hero title with glitch */}
            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative text-[10vw] md:text-[8rem] font-extrabold mb-6 tracking-tight leading-none"
            >
                FERDYAWAN <br />
                LISTANTO
                <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full h-full text-brutal-red glitch-layer"
                >
                    FERDYAWAN LISTANTO
                </span>
                <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full h-full text-brutal-blue glitch-layer"
                >
                    FERDYAWAN LISTANTO
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-5xl uppercase font-extrabold text-brutal-yellow tracking-tight mb-6"
            >
                Expression Through Chaos
            </motion.h2>

            {/* CTA */}
            <motion.a
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 150 }}
                href="#projects"
                className="text-2xl px-10 py-6 border-[6px] border-brutal-white bg-brutal-red text-brutal-white font-bold"
                style={{ mixBlendMode: "difference" }}
            >
                SEE MY WORK
            </motion.a>

            {/* Material shapes kecil interaktif */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="material-layer absolute text-3xl md:text-4xl opacity-40 pointer-events-none"
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
        </section>
    );
}

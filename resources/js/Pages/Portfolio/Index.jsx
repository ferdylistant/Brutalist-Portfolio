import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import BrutalCursor from '@/Components/BrutalCursor';


export default function Portfolio() {
    return (
        <div className="bg-brutal-white text-brutal-black font-brutal relative noise-bg">
            <BrutalCursor />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

import { useEffect, useRef } from "react";

export default function BrutalCursor() {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = dotRef.current;

        if (!cursor || !dot) return;

        const moveCursor = (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        const handleHover = (e) => {
            const target = e.target;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.getAttribute("role") === "button"
            ) {
                dot.classList.add("cursor-hover");
            }
        };

        const handleLeave = (e) => {
            const target = e.target;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.getAttribute("role") === "button"
            ) {
                dot.classList.remove("cursor-hover");
            }
        };

        // const glitchInterval = setInterval(() => {
        //     cursor.classList.toggle("cursor-glitch");
        // }, 300);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHover);
        window.addEventListener("mouseout", handleLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHover);
            window.removeEventListener("mouseout", handleLeave);
            clearInterval(glitchInterval);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="brutal-cursor fixed top-0 left-0 pointer-events-none mix-blend-difference z-[9999]"
        >
            <div ref={dotRef} className="cursor-dot"></div>
        </div>
    );
}

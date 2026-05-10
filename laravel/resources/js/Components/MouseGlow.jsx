import { useEffect, useState } from "react";

export default function MouseGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none -z-10"
            style={{
                background: `
                    radial-gradient(
                        1200px at ${position.x}px ${position.y}px,
                        #212a34 0%,
                        transparent 70%
                    )
                `,
                filter: "blur(80px)",
            }}
        />
    );
}
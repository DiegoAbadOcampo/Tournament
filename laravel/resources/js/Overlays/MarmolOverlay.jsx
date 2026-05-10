import marmol from "@/assets/textures/marmol-texture.png";

export default function MarmolOverlay() {
    return (
        <div
            className="absolute inset-0 pointer-events-none z-0 opacity-[0.1]"
            style={{
                backgroundImage: `url(${marmol})`,
                backgroundRepeat: "repeat",
                backgroundSize: "1000px",
            }}
        />
    );
}
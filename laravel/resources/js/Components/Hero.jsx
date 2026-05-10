import heroBg from "@/assets/img/hero-background.webp";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* CONTENIDO IZQUIERDA */}
            <div className="relative z-0 w-full md:w-1/2 px-10">
                <h1 className="text-5xl md:text-7xl">
                    Tu habilidad merece ser recordada
                </h1>

                <p className="mt-6 text-gray-300 max-w-md text-l">
                    En <span className="text-[#bfa36e] font-medium">Arkleon</span>, elevamos el espíritu competitivo amateur con producción de élite. Deja de jugar por la victoria; empieza a luchar por tu legado.
                </p>

                <div className="mt-10 flex gap-4">
                    <button className="px-12 py-2 bg-[#bfa36e] text-[#0d0e12] font-medium hover:bg-[#96794a] rounded-full transition-colors duration-300 ease-out">
                        Participar
                    </button>

                    <button className="px-12 py-2 border border-white/30 text-[#f1f3f5] font-medium hover:bg-[#f1f3f5] hover:text-[#0d0e12] rounded-full hover:border-white/40 transition-colors duration-300 ease-out">
                        Ver torneos
                    </button>
                </div> 
            </div>

            {/* IMAGEN DERECHA */}
            <div className="absolute right-0 top-0 h-full w-full md:w-1/2 flex items-stretch justify-end -z-20">
                <img
                    src={heroBg}
                    alt="Hero"
                    className="h-full w-full object-cover object-right"
                />
            </div>

        </section>
    );
}
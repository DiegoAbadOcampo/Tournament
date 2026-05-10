import TournamentLayout from "@/Layouts/TournamentLayout";
import Hero from "@/Components/Hero";
import MouseGlow from "@/Components/MouseGlow";

export default function Home() {
    return (
        <div className="">
            <MouseGlow />

                <section> 
                    <Hero />   
                </section>

            {/* QUIENES SOMOS */}
                <section>
                    <h2 className="text-2xl font-bold z-0">Quiénes somos</h2>
                    <p>Somos una comunidad dedicada a esports de Brawl Stars.</p>
                </section>
            

            {/* COMO COMPETIR */}
            <section>
                <h2 className="text-2xl font-bold">Cómo competir</h2>
                <p>Forma tu equipo y participa en torneos semanales.</p>
            </section>

            {/* NOTICIAS */}
            <section>
                <h2 className="text-2xl font-bold">Noticias</h2>
                <p>Últimas actualizaciones del torneo.</p>
            </section>

            {/* FAQ */}
            <section>
                <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
                <p>Resolvemos tus dudas.</p>
            </section>

            {/* CONTACTO */}
            <section>
                <h2 className="text-2xl font-bold">Contacto</h2>
                <p>Contáctanos para soporte o colaboración.</p>
            </section>
            

        </div>
    );
}

Home.layout = page => <TournamentLayout>{page}</TournamentLayout>;
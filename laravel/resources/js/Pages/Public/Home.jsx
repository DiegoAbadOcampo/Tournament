import TournamentLayout from "@/Layouts/TournamentLayout";

export default function Home() {
    return (
        <div className="space-y-24 p-10">

            {/* HERO */}
            <section className="text-center">
                <h1 className="text-4xl font-bold">
                    Brawl Stars Tournament
                </h1>
                <p>El torneo competitivo definitivo</p>
            </section>

            {/* QUIENES SOMOS */}
            <section>
                <h2 className="text-2xl font-bold">Quiénes somos</h2>
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
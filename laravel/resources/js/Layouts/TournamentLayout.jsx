import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import CookieConsent from "@/Components/CookieConsent";
import MarmolOverlay from "@/Overlays/MarmolOverlay";
import Hero from "@/Components/Hero";

export default function TournamentLayout({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0d0e12] text-white">

            {/* Fondo dinámico */}
            <div className="absolute inset-0 z-0">
                <MarmolOverlay />
            </div>


            {/* Contenido */}
            <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar />

                <main className="flex-1">
                   
                    {children}
                </main>
                <Footer />
                <CookieConsent />
            </div>

        </div>
    );
}
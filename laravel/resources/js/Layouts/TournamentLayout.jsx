import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import CookieConsent from "@/Components/CookieConsent";

export default function TournamentLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
            <CookieConsent />
        </div>
    );
}
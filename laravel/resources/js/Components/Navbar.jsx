import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <nav className="flex justify-between p-4 border-b">
            <div className="font-bold">
                Brawl Tournament
            </div>

            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>
        </nav>
    );
}
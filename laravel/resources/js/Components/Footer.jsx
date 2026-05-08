export default function Footer() {
    return (
        <footer className="p-6 border-t text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Brawl Tournament. All rights reserved.
        </footer>
    );
}
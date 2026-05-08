import { useState } from "react";

export default function CookieConsent() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-between">
            <p>This site uses cookies to improve experience.</p>

            <button
                className="bg-white text-black px-3 py-1"
                onClick={() => setVisible(false)}
            >
                Accept
            </button>
        </div>
    );
}
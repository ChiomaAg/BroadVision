import { useState } from "react";

export default function WhatsAppMessageBox() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const phone = "17806678087"; // replace with real number (no +, no spaces)

    const handleSend = () => {
        if (!name || !message) return;

        const text = `Hi Broadvision, my name is ${name}. ${message}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
    };

    return (
        <div style={{ maxWidth: "500px" }} className="text-black">
            <strong className=" block text-xl text-black-900 mb-4">Send Us a Message 💙</strong>

            <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
            />

            <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
            
            />

            <button
                onClick={handleSend}
                style={{
                    backgroundColor: "#25D366",
                    color: "white",
                    padding: "12px 18px",
                    borderRadius: "8px",
                    border: "none",
                    fontWeight: "600",
                    cursor: "pointer"
                }}
            >
                Send on WhatsApp
            </button>
        </div>
    );
}

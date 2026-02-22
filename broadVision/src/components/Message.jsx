import { useState } from "react";

export default function WhatsAppMessageBox() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const phone = "23407055570730";

    const handleSend = () => {
        if (!name || !message) return;

        const text = `Hi Broadvision, my name is ${name}. ${message}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
    };

    return (
        <div id="contact" className="bg-white py-24">
            <div className="flex justify-center px-6">
                <div className="bg-[#FFF8DC] rounded-2xl shadow-xl p-10 w-full max-w-lg text-black border border-black">

                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        Send Us a Message 💙
                    </h3>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-black bg-white rounded-xl px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-[#1434A4]"
                        />

                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            className="w-full border border-black bg-white rounded-xl px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-[#1434A4]"
                        />

                        <button
                            onClick={handleSend}
                            className="w-full bg-[#25D366] text-white py-3 rounded-xl 
                       font-semibold hover:opacity-90 transition"
                        >
                            Send on WhatsApp
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

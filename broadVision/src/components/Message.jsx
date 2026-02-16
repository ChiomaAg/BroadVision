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
    <div style={{ maxWidth: "500px" }}>
      <h3>Send Us a Message</h3>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
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

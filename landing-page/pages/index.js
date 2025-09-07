import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ অর্ডার সফলভাবে প্লেস হয়েছে!");
    setForm({ name: "", phone: "", address: "" });
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "50px" }}>
      <h1>Welcome to My Landing Page 🚀</h1>
      <p>এখানে আপনার প্রোডাক্ট বা সার্ভিসের তথ্য লিখুন।</p>

      <h2 style={{ marginTop: "40px" }}>অর্ডার করুন</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <input
          type="text"
          placeholder="নাম"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <input
          type="tel"
          placeholder="ফোন নাম্বার"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <textarea
          placeholder="ঠিকানা"
          required
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <button type="submit" style={{
          padding: "12px 24px",
          background: "#0070f3",
          color: "#fff",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          অর্ডার করুন
        </button>
      </form>
    </div>
  );
}const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    alert("✅ অর্ডার সফলভাবে প্লেস হয়েছে!");
    setForm({ name: "", phone: "", address: "" });
  }
};

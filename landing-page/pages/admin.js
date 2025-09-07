import { useEffect, useState } from "react";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>📦 Admin Panel - Orders</h1>
      {orders.length === 0 ? (
        <p>কোনো অর্ডার নেই</p>
      ) : (
        <ul>
          {orders.map((o, i) => (
            <li key={i}>
              <strong>{o.name}</strong> 📞 {o.phone} 🏠 {o.address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
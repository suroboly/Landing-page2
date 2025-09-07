let orders = []; // আপাতত মেমোরিতে রাখব (Database লাগলে পরে কানেক্ট করবেন)

export default function handler(req, res) {
  if (req.method === "POST") {
    const order = req.body;
    orders.push(order);
    return res.status(201).json({ message: "Order placed!", order });
  }
  if (req.method === "GET") {
    return res.status(200).json(orders);
  }
  res.status(405).end(); // Method not allowed
}

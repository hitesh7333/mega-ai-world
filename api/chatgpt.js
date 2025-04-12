// File: /api/chatgpt.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { message } = req.body;

  // Dummy response (replace with real OpenAI logic if needed)
  const reply = `You said: "${message}"`;

  res.status(200).json({ reply });
}

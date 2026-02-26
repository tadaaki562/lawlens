import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT } from '../../app/chatbot';

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const contents = messages.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { temperature: 0.2, maxOutputTokens: 1024 },
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      const message = data?.error?.message || 'Gemini API error';
      return NextResponse.json({ error: message }, { status: res.status });
    }

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'No response received.';

    return NextResponse.json({ text });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
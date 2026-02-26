'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { LAWS, FAQS, detectLaw, callGemini } from './chatbot';

import ReactMarkdown from 'react-markdown';

function MessageBubble({ msg, onFeedback }) {
  const isAI = msg.role === 'assistant';

  return (
    <div className={`flex gap-3 ${isAI ? '' : 'flex-row-reverse'}`}>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1"
        style={{ backgroundColor: isAI ? '#735148' : '#313236' }}
      >
        {isAI ? 'AI' : 'You'}
      </div>

      <div className={`max-w-[75%] flex flex-col gap-1 ${isAI ? 'items-start' : 'items-end'}`}>
        <div
          className="p-4 text-sm leading-relaxed"
          style={{
            backgroundColor: isAI ? '#f9f6f3' : '#313236',
            color: isAI ? '#313236' : '#e3d3bc',
            borderRadius: isAI ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
          }}
        >
          {isAI ? (
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc list-outside pl-5 my-3 space-y-2">{children}</ul>,
                        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              }}
            >
              {msg.content}
            </ReactMarkdown>
          ) : (
            <p>{msg.content}</p>
          )}
        </div>

        {isAI && !msg.isFollowUp && (
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs" style={{ color: '#999' }}>Was this helpful?</span>
            <button
              onClick={() => !msg.feedback && onFeedback(msg.id, 'up')}
              disabled={!!msg.feedback}
              className="text-sm transition hover:scale-110 disabled:opacity-40"
            >
              {msg.feedback === 'up' ? '✅' : '👍'}
            </button>
            <button
              onClick={() => !msg.feedback && onFeedback(msg.id, 'down')}
              disabled={!!msg.feedback}
              className="text-sm transition hover:scale-110 disabled:opacity-40"
            >
              {msg.feedback === 'down' ? '❌' : '👎'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AppPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rightPanelWidth, setRightPanelWidth] = useState(340);
  const [isResizing, setIsResizing] = useState(false);
  const [activeLaw, setActiveLaw] = useState(null);
  const [awaitingClarification, setAwaitingClarification] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);
  check();
  window.addEventListener('resize', check);
  return () => window.removeEventListener('resize', check);
}, []);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || isLoading) return;

    const userMsg = { id: Date.now(), role: 'user', content: userText };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setIsLoading(true);
    setAwaitingClarification(false);

    const detectedFromUser = detectLaw(userText);
    setActiveLaw(detectedFromUser);

    try {
      const history = updated.map((m) => ({ role: m.role, content: m.content }));
      const aiText = await callGemini(history);
      const detectedFromAI = detectLaw(aiText);
      if (detectedFromAI) setActiveLaw(detectedFromAI);
      else if (!detectedFromUser) setActiveLaw(null);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', content: aiText, feedback: null },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', content: `⚠️ Error: ${err.message}`, feedback: null },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = async (id, type) => {
  setMessages((prev) =>
    prev.map((m) => (m.id === id ? { ...m, feedback: type } : m))
  );

  if (type === 'down') {
    setIsLoading(true);
    try {
      const clarifyPrompt = [
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        {
          role: 'user',
          content: 'The user was not satisfied with your last answer. Acknowledge that briefly and ask them one short, specific question to help you give a better answer. Keep it conversational and warm, under 2 sentences.',
        },
      ];
      const aiText = await callGemini(clarifyPrompt);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: 'assistant',
          feedback: null,
          isFollowUp: true,
          content: aiText,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: 'assistant',
          feedback: null,
          isFollowUp: true,
          content: `I'm sorry that wasn't helpful. Could you tell me more about what you're trying to find out?`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }
};

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);
  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const container = document.querySelector('.main-content-container');
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const newWidth = containerRect.right - e.clientX;
    const minWidth = 250;
    const maxWidth = containerRect.width * 0.7;
    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setRightPanelWidth(newWidth);
    }
  };

  const currentLaw = activeLaw ? LAWS[activeLaw] : null;
  const isEmpty = messages.length === 0;

  return (
    <div
      className="flex h-screen"
      style={{ backgroundColor: '#f0f0f0' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex-col flex-shrink-0 hidden md:flex`}
        style={{ backgroundColor: '#313236', color: '#e3d3bc', borderRight: '1px solid #735148' }}
      >
        {/* Logo / Home Button */}
        <Link
          href="/"
          className="p-4 hover:opacity-80 transition text-2xl font-bold text-center"
          style={{ borderBottom: '1px solid #735148' }}
        >
          {isSidebarOpen ? 'LawLens' : 'L'}
        </Link>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-3">
          <div
            className="p-3 rounded cursor-pointer hover:opacity-80 transition text-center"
            style={{ backgroundColor: '#735148' }}
            onClick={() => { setMessages([]); setActiveLaw(null); }}
          >
            {isSidebarOpen ? 'New Chat' : '+'}
          </div>

          <div className="mt-6">
            {isSidebarOpen && (
              <p style={{ color: '#735148', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                RECENT CHATS
              </p>
            )}
            <div className="space-y-2">
              {['Chat 1', 'Chat 2', 'Chat 3'].map((chat) => (
                <div
                  key={chat}
                  className="p-2 rounded cursor-pointer hover:opacity-80 transition text-sm truncate"
                  style={{ backgroundColor: 'rgba(115, 81, 72, 0.2)' }}
                >
                  {isSidebarOpen ? chat : '•'}
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 space-y-3 border-t" style={{ borderColor: '#735148' }}>
          <Link
            href="/login"
            className="block p-2 rounded hover:opacity-80 transition text-center text-sm"
            style={{ backgroundColor: '#735148' }}
          >
            {isSidebarOpen ? 'Login' : '👤'}
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full p-2 rounded hover:opacity-80 transition"
            style={{ backgroundColor: 'rgba(115, 81, 72, 0.2)' }}
          >
            {isSidebarOpen ? '←' : '→'}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <nav
          className="h-16 flex items-center justify-between px-6 shadow-sm flex-shrink-0"
          style={{ backgroundColor: '#e3d3bc', borderBottom: '1px solid #735148' }}
        >
          <h1 className="text-2xl font-bold" style={{ color: '#313236' }}>
            LawLens App
          </h1>
          <div className="flex items-center gap-4">
            <span style={{ color: '#313236' }}>Welcome, User</span>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: '#735148' }}
            >
              U
            </div>
          </div>
        </nav>

        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden main-content-container">

          {/* Chat Area */}
          <div
            className="flex-1 flex flex-col overflow-hidden min-w-0"
            style={{ backgroundColor: '#ffffff' }}
          >
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {isEmpty && (
                <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                  <div>
                    <p className="text-lg font-semibold mb-1" style={{ color: '#313236' }}>
                      Ask a Philippine Commercial Law question
                    </p>
                    <p className="text-sm" style={{ color: '#999' }}>
                      Or try one of these:
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full max-w-md">
                    {FAQS.map((faq) => (
                      <button
                        key={faq}
                        onClick={() => sendMessage(faq)}
                        className="text-left px-4 py-3 rounded-lg text-sm border transition hover:opacity-80"
                        style={{ backgroundColor: '#f9f6f3', borderColor: '#e0d5cc', color: '#313236' }}
                      >
                        {faq}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <MessageBubble key={msg.id} msg={msg} onFeedback={handleFeedback} />
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: '#735148' }}
                  >
                    AI
                  </div>
                  <div
                    className="px-4 py-3 text-sm"
                    style={{ backgroundColor: '#f9f6f3', color: '#999', borderRadius: '4px 16px 16px 16px' }}
                  >
                    Thinking...
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Prompt Input Bar */}
            <div className="p-4 border-t flex-shrink-0" style={{ borderColor: '#e0e0e0' }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a legal question..."
                  className="flex-1 px-4 py-3 rounded border outline-none transition"
                  style={{ borderColor: '#735148', backgroundColor: '#fafafa', color: '#313236' }}
                  onFocus={(e) => (e.target.style.borderColor = '#313236')}
                  onBlur={(e) => (e.target.style.borderColor = '#735148')}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={isLoading}
                  className="px-6 py-3 rounded font-medium transition hover:scale-105 disabled:opacity-50"
                  style={{ backgroundColor: '#313236', color: '#e3d3bc' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#735148')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#313236')}
                >
                  ↑
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div
              className="px-4 py-3 text-xs text-center flex-shrink-0"
              style={{ backgroundColor: '#f5f5f5', color: '#735148', borderTop: '1px solid #e0e0e0' }}
            >
              LawLens provides simplified explanations for educational purposes only. Always refer to official sources.{' '}
              <a href="https://www.officialgazette.gov.ph" target="_blank" rel="noreferrer" className="underline ml-1" style={{ color: '#313236' }}>
                Official Gazette
              </a>
              {' | '}
              <a href="https://lawphil.net" target="_blank" rel="noreferrer" className="underline" style={{ color: '#313236' }}>
                LawPhil
              </a>
            </div>
          </div>

          {/* Resizable Divider */}
          <div
            onMouseDown={handleMouseDown}
            className="hidden md:block"
            style={{
            width: '4px',
            flexShrink: 0,
              backgroundColor: isResizing ? '#735148' : '#e0e0e0',
              cursor: 'col-resize',
              userSelect: 'none',
              transition: 'background-color 0.2s',
            }}
          />

          {/* Right Panel — Law Viewer */}
          <div
          className="flex flex-col overflow-hidden border-t md:border-t-0 md:border-l flex-shrink-0"
           style={{
           width: isMobile ? '100%' : rightPanelWidth,
           maxHeight: isMobile ? '40vh' : 'none',
            backgroundColor: '#fafafa',
           borderColor: '#e0e0e0',
           }}
>
            {/* Header */}
            <div
              className="px-4 py-3 border-b font-semibold text-sm flex-shrink-0"
              style={{ borderColor: '#e0e0e0', color: '#313236', backgroundColor: '#f0e8e3' }}
            >
              {currentLaw ? currentLaw.label : 'Law Viewer'}
              {currentLaw && (
                <span className="block text-xs font-normal mt-0.5" style={{ color: '#735148' }}>
                  Enacted: {currentLaw.date}
                </span>
              )}
            </div>

            {/* Law Text */}
            <div className="flex-1 overflow-y-auto p-4" style={{ color: '#333' }}>
              {currentLaw ? (
                <p className="text-xs leading-relaxed whitespace-pre-wrap" style={{ fontFamily: 'monospace' }}>
                  {currentLaw.summary}
                </p>
              ) : (
                <p className="text-sm" style={{ color: '#999' }}>
                  The relevant law will appear here once you ask a question.
                </p>
              )}
            </div>

            {/* Source */}
            <div
              className="px-4 py-3 border-t text-xs flex-shrink-0"
              style={{ backgroundColor: '#f0e8e3', borderColor: '#e0e0e0', color: '#313236' }}
            >
              <p className="font-semibold mb-1">Source:</p>
              {currentLaw ? (
                <a
                  href={currentLaw.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline break-all"
                  style={{ color: '#735148' }}
                >
                  {currentLaw.url}
                </a>
              ) : (
                <p style={{ color: '#999' }}>Official Gazette / LawPhil Database</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
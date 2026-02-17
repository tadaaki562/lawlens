'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AppPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [prompt, setPrompt] = useState('');
  const [rightPanelWidth, setRightPanelWidth] = useState(320); // Default width in pixels
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;

    const container = document.querySelector('.main-content-container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const newWidth = containerRect.right - e.clientX;

    // Min width: 250px, Max width: 70% of container (to keep chat visible)
    const minWidth = 250;
    const maxWidth = containerRect.width * 0.7;

    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setRightPanelWidth(newWidth);
    }
  };

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
        className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}
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
              <div
                className="p-2 rounded cursor-pointer hover:opacity-80 transition text-sm truncate"
                style={{ backgroundColor: 'rgba(115, 81, 72, 0.2)' }}
              >
                {isSidebarOpen ? 'Chat 1' : '•'}
              </div>
              <div
                className="p-2 rounded cursor-pointer hover:opacity-80 transition text-sm truncate"
                style={{ backgroundColor: 'rgba(115, 81, 72, 0.2)' }}
              >
                {isSidebarOpen ? 'Chat 2' : '•'}
              </div>
              <div
                className="p-2 rounded cursor-pointer hover:opacity-80 transition text-sm truncate"
                style={{ backgroundColor: 'rgba(115, 81, 72, 0.2)' }}
              >
                {isSidebarOpen ? 'Chat 3' : '•'}
              </div>
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
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <nav
          className="h-16 flex items-center justify-between px-6 shadow-sm"
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

        {/* Main Content container */}
        <div className="flex flex-1 overflow-hidden main-content-container">
          {/* AI Prompt Area (Middle) */}
          <div
            className="flex-1 flex flex-col overflow-hidden"
            style={{ backgroundColor: '#ffffff' }}
          >
            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* AI Response Placeholder */}
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: '#735148' }}
                  >
                    AI
                  </div>
                  <div
                    className="flex-1 p-4 rounded-lg"
                    style={{ backgroundColor: '#f9f9f9', color: '#313236' }}
                  >
                    <p className="text-sm">
                      [AI Explanation and Summary Placeholder]
                    </p>
                    <p className="text-xs mt-2" style={{ color: '#735148' }}>
                      The AI will explain and summarize legal concepts here...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Input Bar */}
            <div className="p-4 border-t" style={{ borderColor: '#e0e0e0' }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask a legal question..."
                  className="flex-1 px-4 py-3 rounded border outline-none transition"
                  style={{
                    borderColor: '#735148',
                    backgroundColor: '#fafafa',
                    color: '#313236'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#313236'}
                  onBlur={(e) => e.target.style.borderColor = '#735148'}
                />
                <button
                  className="px-6 py-3 rounded font-medium transition hover:scale-105"
                  style={{
                    backgroundColor: '#313236',
                    color: '#e3d3bc'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#735148'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#313236'}
                >
                  ↑
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div
              className="px-4 py-3 text-xs text-center"
              style={{ backgroundColor: '#f5f5f5', color: '#735148', borderTop: '1px solid #e0e0e0' }}
            >
              LawLens provides simplified explanations for educational purposes only. Always refer to official sources. 
              <a href="#" className="underline ml-1" style={{ color: '#313236' }}>
                Official Gazette
              </a>
              {' | '}
              <a href="#" className="underline" style={{ color: '#313236' }}>
                LawPhil
              </a>
            </div>
          </div>

          {/* Resizable Divider */}
          <div
            onMouseDown={handleMouseDown}
            className="w-1 hover:w-1 transition-colors cursor-col-resize"
            style={{
              backgroundColor: isResizing ? '#735148' : '#e0e0e0',
              cursor: 'col-resize',
              userSelect: 'none'
            }}
          ></div>

          {/* Official Law Viewer (Right Panel) */}
          <div
            className="flex flex-col overflow-hidden border-l"
            style={{
              backgroundColor: '#fafafa',
              borderColor: '#e0e0e0',
              width: `${rightPanelWidth}px`,
              flexShrink: 0
            }}
          >
            {/* R.A. Header */}
            <div
              className="px-4 py-2 border-b font-semibold text-sm"
              style={{ borderColor: '#e0e0e0', color: '#313236', flexShrink: 0 }}
            >
              [R.A. NO. 12313, October 23, 2025]
            </div>

            {/* Legal Text Area - Main Content */}
            <div className="flex-1 overflow-y-auto p-4" style={{ color: '#333' }}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                [Official legal document text will be displayed here]
              </p>
            </div>

            {/* Source Section - Bottom */}
            <div
              className="px-4 py-3 border-t text-xs"
              style={{ backgroundColor: '#f0e8e3', borderColor: '#e0e0e0', color: '#313236', flexShrink: 0 }}
            >
              <p className="font-semibold mb-1">Source:</p>
              <p>Official Gazette / LawPhil Database</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

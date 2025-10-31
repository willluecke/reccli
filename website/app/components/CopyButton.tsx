'use client'

import { useState } from 'react'

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        className="ml-3 p-2 hover:bg-white/10 rounded-lg transition-all relative group"
        aria-label="Copy to clipboard"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400 group-hover:text-white transition-colors"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>

        {copied && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">
            Copied!
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="border-4 border-transparent border-t-white"></div>
            </div>
          </div>
        )}
      </button>
    </div>
  )
}

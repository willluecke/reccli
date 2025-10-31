'use client'

import { useState } from 'react'
import { Circle, Terminal, Rocket, Sparkles, Search, FileText, Puzzle } from 'lucide-react'

export default function Home() {
  const [copiedBrew, setCopiedBrew] = useState(false)
  const [copiedCurl, setCopiedCurl] = useState(false)
  const [recordingStarted, setRecordingStarted] = useState(false)
  const [terminalRecordingStarted, setTerminalRecordingStarted] = useState(false)
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)
  const [waitlistError, setWaitlistError] = useState('')
  const [waitlistLoading, setWaitlistLoading] = useState(false)
  const [confirmEmail, setConfirmEmail] = useState('')

  const brewCommand = 'brew install willluecke/reccli'
  const curlCommand = 'curl -sSL https://reccli.com/install.sh | bash'

  const handleCopy = async (text: string, type: 'brew' | 'curl') => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'brew') {
        setCopiedBrew(true)
        setTimeout(() => setCopiedBrew(false), 2000)
      } else {
        setCopiedCurl(true)
        setTimeout(() => setCopiedCurl(false), 2000)
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleRecordingClick = () => {
    setRecordingStarted(true)
    setTimeout(() => setRecordingStarted(false), 2000)
  }

  const handleTerminalRecordingClick = () => {
    setTerminalRecordingStarted(true)
    setTimeout(() => setTerminalRecordingStarted(false), 2000)
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setWaitlistError('')
    setWaitlistLoading(true)

    if (confirmEmail) {
      setTimeout(() => {
        setWaitlistSubmitted(true)
        setWaitlistEmail('')
        setWaitlistLoading(false)
      }, 800)
      return
    }

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx0LLvnKvbf5KVbaDAbgD598RcEYLfn30F3fxGLWAfSyuabvr3k0kQ1IEugprKGmJQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: waitlistEmail,
          confirm_email: confirmEmail
        }),
      })

      setTimeout(() => {
        setWaitlistSubmitted(true)
        setWaitlistEmail('')
        setWaitlistLoading(false)
      }, 800)
    } catch (error) {
      setWaitlistError('Something went wrong. Please try again.')
      setWaitlistLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
      {/* Header */}
      <header className="py-8">
        <nav className="container mx-auto px-6 md:px-10 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-3 text-3xl font-bold tracking-tight">
            <div className="w-4 h-4 bg-[#ff5757] rounded-full"></div>
            reccli
          </div>
          <a
            href="https://github.com/willluecke/reccli"
            className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-white/30 transition-all hover:-translate-y-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-8 pb-28">
        <div className="container mx-auto px-6 md:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center lg:mt-0 -mt-8">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-8">
                Never Lose Terminal Context Again
              </h1>
              <h2 className="text-3xl opacity-90 mb-4 lg:mb-8 leading-snug font-normal">
                One-click CLI recording. A floating button that stays out of your way.
              </h2>

              {/* Social Buttons - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex gap-4 mb-8">
                <a
                  href="https://github.com/willluecke/reccli"
                  className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all inline-flex items-center gap-2 shadow-lg"
                >
                  Star on GitHub
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20out%20RecCli%20-%20the%20easiest%20way%20to%20record%20terminal%20sessions!&url=https://reccli.com"
                  className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Share on</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>

            </div>

            {/* Right Column - Terminal Demo */}
            <div className="relative max-w-xl mx-auto lg:mx-0 lg:pr-11 lg:-mt-8 mt-4">
              <div className="space-y-6">
              <div className="bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-visible border border-white/10 relative">
                {/* Terminal Header */}
                <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 relative rounded-t-2xl">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>

                  {/* RecCli Floating Popup Window */}
                  <div className="absolute -top-[22px] -right-px bg-transparent rounded-lg z-10 shadow-[-2px_0_8px_rgba(0,0,0,0.3)]">
                    {/* Mini window header - sticks out above terminal */}
                    <div className="bg-[#2d2d2d] px-2 py-1 pb-1.5 flex items-center gap-1.5 rounded-t-lg shadow-sm relative">
                      <div className="w-3 h-3 rounded-full bg-[#5c5c5c] relative top-[1px]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#5c5c5c] relative top-[1px]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#5c5c5c] relative top-[1px]"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#1a1a1a]"></div>
                    </div>
                    {/* RecCli button content - sits in terminal header */}
                    <div className="w-[90px] h-10 bg-[#2c2c2c] flex items-center px-2 gap-1.5 rounded-b-lg shadow-lg relative">
                      <span className="text-white font-normal text-lg relative top-0.5">Rec</span>
                      <div
                        onClick={handleTerminalRecordingClick}
                        className={`w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 relative top-0.5 cursor-pointer hover:scale-105 transition-all ${terminalRecordingStarted ? 'rounded-full' : 'rounded-sm'}`}
                      >
                        <div className={`w-2.5 h-2.5 bg-[#ff3b30] transition-all ${terminalRecordingStarted ? 'rounded-full' : 'rounded-none'}`}></div>
                      </div>
                      {terminalRecordingStarted && (
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg border border-white/10 z-20">
                          Export docs
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                            <div className="border-4 border-transparent border-t-black/70"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-4 pb-16">
                  <div className="text-gray-500"># Start recording before launching CLI LLM</div>
                  <div className="mt-4">
                    <span className="text-green-400">$</span>
                    <span className="text-white ml-2">npm run dev</span>
                  </div>
                  <div className="text-green-400">✓ Ready on http://localhost:3000</div>
                  <div className="mt-4">
                    <span className="text-green-400">$</span>
                    <span className="text-white ml-2">git status</span>
                  </div>
                  <div className="text-gray-400">On branch main</div>
                  <div className="text-gray-400">Your branch is up to date with 'origin/main'.</div>
                </div>
              </div>

              {/* Install Command - Below Terminal */}
              <div
                onClick={() => handleCopy(brewCommand, 'brew')}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 cursor-pointer hover:bg-black/40 transition-all relative group"
              >
                <code className="text-xl font-mono text-white">{brewCommand}</code>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-all">
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
                </button>
                {copiedBrew && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">
                    Copied!
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-4 border-transparent border-t-white"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Buttons - Only visible on mobile, below install command */}
              <div className="flex lg:hidden gap-4 mt-6 justify-center">
                <a
                  href="https://github.com/willluecke/reccli"
                  className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all inline-flex items-center gap-2 shadow-lg"
                >
                  Star on GitHub
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20out%20RecCli%20-%20the%20easiest%20way%20to%20record%20terminal%20sessions!&url=https://reccli.com"
                  className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Share on</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-10 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16">Why RecCli?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="mb-4 bg-red-500/20 w-16 h-16 rounded-xl flex items-center justify-center">
                <Circle className="w-8 h-8 text-red-400 fill-red-400" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">One-Click Recording</h3>
              <p className="text-lg opacity-90">Floating button appears on every terminal. Click to start, click to stop.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="mb-4 bg-green-500/20 w-16 h-16 rounded-xl flex items-center justify-center">
                <Terminal className="w-8 h-8 text-green-400" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Per-Terminal Recording</h3>
              <p className="text-lg opacity-90">Each window gets its own popup. Independent recording states.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="mb-4 bg-orange-500/20 w-16 h-16 rounded-xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-orange-400" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Auto-Launch</h3>
              <p className="text-lg opacity-90">Background watcher automatically detects new terminals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Friction Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl">
          <div className="bg-white/5 backdrop-blur-sm p-6 md:p-12 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-bold mb-8 text-center">Yes, <code className="text-green-400">script</code> exists. So does walking, but we still use cars.</h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-3">
                <div className="text-gray-300 text-lg mb-2">Start a recording: <span className="text-green-300">with RecCli</span></div>
                <div className="bg-black/40 px-4 py-2 rounded-xl border border-white/10 flex items-center justify-center min-h-[54px] w-[280px] max-w-full md:w-auto mx-auto md:mx-0">
                  <span className="mr-3 text-2xl font-light">click</span>
                  <div
                    onClick={handleRecordingClick}
                    className={`w-[38px] h-[38px] bg-white border border-black flex items-center justify-center flex-shrink-0 cursor-pointer hover:scale-105 transition-all ${recordingStarted ? 'rounded-md' : 'rounded-full'}`}
                  >
                    <div className={`w-[11px] h-[11px] bg-[#ff3b30] transition-all ${recordingStarted ? 'rounded-none' : 'rounded-full'}`}></div>
                  </div>
                  {recordingStarted && (
                    <div className="ml-3 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg border border-white/10">
                      Recording Started
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-gray-300 text-lg mb-2">Start a recording: <span className="text-red-300">without RecCli</span></div>
                <div className="bg-black/40 px-4 py-2 rounded-xl border border-white/10 flex items-center min-h-[58px] max-w-sm md:max-w-none mx-auto md:mx-0">
                  <code className="text-white font-mono">script -r session_$(date +%Y%m%d).log</code>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-12">
              <div className="border-b border-white/20 pb-4">
                <table className="text-left" style={{width: 'auto', tableLayout: 'fixed'}}>
                  <colgroup>
                    <col style={{width: '150px'}} />
                    <col style={{width: '300px'}} />
                    <col style={{width: '300px'}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="text-lg font-semibold"></th>
                      <th className="pr-8 text-lg font-semibold text-green-300 text-right"></th>
                      <th className="pr-8 text-lg font-semibold text-red-300 text-right"></th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="border-b border-white/10 py-4">
                <table className="text-left" style={{width: 'auto', tableLayout: 'fixed'}}>
                  <colgroup>
                    <col style={{width: '150px'}} />
                    <col style={{width: '300px'}} />
                    <col style={{width: '300px'}} />
                  </colgroup>
                  <tbody className="text-lg">
                    <tr>
                      <td className="pr-2 text-gray-300">Indicator</td>
                      <td className="pl-8 md:pl-4 pr-8 text-green-300 text-left md:text-right">
                        <div className="flex items-center gap-2 justify-start md:justify-end">
                          <Circle className="w-4 h-4 fill-red-400 text-black" strokeWidth={1} />
                          <span>Always visible</span>
                        </div>
                      </td>
                      <td className="pl-4 pr-8 text-left md:text-right">No indicator</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-b border-white/10 py-4">
                <table className="text-left" style={{width: 'auto', tableLayout: 'fixed'}}>
                  <colgroup>
                    <col style={{width: '150px'}} />
                    <col style={{width: '300px'}} />
                    <col style={{width: '300px'}} />
                  </colgroup>
                  <tbody className="text-lg">
                    <tr>
                      <td className="pr-2 text-gray-300">Remember to use</td>
                      <td className="pl-4 pr-8 text-green-300 text-left md:text-right">90% of the time</td>
                      <td className="pl-4 pr-8 text-left md:text-right">5% of the time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="py-4">
                <table className="text-left" style={{width: 'auto', tableLayout: 'fixed'}}>
                  <colgroup>
                    <col style={{width: '150px'}} />
                    <col style={{width: '300px'}} />
                    <col style={{width: '300px'}} />
                  </colgroup>
                  <tbody className="text-lg">
                    <tr>
                      <td className="pr-2 text-gray-300">Share with team</td>
                      <td className="pl-12 md:pl-4 pr-8 text-green-300 text-left md:text-right">Clean playback</td>
                      <td className="pl-4 pr-8 text-left md:text-right">Raw dump file</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-2xl text-center mt-6 md:mt-12 opacity-90">
              It's not about the technology. It's about <strong>adoption</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Simple Pricing. Record Free.</h2>
            <p className="text-xl opacity-90">Core recording features? Free forever. Advanced AI features? Coming soon.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Base Plan */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-bold border border-green-400/30">
                OUT NOW
              </div>
              <h3 className="text-3xl font-bold mb-2">Base</h3>
              <div className="mb-6">
                <div className="text-5xl font-extrabold">$0</div>
                <div className="text-gray-300 mt-1">forever • via Homebrew</div>
              </div>
              <ul className="space-y-3 mb-8 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Unlimited recordings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Floating GUI button</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Auto-launch on new terminals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Per-terminal recording</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Local storage (your data)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Open source (MIT)</span>
                </li>
              </ul>
              <a
                href="#get-started"
                className="block w-full bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl font-bold text-xl hover:bg-white/30 transition-all text-center"
              >
                Install Now
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-bold border border-orange-400/30">
                COMING SOON
              </div>
              <h3 className="text-3xl font-bold mb-2">Pro</h3>
              <div className="mb-6">
                <div className="text-5xl font-extrabold">TBD</div>
                <div className="text-gray-300 mt-1">intelligent context management</div>
              </div>
              {!showWaitlistForm ? (
                <>
                  <ul className="space-y-3 mb-8 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-0.5 w-5 h-5 flex items-center justify-center flex-shrink-0">✓</span>
                      <span>Everything in Base</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>AI-powered context management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Search className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Smart session search - Find past solutions instantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Intelligent summarization - Compress long sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Puzzle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Advanced integrations - Claude Code, Cursor, and more</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => setShowWaitlistForm(true)}
                    className="block w-full bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl font-bold text-xl hover:bg-white/15 transition-all text-center"
                  >
                    Get Notified
                  </button>
                </>
              ) : (
                <div className="mb-8">
                  {!waitlistSubmitted ? (
                    <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                      <p className="text-sm text-gray-300 mb-3">We'll only use your email to notify you about RecCli Pro. No spam.</p>
                      <input
                        type="email"
                        name="confirm_email"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        style={{ position: 'absolute', left: '-9999px' }}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />
                      <div>
                        <input
                          type="email"
                          value={waitlistEmail}
                          onChange={(e) => setWaitlistEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                      </div>
                      {waitlistError && (
                        <p className="text-red-300 text-sm">{waitlistError}</p>
                      )}
                      <button
                        type="submit"
                        disabled={waitlistLoading}
                        className="block w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 px-6 py-3 rounded-xl font-bold text-lg transition-all border border-orange-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {waitlistLoading ? 'Adding you...' : 'Notify Me'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowWaitlistForm(false)}
                        className="block w-full text-sm text-gray-300 hover:text-white transition-all"
                      >
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                        <span className="text-green-400 text-3xl">✓</span>
                        You're on the list!
                      </p>
                      <p className="text-gray-300">We'll notify you when Pro launches.</p>
                      <button
                        onClick={() => {
                          setShowWaitlistForm(false)
                          setWaitlistSubmitted(false)
                        }}
                        className="mt-4 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 hover:text-orange-300 px-6 py-3 rounded-xl font-bold text-lg transition-all border border-orange-500/30"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20" id="get-started">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-12">Get Started in 30 Seconds</h2>
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-left overflow-x-auto space-y-8">
            {/* Homebrew Install */}
            <div>
              <div className="mb-4 text-gray-300"># Install with Homebrew (recommended)</div>
              <div
                onClick={() => handleCopy(brewCommand, 'brew')}
                className="bg-black/20 p-4 rounded-lg cursor-pointer hover:bg-black/30 transition-all relative group flex items-center justify-between"
              >
                <code className="text-xl font-mono text-white break-all pr-12">{brewCommand}</code>
                <button className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-all">
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
                </button>
                {copiedBrew && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg z-10">
                    Copied!
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-4 border-transparent border-t-white"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Curl Install */}
            <div>
              <div className="mb-4 text-gray-300"># Or install directly</div>
              <div
                onClick={() => handleCopy(curlCommand, 'curl')}
                className="bg-black/20 p-4 rounded-lg cursor-pointer hover:bg-black/30 transition-all relative group flex items-center justify-between"
              >
                <code className="text-xl font-mono text-white break-all pr-12">{curlCommand}</code>
                <button className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-all">
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
                </button>
                {copiedCurl && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg z-10">
                    Copied!
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-4 border-transparent border-t-white"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-6">Copy and paste either into your terminal</p>
          </div>
          <div className="mt-12">
            <a
              href="https://github.com/willluecke/reccli"
              className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-xl hover:bg-white/30 transition-all inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">Questions You're Thinking</h2>
          <div className="space-y-4">
            <details className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 group">
              <summary className="text-lg font-bold cursor-pointer list-none flex justify-between items-center">
                <span>Why not just use the <code className="text-green-400">script</code> command?</span>
                <span className="text-2xl group-open:rotate-180 transition-transform ml-2">▼</span>
              </summary>
              <p className="mt-3 text-base opacity-90 leading-relaxed">
                Why start every session by typing the same command? Repeatability should be accounted for with workflow enhancement. You'll click a red button that's always visible - built to automatically capture your research, debugging, and development sessions.
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 group">
              <summary className="text-lg font-bold cursor-pointer list-none flex justify-between items-center">
                What about asciinema?
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-base opacity-90 leading-relaxed">
                asciinema is great! We actually use it under the hood. But it's still command-line based. RecCli is about the UI/UX layer - the floating button that makes you actually USE recording instead of forgetting about it.
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 group">
              <summary className="text-lg font-bold cursor-pointer list-none flex justify-between items-center">
                Will this always be free?
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-base opacity-90 leading-relaxed">
                Core recording features? Free forever. Advanced AI features for context management? Coming in Phase 2 with paid options. But the basic terminal recorder you're looking at? Always free, always open source (MIT).
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 group">
              <summary className="text-lg font-bold cursor-pointer list-none flex justify-between items-center">
                Where are recordings stored?
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-base opacity-90 leading-relaxed">
                Locally on your machine in <code className="bg-black/30 px-2 py-1 rounded">~/.reccli/recordings/</code>. Your data, your control. No cloud uploads unless you choose to share.
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 group">
              <summary className="text-lg font-bold cursor-pointer list-none flex justify-between items-center">
                What platforms does it support?
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-base opacity-90 leading-relaxed">
                Currently macOS with Terminal.app. Support for iTerm2, Linux terminals, and Windows (WSL) is on the roadmap. Follow us on GitHub to track progress.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/20">
        <div className="container mx-auto px-10 max-w-7xl text-center">
          <p className="text-white/80 mb-4">© 2025 reccli. Made by developers, for developers.</p>
          <div className="flex gap-6 justify-center mb-4">
            <a href="mailto:support@reccli.com" className="hover:text-white/60 transition-colors">support@reccli.com</a>
            <a href="https://twitter.com/reccli_com" className="hover:text-white/60 transition-colors">@reccli_com</a>
            <a href="https://github.com/willluecke/reccli" className="hover:text-white/60 transition-colors">GitHub</a>
          </div>
          <div className="flex gap-6 justify-center text-sm text-white/60">
            <a href="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
      {/* Header */}
      <header className="py-8">
        <nav className="container mx-auto px-6 md:px-10 flex justify-between items-center max-w-7xl">
          <a href="/" className="flex items-center gap-3 text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <div className="w-4 h-4 bg-[#ff5757] rounded-full"></div>
            reccli
          </a>
        </nav>
      </header>

      {/* Content */}
      <section className="py-12 pb-28">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-lg opacity-90 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="opacity-90">
                RecCli is committed to protecting your privacy. This policy explains how we handle your data when you use our terminal recording tool.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Data We Collect</h2>
              <h3 className="text-2xl font-semibold mb-2 mt-4">RecCli Base (Free Tier)</h3>
              <p className="opacity-90 mb-4">
                RecCli Base stores all recordings <strong>locally on your machine</strong>. We do not collect, transmit, or store any of your terminal session data on our servers. Your recordings stay on your device.
              </p>

              <h3 className="text-2xl font-semibold mb-2 mt-4">Waitlist</h3>
              <p className="opacity-90 mb-4">
                When you sign up for the RecCli Pro waitlist, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li>Your email address</li>
                <li>Timestamp of signup</li>
              </ul>
              <p className="opacity-90 mt-4">
                We use this information solely to notify you when RecCli Pro launches. We will never sell, share, or spam your email.
              </p>

              <h3 className="text-2xl font-semibold mb-2 mt-4">RecCli Pro (Future)</h3>
              <p className="opacity-90">
                When RecCli Pro launches, we will collect:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li>Account information (email, password hash)</li>
                <li>Terminal session metadata for AI features (titles, timestamps, session length)</li>
                <li>Usage analytics to improve the product</li>
              </ul>
              <p className="opacity-90 mt-4">
                <strong>We will never access or store the actual content of your terminal sessions</strong> unless you explicitly choose to sync them for AI features.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Data Security</h2>
              <p className="opacity-90 mb-4">
                We take security seriously:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li>All data transmission uses HTTPS encryption</li>
                <li>Passwords are hashed using industry-standard algorithms</li>
                <li>We use Row-Level Security (RLS) policies to ensure strict data isolation</li>
                <li>Your data is never shared with third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Data Retention</h2>
              <p className="opacity-90">
                <strong>Waitlist emails:</strong> Stored until RecCli Pro launches, then deleted within 30 days after launch notification is sent.
              </p>
              <p className="opacity-90 mt-4">
                <strong>RecCli Pro accounts:</strong> Your data is retained as long as your account is active. You can request account deletion at any time by emailing <a href="mailto:support@reccli.com" className="underline hover:text-purple-200">support@reccli.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
              <p className="opacity-90 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li>Access your personal data</li>
                <li>Request correction of your data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of communications</li>
                <li>Export your data</li>
              </ul>
              <p className="opacity-90 mt-4">
                To exercise these rights, contact us at <a href="mailto:support@reccli.com" className="underline hover:text-purple-200">support@reccli.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Open Source</h2>
              <p className="opacity-90">
                RecCli Base is open source (MIT License). You can review our code, security practices, and data handling at <a href="https://github.com/willluecke/reccli" className="underline hover:text-purple-200">github.com/willluecke/reccli</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
              <p className="opacity-90">
                We may update this privacy policy from time to time. We will notify you of significant changes via email (if you're on the waitlist or have an account) or by posting a notice on our website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Contact</h2>
              <p className="opacity-90">
                Questions about this privacy policy? Contact us at <a href="mailto:support@reccli.com" className="underline hover:text-purple-200">support@reccli.com</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

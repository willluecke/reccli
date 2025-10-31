export default function Terms() {
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
          <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-lg opacity-90 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
              <p className="opacity-90">
                By using RecCli, you agree to these Terms of Service. If you don't agree, please don't use RecCli.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Description of Service</h2>
              <p className="opacity-90 mb-4">
                RecCli is a terminal session recording tool available in two tiers:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li><strong>RecCli Base:</strong> Free, open-source terminal recording with local storage</li>
                <li><strong>RecCli Pro:</strong> Premium tier with AI-powered features (coming soon)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">License</h2>
              <h3 className="text-2xl font-semibold mb-2 mt-4">RecCli Base</h3>
              <p className="opacity-90 mb-4">
                RecCli Base is licensed under the MIT License. You may use, modify, and distribute it freely according to the terms of that license. See <a href="https://github.com/willluecke/reccli/blob/main/LICENSE" className="underline hover:text-purple-200">github.com/willluecke/reccli</a> for details.
              </p>

              <h3 className="text-2xl font-semibold mb-2 mt-4">RecCli Pro</h3>
              <p className="opacity-90">
                RecCli Pro is proprietary software. When it launches, you'll receive a limited, non-exclusive, non-transferable license to use the service according to your subscription plan.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">User Responsibilities</h2>
              <p className="opacity-90 mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li>Use RecCli only for lawful purposes</li>
                <li>Not record sensitive information without proper authorization</li>
                <li>Not attempt to reverse engineer, decompile, or hack RecCli Pro</li>
                <li>Not use RecCli to violate any privacy laws or regulations</li>
                <li>Maintain the security of your account credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Data Ownership</h2>
              <p className="opacity-90 mb-4">
                <strong>You own your data.</strong> All terminal recordings you create belong to you. We claim no ownership over your content.
              </p>
              <p className="opacity-90">
                For RecCli Base, all data is stored locally on your machine. For RecCli Pro, you grant us a limited license to process your data solely to provide the AI-powered features you've requested.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Acceptable Use</h2>
              <p className="opacity-90 mb-4">You may not use RecCli to:</p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li>Record confidential conversations or sessions without consent</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Abuse or overload our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Payment Terms (RecCli Pro)</h2>
              <p className="opacity-90 mb-4">
                When RecCli Pro launches:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li>Pricing will be clearly displayed before purchase</li>
                <li>Subscriptions renew automatically unless cancelled</li>
                <li>You can cancel anytime from your account settings</li>
                <li>Refunds may be issued at our discretion within 30 days</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Disclaimers</h2>
              <p className="opacity-90 mb-4">
                RecCli is provided "AS IS" without warranties of any kind. We make no guarantees about:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li>Uninterrupted or error-free operation</li>
                <li>Data loss prevention (always maintain backups)</li>
                <li>Fitness for a particular purpose</li>
                <li>Compatibility with all systems or configurations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
              <p className="opacity-90">
                To the maximum extent permitted by law, RecCli and its creators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service, including but not limited to data loss, lost profits, or business interruption.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Account Termination</h2>
              <p className="opacity-90 mb-4">
                We reserve the right to suspend or terminate accounts that:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90 ml-4">
                <li>Violate these Terms of Service</li>
                <li>Engage in fraudulent activity</li>
                <li>Abuse the service or harm other users</li>
              </ul>
              <p className="opacity-90 mt-4">
                You may delete your account at any time by contacting <a href="mailto:support@reccli.com" className="underline hover:text-purple-200">support@reccli.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Open Source</h2>
              <p className="opacity-90">
                RecCli Base is open source software. Contributions, bug reports, and feature requests are welcome at <a href="https://github.com/willluecke/reccli" className="underline hover:text-purple-200">github.com/willluecke/reccli</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
              <p className="opacity-90">
                We may update these Terms from time to time. Material changes will be communicated via email or a notice on our website. Continued use of RecCli after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
              <p className="opacity-90">
                These Terms are governed by the laws of the United States. Any disputes will be resolved in the courts of [Your State/Jurisdiction].
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Contact</h2>
              <p className="opacity-90">
                Questions about these Terms? Contact us at <a href="mailto:support@reccli.com" className="underline hover:text-purple-200">support@reccli.com</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

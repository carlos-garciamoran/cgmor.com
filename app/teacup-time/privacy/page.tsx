const lastUpdated = 'January 3, 2026'
const contactEmail = 'carlosgmoran@pm.me'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 leading-7">
            <span className="font-medium">Last updated:</span> {lastUpdated}
          </p>
        </header>

        <section className="space-y-10">
          <article>
            <h2 className="text-xl font-medium">Overview</h2>
            <div className="mt-3">
              <p className="leading-7">
                teacup time is a tea brewing timer app. Your privacy is important to us, and we've
                designed this app with that in mind.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">Data Collection</h2>
            <div className="mt-3">
              <p className="leading-7 font-medium">We do not collect any data.</p>
              <p className="mt-3 leading-7">teacup time:</p>
              <ul className="mt-3 list-disc pl-5 leading-7 space-y-1">
                <li>Does not collect personal information</li>
                <li>Does not require an account</li>
                <li>Does not track your usage</li>
                <li>Does not use analytics</li>
                <li>Does not connect to the internet</li>
                <li>Does not share any data with third parties</li>
              </ul>
              <p className="mt-3 leading-7">
                All app functionality runs entirely on your device. Your tea preferences and timer
                settings are not stored or transmitted anywhere.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">Third-Party Services</h2>
            <div className="mt-3">
              <p className="leading-7">
                This app does not integrate with any third-party services, SDKs, or analytics
                platforms.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">Children's Privacy</h2>
            <div className="mt-3">
              <p className="leading-7">
                teacup time does not collect data from anyone, including children under 13.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">Changes to This Policy</h2>
            <div className="mt-3">
              <p className="leading-7">
                If we update this policy, we will post the new version on this page with an updated
                date.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">Contact</h2>
            <div className="mt-3 leading-7">
              <p>
                If you have questions about this privacy policy, you can contact us at:{' '}
                {contactEmail}
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

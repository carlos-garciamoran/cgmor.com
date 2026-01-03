const lastUpdated = 'January 3, 2026'
const projectName = 'cgmor.com'
const contactEmail = 'hi@cgmor.com'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 leading-7">
            <span className="font-medium">Last updated:</span> {lastUpdated}
          </p>
          <p className="mt-4 leading-7">
            This Privacy Policy describes how <span className="font-medium">{projectName}</span>{' '}
            (“we,” “us,” or “the Application”) collects, uses, and protects personal data when you
            use this application.
          </p>
        </header>

        <section className="space-y-10">
          <article>
            <h2 className="text-xl font-medium">1. Introduction</h2>
            <div className="mt-3">
              <p className="leading-7">
                This application is a{' '}
                <span className="font-medium">personal, non-commercial project</span> developed by
                an independent developer for individual users to view and analyze their own fitness
                and activity data.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">2. Data We Access</h2>
            <div className="mt-3">
              <p className="leading-7">
                With your explicit consent, the Application may access fitness and activity data
                from your connected Garmin account via the Garmin Connect Developer Program. This
                data may include, but is not limited to:
              </p>
              <ul className="mt-3 list-disc pl-5 leading-7 space-y-1">
                <li>Activity data (e.g., workouts, distance, duration, timestamps)</li>
                <li>Device-generated metrics associated with activities</li>
              </ul>
              <p className="mt-3 leading-7">
                We only access data that is authorized by you through Garmin’s consent flow.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">3. How We Use Data</h2>
            <div className="mt-3">
              <p className="leading-7">Your data is used solely for the following purposes:</p>
              <ul className="mt-3 list-disc pl-5 leading-7 space-y-1">
                <li>Displaying your own activity and fitness information within the Application</li>
                <li>Providing basic analysis or visualization of your personal data</li>
                <li>Improving functionality and user experience of the Application</li>
              </ul>
              <p className="mt-3 leading-7">
                Your data is <span className="font-medium">not</span> used for advertising,
                profiling, or automated decision-making.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">4. Data Sharing and Disclosure</h2>
            <div className="mt-3">
              <p className="leading-7">
                We do <span className="font-medium">not</span> sell, rent, trade, or share your
                personal data with third parties.
              </p>
              <p className="mt-3 leading-7">
                Your data is not disclosed to external platforms, services, or organizations, except
                where required by law.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">5. Data Storage and Retention</h2>
            <div className="mt-3">
              <p className="leading-7">
                Data is stored only for as long as necessary to provide the Application’s
                functionality. You may request deletion of your data at any time.
              </p>
              <p className="mt-3 leading-7">
                If you disconnect your Garmin account or stop using the Application, your data will
                be deleted within a reasonable timeframe.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">6. Data Security</h2>
            <div className="mt-3">
              <p className="leading-7">
                Reasonable technical and organizational measures are implemented to protect your
                data against unauthorized access, loss, or misuse. However, no method of
                transmission or storage is 100% secure.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">7. Your Rights</h2>
            <div className="mt-3">
              <p className="leading-7">You have the right to:</p>
              <ul className="mt-3 list-disc pl-5 leading-7 space-y-1">
                <li>Access your data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time by disconnecting your Garmin account</li>
              </ul>
              <p className="mt-3 leading-7">
                Requests can be made by contacting us at the email address below.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">8. Third-Party Services</h2>
            <div className="mt-3">
              <p className="leading-7">
                Garmin Connect and Garmin devices are operated by Garmin. This Privacy Policy
                applies only to this Application. Please refer to Garmin’s own privacy policy for
                information on how Garmin processes your data.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">9. Changes to This Policy</h2>
            <div className="mt-3">
              <p className="leading-7">
                This Privacy Policy may be updated from time to time. Any changes will be posted on
                this page with an updated revision date.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-xl font-medium">10. Contact Information</h2>
            <div className="mt-3 leading-7">
              <p>
                If you have questions or concerns about this Privacy Policy or your data, you may
                contact us at {contactEmail}.
              </p>
            </div>
          </article>
        </section>

        <footer className="mt-10 text-secondary-foreground border-t pt-6 text-sm">
          <p>
            {projectName} is a personal project. If you are a Garmin user, you can manage access by
            disconnecting your Garmin account from the Application.
          </p>
        </footer>
      </div>
    </main>
  )
}

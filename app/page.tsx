/**
 * Font Testing Page
 * Verifies Inter (body), Playfair Display (heading), and Poppins (display) are working
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-4xl space-y-16">
        {/* Hero Section with Display Font */}
        <section className="text-center space-y-6">
          <p className="text-sm font-medium uppercase tracking-wider text-primary-600">
            Typography Test
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
            Study Abroad
          </h1>
          <p className="font-body text-xl text-neutral-600 max-w-2xl mx-auto">
            This hero text uses <strong className="text-primary-600">Poppins (Display Font)</strong>.
            Notice the geometric, friendly character perfect for capturing student attention.
          </p>
        </section>

        {/* Content Section with Heading and Body Fonts */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold text-foreground">
              Why Playfair Display?
            </h2>
            <p className="font-body text-neutral-600 leading-relaxed">
              This heading uses <strong className="text-primary-600">Playfair Display</strong>, 
              an elegant serif that conveys academic authority and educational prestige. 
              It&apos;s perfect for section headings and important titles.
            </p>
            <p className="font-body text-neutral-600 leading-relaxed">
              The body text you&apos;re reading uses <strong className="text-primary-600">Inter</strong>, 
              designed specifically for screens with excellent readability. Clean, modern, and trustworthy.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Font Summary
            </h3>
            <ul className="font-body space-y-3 text-neutral-600">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                <span>
                  <strong>Inter</strong> — Body text, UI elements
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-secondary-500"></span>
                <span>
                  <strong>Playfair Display</strong> — Headings, titles
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-tertiary-500"></span>
                <span>
                  <strong>Poppins</strong> — Display, hero text
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action with Display Font */}
        <section className="text-center space-y-6 bg-primary-600 rounded-3xl p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-body text-primary-100 text-lg max-w-xl mx-auto">
            This CTA section demonstrates how Poppins creates visual impact for important calls-to-action,
            while Inter keeps supporting text readable and professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 rounded-full font-medium text-lg">
              Get Started
            </button>
            <button className="btn-secondary px-8 py-4 rounded-full font-medium text-lg">
              Learn More
            </button>
          </div>
        </section>

        {/* Font Utility Test */}
        <section className="border-t border-neutral-200 pt-8">
          <p className="font-body text-sm text-neutral-500 text-center">
            All fonts loaded via next/font/google for optimal performance.
            <br />
            Utility classes: <code className="bg-neutral-100 px-2 py-1 rounded">font-sans</code>,{" "}
            <code className="bg-neutral-100 px-2 py-1 rounded">font-heading</code>,{" "}
            <code className="bg-neutral-100 px-2 py-1 rounded">font-display</code>
          </p>
        </section>
      </main>
    </div>
  );
}

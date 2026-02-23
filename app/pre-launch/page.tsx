import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Access",
  description:
    "Be among the first to receive the Zero Lines skin longevity protocol. Request early access now.",
};

export default function PreLaunchPage() {
  return (
    <section className="min-h-svh flex items-center justify-center py-40">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
        <p className="text-caption font-medium tracking-[0.15em] uppercase text-primary mb-8">
          Pre-Launch
        </p>
        <h1 className="text-display font-light tracking-tight text-secondary">
          Early Access
        </h1>
        <p className="mt-12 mx-auto text-body-lg text-text-muted max-w-xl leading-relaxed">
          The first production run is limited. Register now to receive
          priority access to the complete longevity protocol before
          public availability.
        </p>

        <form className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 max-w-lg mx-auto">
          <label htmlFor="early-email" className="sr-only">
            Email address
          </label>
          <input
            id="early-email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full sm:flex-1 h-14 px-6 bg-surface-muted border border-border rounded-sm text-secondary text-body placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300"
          />
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-12 bg-secondary text-white text-[0.875rem] font-medium tracking-[0.06em] uppercase hover:bg-primary transition-colors duration-300 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Request Access
          </button>
        </form>

        <p className="mt-8 text-caption text-text-muted">
          No commitment. No spam. One notification when your access is ready.
        </p>

        <div className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-16 max-w-2xl mx-auto">
          {[
            { metric: "6", label: "Precision Formulations" },
            { metric: "4", label: "Clinical Devices" },
            { metric: "1", label: "Integrated Protocol" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-display font-light text-primary leading-none">
                {stat.metric}
              </span>
              <p className="mt-5 text-caption text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

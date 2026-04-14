import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Access",
  description:
    "Luxury skincare pre-launch. Early access to Zero Lines skin longevity protocol. Pre-order and reserve your place for the first production run.",
};

export default function PreLaunchPage() {
  return (
    <section className="min-h-svh flex items-center justify-center py-40">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-display font-light tracking-tight text-secondary">
            The First Production Run Is Limited.
          </h1>
          <p className="mt-6 text-body-lg text-text-muted">
            Zero Lines is not yet available to the public. Early access is now open.
          </p>
          <p className="mt-4 text-body text-text-muted">
            The Zero Lines Longevity Protocol has been in clinical development for four years. The first production run is limited by design — because precision formulation at this level cannot be scaled without compromising the integrity of the active compound concentrations.
          </p>
          <p className="mt-6 text-body font-medium text-secondary">
            Register now for priority access before public availability.
          </p>
        </div>

        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-h2 font-light tracking-tight text-secondary text-center mb-12">
            What You Receive
          </h2>
          <ul className="space-y-6 text-body text-text-muted">
            <li className="flex gap-4">
              <span className="shrink-0 w-6 h-6 rounded-full border border-primary flex items-center justify-center text-caption text-primary">1</span>
              Priority allocation on the first production run — guaranteed availability before public release
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-6 h-6 rounded-full border border-primary flex items-center justify-center text-caption text-primary">2</span>
              Protocol consultation — a personalized onboarding guide for your specific Zero Lines protocol
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-6 h-6 rounded-full border border-primary flex items-center justify-center text-caption text-primary">3</span>
              Pre-launch pricing — access to the founding member rate, locked for your first 12-month protocol cycle
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-6 h-6 rounded-full border border-primary flex items-center justify-center text-caption text-primary">4</span>
              Direct access — first notification the moment your access is confirmed
            </li>
          </ul>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-3xl mx-auto text-center">
          {[
            { metric: "6", label: "Precision Formulations" },
            { metric: "4", label: "Clinical Devices" },
            { metric: "1", label: "Integrated Protocol" },
            { metric: "~6", label: "Months Until Public Launch" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="block text-display font-light text-primary leading-none">
                {stat.metric}
              </span>
              <p className="mt-5 text-caption text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-lg mx-auto">
          <h2 className="text-h2 font-light tracking-tight text-secondary text-center mb-12">
            Reserve Your Access
          </h2>
          <form className="flex flex-col gap-6">
            <div>
              <label htmlFor="prelaunch-name" className="block text-caption font-medium tracking-[0.04em] uppercase text-text-muted mb-3">
                Full Name
              </label>
              <input
                id="prelaunch-name"
                type="text"
                required
                placeholder="Your name"
                className="w-full h-14 px-6 bg-surface-muted border border-border rounded-sm text-secondary text-body placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="prelaunch-email" className="block text-caption font-medium tracking-[0.04em] uppercase text-text-muted mb-3">
                Email Address
              </label>
              <input
                id="prelaunch-email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full h-14 px-6 bg-surface-muted border border-border rounded-sm text-secondary text-body placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="prelaunch-concern" className="block text-caption font-medium tracking-[0.04em] uppercase text-text-muted mb-3">
                Primary Skin Concern
              </label>
              <select
                id="prelaunch-concern"
                className="w-full h-14 px-6 bg-surface-muted border border-border rounded-sm text-secondary text-body focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="">Select your primary concern</option>
                <option value="structural">Structural firmness</option>
                <option value="texture">Surface texture</option>
                <option value="tone">Skin tone</option>
                <option value="barrier">Barrier sensitivity</option>
                <option value="general">General longevity protocol</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn-premium w-full inline-flex items-center justify-center h-14 px-12 bg-secondary text-white text-[0.875rem] font-medium tracking-[0.06em] uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Reserve My Access
            </button>
          </form>
          <p className="mt-6 text-caption text-text-muted text-center">
            No commitment. No spam. One communication when your access is confirmed. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

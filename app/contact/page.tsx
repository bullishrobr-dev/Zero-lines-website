import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Zero Lines contact. Protocol consultations, clinical partnership inquiries, press, and luxury skincare inquiry.",
};

export default function ContactPage() {
  return (
    <section className="pt-48 pb-32 lg:pt-56 lg:pb-40">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="text-h1 font-light tracking-tight text-secondary">
            Get in Touch
          </h1>
          <p className="mt-10 text-body-lg text-text-muted leading-relaxed">
            For protocol consultations, clinical partnership inquiries, press, and wholesale.
          </p>
        </div>

        <div className="mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">
          <form className="space-y-10">
            <div>
              <label
                htmlFor="name"
                className="block text-caption font-medium tracking-[0.04em] uppercase text-text-muted mb-4"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full h-14 px-5 bg-surface-muted border border-border rounded-sm text-secondary text-body placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-caption font-medium tracking-[0.04em] uppercase text-text-muted mb-4"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full h-14 px-5 bg-surface-muted border border-border rounded-sm text-secondary text-body placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-caption font-medium tracking-[0.04em] uppercase text-text-muted mb-4"
              >
                Subject
              </label>
              <select
                id="subject"
                required
                defaultValue=""
                className="w-full h-14 px-5 bg-surface-muted border border-border rounded-sm text-secondary text-body focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a topic</option>
                <option value="protocol">Protocol Consultation</option>
                <option value="partnership">Partnership</option>
                <option value="press">Press &amp; Media</option>
                <option value="wholesale">Wholesale</option>
                <option value="clinical">Clinical Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-caption font-medium tracking-[0.04em] uppercase text-text-muted mb-4"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-5 py-5 bg-surface-muted border border-border rounded-sm text-secondary text-body placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300 resize-none leading-relaxed"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="btn-premium inline-flex items-center justify-center h-14 px-12 bg-secondary text-white text-[0.875rem] font-medium tracking-[0.06em] uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Send Inquiry
            </button>
          </form>

          <div className="space-y-16 lg:pt-2">
            <div>
              <h2 className="text-h4 font-light tracking-tight text-secondary">
                Response Commitment
              </h2>
              <p className="mt-5 text-body text-text-muted leading-relaxed">
                All inquiries receive a response within 48 business hours. Protocol consultations are scheduled within 5 business days.
              </p>
            </div>

            <div>
              <h2 className="text-h4 font-light tracking-tight text-secondary">
                Contact
              </h2>
              <p className="mt-5 text-body text-text-muted leading-relaxed">
                Email: info@zerolines.life<br />
                Location: 61 / 247 main st Gibraltar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

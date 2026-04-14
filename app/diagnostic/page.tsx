import type { Metadata } from "next";
import DiagnosticUpload from "@/components/diagnostic/DiagnosticUpload";

export const metadata: Metadata = {
  title: "Your Skin. Your Protocol.",
  description:
    "Skin analysis tool and AI skin diagnostic. Personalized skincare protocol and skin longevity assessment. Clinical-grade analysis for your unique biology.",
};

export default function DiagnosticPage() {
  return (
    <>
      <section className="pt-48 pb-24 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h1 className="text-h1 font-light tracking-tight text-secondary">
            Your Skin. Your Protocol.
          </h1>
          <p className="mt-10 mx-auto text-body-lg text-text-muted max-w-2xl leading-relaxed">
            Every face is structurally different. Your longevity protocol should be too.
          </p>
          <p className="mt-6 mx-auto text-body text-text-muted max-w-2xl leading-relaxed">
            The Zero Lines Diagnostic is a clinical-grade skin analysis tool that maps your specific skin structure, concerns, and longevity priorities — and outputs a personalised protocol recommendation engineered for your unique biology.
          </p>
        </div>
      </section>

      <section className="pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <DiagnosticUpload />
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <h2 className="text-h2 font-light tracking-tight text-secondary text-center mb-20">
            The Analysis Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {[
              {
                step: "01",
                title: "Upload",
                text: "Upload a clear, natural-light photograph of your face — no makeup, no filter, no flash.",
              },
              {
                step: "02",
                title: "Assess",
                text: "Complete the Skin Intelligence Assessment covering your primary concerns, current routine, environment, and skin history. Our clinical analysis engine maps your structural indicators — surface tension distribution, volumetric irregularity, barrier condition, and tone uniformity.",
              },
              {
                step: "03",
                title: "Receive",
                text: "Receive your personalised Zero Lines Longevity Protocol recommendation — the specific products, sequence, and device integration relevant to your skin's current biological state.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-display font-light text-primary/20">
                  {item.step}
                </span>
                <h3 className="mt-6 text-h4 font-light tracking-tight text-secondary">
                  {item.title}
                </h3>
                <p className="mt-5 text-body text-text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-20 text-body text-text-muted text-center max-w-2xl mx-auto leading-relaxed">
            The Zero Lines Diagnostic is an AI-assisted assessment tool. It does not constitute medical advice and is not a substitute for clinical dermatological consultation.
          </p>
        </div>
      </section>
    </>
  );
}

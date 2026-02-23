import type { Metadata } from "next";
import DiagnosticUpload from "@/components/diagnostic/DiagnosticUpload";

export const metadata: Metadata = {
  title: "Skin Diagnostic",
  description:
    "AI-powered skin analysis for personalized longevity protocol recommendations. Upload a photo to begin your diagnostic.",
};

export default function DiagnosticPage() {
  return (
    <>
      <section className="pt-48 pb-24 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h1 className="text-h1 font-light tracking-tight text-secondary">
            Skin Diagnostic
          </h1>
          <p className="mt-10 mx-auto text-body-lg text-text-muted max-w-2xl leading-relaxed">
            AI-powered photo analysis maps your skin&rsquo;s current state
            across 12 biomarker categories. The result: a personalized
            longevity protocol calibrated to your biology.
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
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {[
              {
                step: "01",
                title: "Capture",
                text: "Upload a clear, well-lit photograph. Our system analyzes facial topology, texture microstructure, and chromatic indicators.",
              },
              {
                step: "02",
                title: "Analyze",
                text: "12 biomarker categories are evaluated including barrier integrity, collagen density indicators, melanin distribution, and vascular patterns.",
              },
              {
                step: "03",
                title: "Prescribe",
                text: "Receive a personalized activation protocol — product selection, application sequencing, and device parameters calibrated to your diagnostic profile.",
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
        </div>
      </section>
    </>
  );
}

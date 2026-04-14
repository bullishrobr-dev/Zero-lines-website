import type { Metadata } from "next";
import CinematicScrollProtocol from "@/components/sections/CinematicScrollProtocol";

export const metadata: Metadata = {
  title: "The Longevity Protocol",
  description:
    "Skincare protocol and skin longevity protocol. Six precision formulations in a clinical skincare routine. Luxury skincare system engineered for measurable activation.",
};

export default function ProtocolPage() {
  return (
    <>
      <section className="pt-48 pb-16 lg:pt-56 lg:pb-24">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <h1 className="text-h1 font-light tracking-tight text-secondary max-w-3xl">
            The Longevity Protocol
          </h1>
          <p className="mt-10 text-body-lg text-text-muted max-w-2xl leading-relaxed">
            Six precision formulations. One integrated activation system.
          </p>
          <p className="mt-6 text-body text-text-muted max-w-2xl leading-relaxed">
            Zero Lines is not a collection of products. It is a sequenced, clinical-grade protocol — where each formulation performs a specific biological function, and every step amplifies the next. This is what separates a skincare routine from a longevity protocol.
          </p>
        </div>
      </section>

      <CinematicScrollProtocol showHeading={false} />

      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <h2 className="text-h2 font-light tracking-tight text-secondary">
            Why Protocol Sequencing Matters
          </h2>
          <p className="mt-10 max-w-3xl text-body-lg text-text-muted leading-relaxed">
            Ingredient bioavailability is determined by how and when it is applied, not just what it contains. A serum applied to unprepared skin penetrates a fraction of the depth it would on properly reset skin. A repair compound applied before the mineral complex cannot reach its target.
          </p>
          <p className="mt-6 max-w-3xl text-body text-text-muted leading-relaxed">
            Zero Lines was engineered with this sequencing logic at its core. The order is not arbitrary — it is clinically derived.
          </p>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                phase: "Reset, Activate & Signal",
                steps: [
                  "Peeling Gel — Canvas recalibration (once weekly)",
                  "The Syringe — Precision collagen activation (once weekly, post-peel)",
                  "The Serum — Molecular messenger (daily, morning and evening)",
                ],
              },
              {
                phase: "Defend, Restore & Sustain",
                steps: [
                  "Day Cream — Environmental shield (daily, morning, after Serum)",
                  "Night Cream — Nocturnal repair (nightly, after Serum)",
                  "Syringe Refill — 12-month continuity (replace when depleted)",
                ],
              },
            ].map((protocol) => (
              <div key={protocol.phase} className="p-12 lg:p-14 bg-white">
                <h3 className="text-h4 font-light tracking-tight text-secondary">
                  {protocol.phase}
                </h3>
                <ol className="mt-8 space-y-6">
                  {protocol.steps.map((step, i) => (
                    <li key={i} className="flex gap-5 text-body text-text-muted leading-relaxed">
                      <span className="shrink-0 w-8 h-8 flex items-center justify-center text-caption font-medium text-primary border border-primary/30 rounded-full">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

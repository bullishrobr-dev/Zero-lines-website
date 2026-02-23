import type { Metadata } from "next";
import ProtocolGrid from "@/components/sections/ProtocolGrid";

export const metadata: Metadata = {
  title: "The Longevity Protocol",
  description:
    "Six precision formulations engineered for measurable skin longevity outcomes. Explore the complete Zero Lines activation protocol.",
};

export default function ProtocolPage() {
  return (
    <>
      <section className="pt-48 pb-24 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <h1 className="text-h1 font-light tracking-tight text-secondary max-w-3xl">
            The Longevity Protocol
          </h1>
          <p className="mt-10 text-body-lg text-text-muted max-w-2xl leading-relaxed">
            An integrated system of six precision formulations.
            Each product is a phase in a continuous activation cycle —
            not isolated treatments, but a coordinated protocol
            engineered for compounding results.
          </p>
        </div>
      </section>

      <ProtocolGrid showHeading={false} />

      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-h2 font-light tracking-tight text-secondary">
              Protocol Sequencing
            </h2>
            <p className="mt-10 text-body-lg text-text-muted leading-relaxed">
              Morning activation. Evening restoration. Weekly recalibration.
              The protocol follows your skin&rsquo;s circadian biology for
              optimal molecular timing.
            </p>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                phase: "AM Protocol",
                steps: [
                  "The Serum — Molecular activation base",
                  "Day Cream — UV-shield barrier protocol",
                  "The Syringe — Targeted precision delivery (3x/week)",
                ],
              },
              {
                phase: "PM Protocol",
                steps: [
                  "Peeling Gel — Enzymatic renewal (2x/week)",
                  "The Serum — Evening activation layer",
                  "Night Cream — Nocturnal cellular restoration",
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

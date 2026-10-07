export default function Home() {
  const news = [
    {
      category: "OCEAN FREIGHT",
      number: "01",
      headline: "Today’s key ocean freight development",
      text: "Add a concise summary of the most important ocean freight development affecting global supply chains today.",
      impact:
        "Consider reviewing upcoming bookings, capacity requirements and potential changes in transit times.",
    },
    {
      category: "AIR FREIGHT",
      number: "02",
      headline: "Today’s key air cargo development",
      text: "Highlight the most relevant change in air cargo capacity, rates, demand or operations.",
      impact:
        "Time-sensitive shipments may benefit from earlier planning and alternative routing options.",
    },
    {
      category: "GROUND & CROSS-BORDER",
      number: "03",
      headline: "Today’s key ground transportation development",
      text: "Share the most relevant cross-border, trucking, customs or inland transportation update.",
      impact:
        "Review critical shipments and confirm available capacity before upcoming departures.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F5F7] text-[#111111]">
      {/* HEADER */}
      <section className="bg-[#003C6F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 text-sm font-semibold tracking-[0.18em]">
                VECTOR GLOBAL LOGISTICS
              </div>
              <div className="h-1 w-16 bg-[#FF3E32]" />
            </div>

            <div className="text-left md:text-right">
              <p className="text-sm text-white/70">SUPPLY CHAIN INTELLIGENCE</p>
              <p className="font-semibold">October 7, 2026</p>
            </div>
          </div>

          <div className="max-w-4xl py-16 md:py-24">
            <p className="mb-5 text-sm font-bold tracking-[0.2em] text-[#FF3E32]">
              TODAY&apos;S SUPPLY CHAIN BRIEF
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              What&apos;s moving global
              <br />
              supply chains today?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              The developments logistics leaders should be watching today —
              and what they could mean for upcoming shipments.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.4fr_.6fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
              THE BIG PICTURE
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#003C6F] md:text-4xl">
              Three developments worth having on your radar today.
            </h2>
          </div>

          <p className="text-sm leading-6 text-gray-600">
            A concise overview designed to help supply chain teams identify
            potential risks, opportunities and actions.
          </p>
        </div>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.number}
              className="flex min-h-[430px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-[#003C6F]">
                    {item.category}
                  </span>

                  <span className="text-4xl font-bold text-[#DAEBF5]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mb-5 text-2xl font-bold leading-tight">
                  {item.headline}
                </h3>

                <p className="leading-7 text-gray-600">{item.text}</p>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="mb-2 text-xs font-bold tracking-[0.15em] text-[#FF3E32]">
                  WHAT TO KEEP IN MIND
                </p>

                <p className="text-sm leading-6 text-gray-700">
                  {item.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VECTOR SUPPORT */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
              HOW VECTOR CAN SUPPORT YOUR SUPPLY CHAIN
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#003C6F] md:text-4xl">
              When conditions change, your logistics strategy should be able to
              change with them.
            </h2>
          </div>

          <div>
            <p className="mb-7 text-lg leading-8 text-gray-600">
              Vector Global Logistics helps companies navigate complex supply
              chains through flexible international transportation solutions,
              responsive support and a team focused on understanding what each
              operation actually requires.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-[#003C6F] md:grid-cols-3">
              <div className="rounded-lg bg-[#F3F5F7] p-4">Air Freight</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">Ocean Freight</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">Ground</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">Expedited</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">Cross-Border</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">
                Specialized Cargo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF3E32] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-[0.15em]">
                NEED SUPPORT WITH YOUR NEXT SHIPMENT?
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Let&apos;s find the right solution.
              </h2>
            </div>

            <a
              href="https://vectorgl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-white px-7 py-4 font-bold text-[#003C6F] transition hover:scale-[1.02]"
            >
              Contact Vector →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#003C6F] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <strong>Vector Global Logistics</strong>
            <p className="mt-1 text-white/60">
              Global logistics solutions for complex supply chains.
            </p>
          </div>

          <div className="text-white/60">vectorgl.com</div>
        </div>
      </footer>
    </main>
  );
}

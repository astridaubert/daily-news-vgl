const brief = {
  date: "October 7, 2026",

  title: "Global supply chains are entering a critical Q4.",

  subtitle:
    "The most relevant disruptions logistics leaders should be watching today — and what they could mean for upcoming shipments.",

  news: [
    {
      region: "CHINA",
      mode: "OCEAN & AIR",
      headline: "Post-Golden Week congestion extends Asia lead times",
      fact:
        "Golden Week closures, weather disruption and port congestion are affecting Shanghai, Ningbo and Yantian, with reported waits exceeding five days at some gateways.",
      impact:
        "Delays may continue flowing into North American and European supply chains.",
      action:
        "Consider adding 7–14 days of flexibility to critical Asia shipments and confirm space early.",
    },
    {
      region: "INDIA",
      mode: "OCEAN FREIGHT",
      headline: "Capacity and connection risks remain elevated",
      fact:
        "Residual disruption following the Mundra empty-container dispute continues to affect flows, while approximately 11% of scheduled sailings were reported cancelled across the mid-September to mid-October period.",
      impact:
        "India-origin cargo may face greater risk of missed connections and longer transit times.",
      action:
        "Confirm bookings early and closely monitor transshipment connections.",
    },
    {
      region: "EUROPE",
      mode: "OCEAN & INLAND",
      headline: "Low Rhine levels pressure inland transport",
      fact:
        "Extremely low water levels on the Rhine are limiting barge operations in Germany, while northern European ports continue managing congestion.",
      impact:
        "Reduced inland capacity can increase cost and extend delivery times.",
      action:
        "Review rail and truck alternatives for time-sensitive cargo.",
    },
  ],

  watchlist: [
    {
      title: "United States",
      text:
        "Asia delays could translate into later arrivals at U.S. ports, while transatlantic ocean capacity remains tight.",
    },
    {
      title: "Mexico",
      text:
        "No major port strikes are currently active, but Pacific gateways remain vulnerable to congestion and operational disruption.",
    },
    {
      title: "Spain | Oct 28 – Nov 2",
      text:
        "A planned logistics labor action involving approximately 45,000 workers in Guadalajara could disrupt distribution in central Spain.",
    },
    {
      title: "Gulf of Mexico",
      text:
        "Hurricane season remains active through November, maintaining the risk of temporary port and inland transportation disruption.",
    },
  ],

  recommendations: [
    "Build 7–14 days of flexibility into critical Asia lead times.",
    "Monitor Shanghai, Ningbo, Yantian and northern European gateways.",
    "Review alternative routing where Panama Canal or Red Sea exposure creates risk.",
    "Communicate potential Q4 delays proactively with customers and internal teams.",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F5F7] text-[#111111]">
      <section className="bg-[#003C6F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold tracking-[0.18em]">
                VECTOR GLOBAL LOGISTICS
              </p>
              <div className="mt-2 h-1 w-16 bg-[#FF3E32]" />
            </div>

            <div className="md:text-right">
              <p className="text-xs tracking-[0.15em] text-white/60">
                DAILY SUPPLY CHAIN BRIEF
              </p>
              <p className="mt-1 font-semibold">{brief.date}</p>
            </div>
          </div>

          <div className="max-w-4xl py-16 md:py-20">
            <p className="mb-4 text-sm font-bold tracking-[0.18em] text-[#FF3E32]">
              TODAY&apos;S GLOBAL LOGISTICS UPDATE
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              {brief.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              {brief.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            TOP DEVELOPMENTS
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#003C6F]">
            What matters today
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {brief.news.map((item, index) => (
            <article
              key={item.headline}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-[#FF3E32]">
                    {item.region}
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-[#003C6F]">
                    {item.mode}
                  </p>
                </div>

                <span className="text-4xl font-bold text-[#DAEBF5]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-2xl font-bold leading-tight">
                {item.headline}
              </h3>

              <p className="mt-5 leading-7 text-gray-600">{item.fact}</p>

              <div className="mt-7 border-t border-gray-200 pt-6">
                <p className="text-xs font-bold tracking-[0.14em] text-[#003C6F]">
                  POTENTIAL IMPACT
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {item.impact}
                </p>
              </div>

              <div className="mt-5 rounded-xl bg-[#F3F5F7] p-4">
                <p className="text-xs font-bold tracking-[0.14em] text-[#FF3E32]">
                  ACTION
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {item.action}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            WHAT WE&apos;RE WATCHING
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#003C6F]">
            Additional risks on the radar
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {brief.watchlist.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="font-bold text-[#003C6F]">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#003C6F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            RECOMMENDED ACTIONS
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What supply chain teams should consider today
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {brief.recommendations.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-white/15 p-5"
              >
                <span className="font-bold text-[#FF3E32]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-6 text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
              HOW VECTOR CAN SUPPORT
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#003C6F]">
              When conditions change, your logistics strategy should be able to
              change with them.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-600">
              Vector Global Logistics helps companies evaluate alternatives
              across air, ocean and ground transportation, identify critical
              shipments and develop solutions designed to help protect supply
              chain continuity.
            </p>

            <a
              href="https://vectorgl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-[#FF3E32] px-7 py-4 font-bold text-white"
            >
              Contact our team →
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-10">
          <strong>Vector Global Logistics</strong>
          <span className="text-white/60">
            Source summary: specialized logistics and market intelligence
            sources.
          </span>
        </div>
      </footer>
    </main>
  );
}

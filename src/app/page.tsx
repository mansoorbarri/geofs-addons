import { ExternalLink, ArrowRight, Download } from "lucide-react";

const addons = [
  {
    name: "GeoFS Radar",
    desc: "Live radar view of online aircraft inside GeoFS.",
    repo: "https://github.com/mansoorbarri/radarthing",
    install: "https://github.com/mansoorbarri/radarthing/raw/refs/heads/main/radarthing.user.js",
    live: "https://radarthing.com",
  },
  {
    name: "GeoFS VStrips",
    desc: "Virtual flight strips for improved ATC coordination within GeoFS.",
    repo: "https://github.com/mansoorbarri/geofs-vstrips",
    live: "https://vstrips.xyzmani.com",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 px-4 py-8 sm:py-16">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          GeoFS Addons Hub
        </h1>
        <p className="max-w-xl px-10 text-slate-300">
          A hub for custom addons I’ve developed to enhance your GeoFS flight
          simulation experience.
        </p>
      </header>

      {/* Tampermonkey Notice */}
      <div className="max-w-xl rounded-xl border border-amber-900/60 bg-amber-950/50 px-6 py-4 text-center text-sm text-amber-200 shadow-sm">
        ⚠️ To use any of these addons, please install{" "}
        <a
          href="https://www.tampermonkey.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-amber-400 hover:text-amber-100"
        >
          Tampermonkey
        </a>{" "}
        first.
      </div>

      {/* Addon Grid */}
      {/* auto-fit ensures cards fill available width dynamically */}
      <section className="grid w-full max-w-6xl gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {addons.map((addon) => (
          <div
            key={addon.name}
            className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm shadow-black/30 transition-all duration-300 hover:-translate-y-[3px] hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/30"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-100 group-hover:text-blue-400">
                {addon.name}
              </h2>
              <p className="mt-2 text-sm text-slate-400">{addon.desc}</p>
            </div>

            {/* Conditional buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {addon.install && (
                <a
                  href={addon.install}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-slate-950 shadow-sm transition-all hover:bg-blue-400"
                >
                  <Download className="h-4 w-4" />
                  Install
                </a>
              )}

              {addon.repo && (
                <a
                  href={addon.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 transition-all hover:border-blue-400 hover:text-blue-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  GitHub
                </a>
              )}

              {addon.live && (
                <a
                  href={addon.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-400 px-3 py-2 text-sm font-medium text-blue-300 transition-all hover:bg-blue-500 hover:text-slate-950"
                >
                  <ArrowRight className="h-4 w-4" />
                  Visit
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

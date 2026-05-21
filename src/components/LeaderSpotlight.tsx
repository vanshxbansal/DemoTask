import { Quote } from "lucide-react";
import { leader } from "../content/hi";

export default function LeaderSpotlight() {
  return (
    <section className="bg-gradient-to-br from-forest/5 to-amber-50/50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <img
            src={leader.image}
            alt="राजेश वर्मा"
            className="mx-auto max-h-96 w-full max-w-md rounded-2xl object-cover shadow-xl ring-4 ring-white"
          />
        </div>

        <div className="order-1 lg:order-2">
          <Quote className="text-saffron opacity-40" size={40} />
          <blockquote className="font-hindi mt-4 text-xl font-medium leading-relaxed text-charcoal sm:text-2xl">
            "{leader.quote}"
          </blockquote>
          <p className="font-hindi mt-4 font-semibold text-forest">
            — राजेश वर्मा, ग्राम विकास राजदूत
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {leader.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-4 text-center shadow-md ring-1 ring-orange-50"
              >
                <p className="font-hindi text-2xl font-bold text-saffron sm:text-3xl">
                  {stat.value}
                </p>
                <p className="font-hindi mt-1 text-xs font-medium text-charcoal/70 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

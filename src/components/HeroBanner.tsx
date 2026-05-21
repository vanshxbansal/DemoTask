import { ArrowRight, Sparkles } from "lucide-react";
import { hero, site } from "../content/hi";

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-cream to-green-50"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-1 rounded-full bg-saffron/10 px-3 py-1 font-hindi text-xs font-semibold text-saffron-dark">
            <Sparkles size={14} />
            ग्राम विकास पोर्टल
          </span>
          <h1 className="font-hindi mt-4 text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {site.tagline}
          </h1>
          <p className="font-hindi mt-4 max-w-lg text-base leading-relaxed text-charcoal/75 sm:text-lg">
            {site.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3 font-hindi text-sm font-semibold text-white shadow-lg shadow-saffron/25 transition hover:bg-saffron-dark"
            >
              {hero.ctaPrimary}
              <ArrowRight size={18} />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border-2 border-forest bg-white px-6 py-3 font-hindi text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up animate-delay-200 relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-charcoal/10 ring-1 ring-orange-100">
            <img
              src={hero.leaderImage}
              alt={hero.leaderName}
              className="h-56 w-full object-cover object-top sm:h-72"
            />
            <div className="border-t border-orange-50 bg-gradient-to-r from-saffron/5 to-forest/5 p-5">
              <p className="font-hindi text-xl font-bold text-charcoal">
                {hero.leaderName}
              </p>
              <p className="font-hindi text-sm font-medium text-forest">
                {hero.leaderRole}
              </p>
              <p className="font-hindi mt-2 text-sm text-charcoal/60">
                Visionary Rural Leader · Demo
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-forest px-4 py-3 text-white shadow-lg sm:block">
            <p className="font-hindi text-2xl font-bold">5+</p>
            <p className="font-hindi text-xs opacity-90">विकास क्षेत्र</p>
          </div>
        </div>
      </div>
    </section>
  );
}

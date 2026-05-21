import { Fingerprint } from "lucide-react";
import { cta } from "../content/hi";

export default function CtaBand() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-br from-forest to-forest-dark py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Fingerprint className="mx-auto opacity-80" size={48} />
        <h2 className="font-hindi mt-4 text-2xl font-bold sm:text-3xl">
          {cta.title}
        </h2>
        <p className="font-hindi mt-3 text-base opacity-90 sm:text-lg">
          {cta.subtitle}
        </p>
        <button
          type="button"
          className="font-hindi mt-8 rounded-full bg-saffron px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-saffron-dark"
        >
          {cta.button}
        </button>
        <p className="font-hindi mt-4 text-xs opacity-60">
          Demo — पंजीकरण सक्रिय नहीं है
        </p>
      </div>
    </section>
  );
}

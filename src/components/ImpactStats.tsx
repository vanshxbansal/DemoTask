import { impactStats } from "../content/hi";

export default function ImpactStats() {
  return (
    <section className="bg-gradient-to-r from-saffron via-saffron-dark to-terracotta py-12 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-hindi text-center text-xl font-bold sm:text-2xl">
          सूर्यपुरा का प्रभाव
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-hindi text-3xl font-bold sm:text-4xl">
                {stat.value}
              </p>
              <p className="font-hindi mt-1 text-sm font-semibold opacity-95">
                {stat.label}
              </p>
              <p className="font-hindi mt-0.5 text-xs opacity-75">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

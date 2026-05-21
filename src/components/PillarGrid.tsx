import {
  GraduationCap,
  Wheat,
  Route,
  Landmark,
  Fingerprint,
  type LucideIcon,
} from "lucide-react";
import { pillars } from "../content/hi";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Wheat,
  Route,
  Landmark,
  Fingerprint,
};

export default function PillarGrid() {
  return (
    <section id="pillars" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-hindi text-2xl font-bold text-charcoal sm:text-3xl">
            विकास के पाँच स्तंभ
          </h2>
          <p className="font-hindi mx-auto mt-3 max-w-xl text-charcoal/65">
            शिक्षा से लेकर डिजिटल पहचान तक — सूर्यपुरा का समग्र विकास मॉडल
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            const delayClass =
              i === 0
                ? ""
                : i === 1
                  ? "animate-delay-100"
                  : i === 2
                    ? "animate-delay-200"
                    : "animate-delay-300";
            return (
              <div
                key={pillar.id}
                className={`animate-fade-in-up ${delayClass} group rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg ${pillar.color}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Icon size={24} />
                </div>
                <h3 className="font-hindi text-lg font-bold">{pillar.title}</h3>
                <p className="font-hindi mt-2 text-sm leading-relaxed opacity-80">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

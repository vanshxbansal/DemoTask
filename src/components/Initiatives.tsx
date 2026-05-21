import { initiatives } from "../content/hi";

export default function Initiatives() {
  return (
    <section id="initiatives" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-hindi text-center text-2xl font-bold text-charcoal sm:text-3xl">
          हाल की पहल
        </h2>
        <p className="font-hindi mx-auto mt-3 max-w-lg text-center text-charcoal/65">
          गांव की जरूरतों पर आधारित — त्वरित और पारदर्शी कार्य
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {initiatives.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-orange-50 transition hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="font-hindi absolute left-3 top-3 rounded-full bg-saffron px-3 py-1 text-xs font-semibold text-white">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-hindi text-lg font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="font-hindi mt-2 text-sm text-charcoal/65">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

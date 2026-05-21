import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "../content/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-100/80 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron text-sm font-bold text-white">
            सू
          </span>
          <span className="font-hindi text-lg font-bold text-charcoal">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-hindi text-sm font-medium text-charcoal/80 transition hover:text-saffron"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full bg-forest px-4 py-2 font-hindi text-sm font-semibold text-white transition hover:bg-forest-dark"
          >
            पंजीकरण
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-charcoal md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="मेनू"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-orange-100 bg-white px-4 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 font-hindi font-medium text-charcoal"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 block rounded-full bg-forest px-4 py-2 text-center font-hindi text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            पंजीकरण
          </a>
        </div>
      )}
    </nav>
  );
}

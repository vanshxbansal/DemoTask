import { Mail, MapPin, Phone } from "lucide-react";
import { footer, site } from "../content/hi";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-orange-100 bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-hindi text-xl font-bold">{site.fullName}</p>
            <p className="font-hindi mt-2 text-sm text-white/70">
              {site.demoDisclaimer}
            </p>
          </div>

          <div className="space-y-3 text-sm text-white/80">
            <p className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-saffron" />
              <span className="font-hindi">{footer.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="shrink-0 text-saffron" />
              {footer.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="shrink-0 text-saffron" />
              {footer.email}
            </p>
          </div>

          <div>
            <p className="font-hindi text-sm font-semibold">Export Assets</p>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              <li>
                <a href="/export/hero" className="hover:text-saffron">
                  Hero Banner (1920×800)
                </a>
              </li>
              <li>
                <a href="/export/post1" className="hover:text-saffron">
                  Social Post 1 (1080×1080)
                </a>
              </li>
              <li>
                <a href="/export/post2" className="hover:text-saffron">
                  Social Post 2 (1080×1080)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2026 सूर्यपुरा ग्राम विकास पोर्टल — Skill Assessment Demo
        </p>
      </div>
    </footer>
  );
}

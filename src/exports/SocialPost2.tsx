import { Wheat, Phone } from "lucide-react";
import { site, socialPosts } from "../content/hi";

export default function SocialPost2() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      <img
        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1080&h=1080&fit=crop&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/60 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-saffron">
            <Wheat className="text-white" size={28} />
          </span>
          <span className="font-hindi text-2xl font-bold text-white">
            {site.name} — किसान सशक्तिकरण
          </span>
        </div>

        <div>
          <h1 className="font-hindi text-6xl font-bold text-white">
            {socialPosts.post2.headline}
          </h1>
          <p className="font-hindi mt-4 text-2xl text-white/90">
            {socialPosts.post2.subline}
          </p>

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-white/15 px-6 py-4 backdrop-blur">
            <Phone className="text-saffron" size={32} />
            <div>
              <p className="font-hindi text-sm text-white/80">हेल्पलाइन</p>
              <p className="text-3xl font-bold text-white">
                {socialPosts.post2.helpline}
              </p>
            </div>
          </div>

          <p className="font-hindi mt-6 rounded-full bg-saffron px-6 py-3 text-center text-xl font-semibold text-white">
            {socialPosts.post2.cta}
          </p>
        </div>
      </div>
    </div>
  );
}

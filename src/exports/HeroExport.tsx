import { hero, site, socialPosts } from "../content/hi";

export default function HeroExport() {
  return (
    <div
      className="relative overflow-hidden bg-charcoal"
      style={{ width: 1920, height: 800 }}
    >
      <img
        src={hero.bgImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />

      <div className="relative flex h-full items-center px-16">
        <div className="max-w-3xl">
          <span className="font-hindi rounded-full bg-saffron px-4 py-1 text-sm font-semibold text-white">
            {site.fullName}
          </span>
          <h1 className="font-hindi mt-6 text-6xl font-bold leading-tight text-white">
            {site.tagline}
          </h1>
          <p className="font-hindi mt-4 text-2xl text-white/85">
            {socialPosts.post1.subline}
          </p>
          <div className="mt-8 flex items-center gap-6">
            <img
              src={hero.leaderImage}
              alt=""
              className="h-24 w-24 rounded-full object-cover ring-4 ring-saffron"
            />
            <div>
              <p className="font-hindi text-xl font-bold text-white">
                {hero.leaderName}
              </p>
              <p className="font-hindi text-lg text-saffron">
                {hero.leaderRole}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-forest/90 px-16 py-4">
        <span className="font-hindi text-lg font-semibold text-white">
          शिक्षा · किसान · सड़क · पंचायत · डिजिटल पहचान
        </span>
        <span className="text-sm text-white/70">Demo Assessment 2026</span>
      </div>
    </div>
  );
}

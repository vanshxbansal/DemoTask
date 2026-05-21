import { hero, site, socialPosts } from "../content/hi";

export default function SocialPost1() {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-cream to-green-100"
      style={{ width: 1080, height: 1080 }}
    >
      <img
        src={hero.bgImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-12">
        <div>
          <span className="font-hindi inline-block rounded-full bg-saffron px-5 py-2 text-lg font-bold text-white">
            {site.name}
          </span>
          <h1 className="font-hindi mt-8 text-5xl font-bold leading-tight text-charcoal">
            {socialPosts.post1.headline}
          </h1>
          <p className="font-hindi mt-4 text-2xl text-charcoal/80">
            {socialPosts.post1.subline}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-hindi text-3xl font-bold text-white drop-shadow-lg">
              {site.tagline}
            </p>
            <p className="font-hindi mt-2 text-xl text-white/90">
              @{socialPosts.post1.cta}
            </p>
          </div>
          <img
            src={hero.leaderImage}
            alt=""
            className="h-32 w-32 rounded-2xl object-cover ring-4 ring-saffron shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

import { CheckCircle2 } from "lucide-react";
import Button from "../common/Button.jsx";

export default function HeroSection({ config }) {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">{config.hero.eyebrow}</p>
        <h1 id="hero-title">{config.hero.title}</h1>
        <p className="hero__lead">{config.hero.description}</p>
        <div className="hero__actions" aria-label="Primary actions">
          <Button href={config.hero.primaryCta.href}>{config.hero.primaryCta.label}</Button>
          <Button href={config.hero.secondaryCta.href} variant="secondary">
            {config.hero.secondaryCta.label}
          </Button>
        </div>
        <ul className="hero__highlights" aria-label="Masar Global highlights">
          {config.hero.highlights.map((item) => (
            <li key={item}>
              <CheckCircle2 aria-hidden="true" size={18} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="route-card" aria-label="Masar Global growth path visual">
        <div className="route-card__topline">
          <span>Growth path</span>
          <strong>{config.brandName}</strong>
        </div>
        <div className="route-map" aria-hidden="true">
          <span className="route-dot route-dot--start" />
          <span className="route-dot route-dot--mid" />
          <span className="route-dot route-dot--end" />
        </div>
        <div className="route-card__steps">
          {["Direction", "Systems", "Market"].map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

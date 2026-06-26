import { BarChart3, Compass, Globe2, LineChart, Sparkles, Workflow } from "lucide-react";
import SectionHeader from "../common/SectionHeader.jsx";

const icons = [Compass, BarChart3, Globe2, Sparkles, Workflow, LineChart];

export default function ServicesSection({ config }) {
  return (
    <section className="section section--light" id="services" aria-labelledby="services-title">
      <SectionHeader
        eyebrow="Services"
        title="One connected growth toolkit"
        description="Each service is content-driven from the central config, so the cards can be reused for another company without changing JSX."
      />

      <div className="services-grid">
        {config.services.map((service, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article className="service-card" key={service.title}>
              <div className="service-card__icon">
                <Icon aria-hidden="true" size={24} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

import SectionHeader from "../common/SectionHeader.jsx";

export default function AboutSection({ config }) {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="about__grid">
        <div>
          <SectionHeader
            eyebrow={config.about.eyebrow}
            title={config.about.title}
            description={config.about.description}
          />
          <div className="stats" aria-label="Masar Global key stats">
            {config.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-cards">
          {config.about.cards.map((card) => (
            <article className="about-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

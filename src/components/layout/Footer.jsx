export default function Footer({ config }) {
  const activeSocialLinks = config.socialLinks.filter((link) => link.href);

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <img className="footer__logo" src={config.logo.src} alt={config.logo.alt} />
          <p>{config.description}</p>
        </div>
        <div className="footer__links" aria-label="Footer navigation">
          {config.navigationLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        {activeSocialLinks.length ? (
          <div className="footer__social" aria-label="Social links">
            {activeSocialLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <p className="footer__meta">Copyright {new Date().getFullYear()} {config.companyName}. All rights reserved.</p>
    </footer>
  );
}

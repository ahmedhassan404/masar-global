export default function MobileBanner({ label, href }) {
  return (
    <a className="mobile-banner" href={href}>
      {label}
    </a>
  );
}

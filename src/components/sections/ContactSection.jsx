import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../common/SectionHeader.jsx";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function ContactSection({ config }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      message: form.message.trim(),
    };

    if (!config.contactEndpoint) {
      console.info("Contact endpoint is not configured yet.", payload);
      setStatus({
        type: "info",
        message: "Contact endpoint is not configured yet. Your message is ready to send once an endpoint is added.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(config.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent. Masar Global will follow up soon." });
    } catch (error) {
      console.error("Contact form submission failed.", error);
      setStatus({
        type: "error",
        message: "Message could not be sent right now. Please try again after checking the endpoint.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section section--contact" id={config.contact.sectionId} aria-labelledby="contact-title">
      <div className="contact-grid">
        <div>
          <SectionHeader title={config.contact.title} description={config.contact.description} />
          <div className="contact-list" aria-label="Contact details">
            <p>
              <Mail aria-hidden="true" size={18} />
              <span>{config.contact.email}</span>
            </p>
            <p>
              <Phone aria-hidden="true" size={18} />
              <span>{config.contact.phone}</span>
            </p>
            <p>
              <MapPin aria-hidden="true" size={18} />
              <span>{config.contact.location}</span>
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={submitForm}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={updateField} autoComplete="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={updateField} autoComplete="tel" />
          </div>
          <div className="form-row">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" value={form.company} onChange={updateField} autoComplete="organization" />
          </div>
          <div className="form-row form-row--full">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={updateField} rows="5" required />
          </div>
          {status.message ? (
            <p className={`form-status form-status--${status.type}`} role="status" aria-live="polite">
              {status.message}
            </p>
          ) : null}
          <button className="submit-button" type="submit" disabled={isSubmitting}>
            <span>{isSubmitting ? "Sending" : "Send Message"}</span>
            <Send aria-hidden="true" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

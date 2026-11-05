const experiments = [
  {
    name: "whatsapp-agent",
    label: "CONVERSATION AUTOMATION",
    description:
      "An automated ordering flow that turns a business number into an interactive storefront, with product browsing and order logging.",
    href: "https://github.com/Uncbatman/whatsapp-agent",
  },
  {
    name: "whatsapp-accelerator",
    label: "API INTEGRATION / ONBOARDING",
    description:
      "A guided onboarding tool designed to make Meta developer setup and API credentials easier for non-technical business owners.",
    href: "https://github.com/Uncbatman/whatsapp-accelerator",
  },
];

export default function BuildLab() {
  return (
    <section className="build-lab" aria-labelledby="build-lab-title">
      <div className="build-lab-heading">
        <div>
          <p className="section-eyebrow">INTEGRATIONS / AUTOMATION</p>
          <h3 id="build-lab-title">Other things I&apos;ve built.</h3>
        </div>
        <p className="paragraph-panel">
          Alongside visual work, I like taking an idea apart, learning how it works, and connecting the pieces into a useful tool.
        </p>
      </div>
      <div className="experiment-grid">
        {experiments.map((experiment, index) => (
          <a
            className="experiment-card"
            href={experiment.href}
            key={experiment.name}
            target="_blank"
            rel="noreferrer"
          >
            <div className="experiment-card-top">
              <span>0{index + 1} / OPEN SOURCE</span>
              <span aria-hidden="true">↗</span>
            </div>
            <p className="experiment-label">{experiment.label}</p>
            <h4>{experiment.name}</h4>
            <p className="experiment-description paragraph-panel">{experiment.description}</p>
            <span className="experiment-link">VIEW REPOSITORY <span aria-hidden="true">→</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Marquee() {
  const items = [
    "Stockholm",
    "Skärgården",
    "Göteborg",
    "Malmö",
    "Lund",
    "Visby",
    "Båstad",
    "Saltsjöbaden",
    "Lidingö",
    "Falsterbo",
  ];
  const full = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {full.map((c, i) => (
          <span key={i} className="marquee-item">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
